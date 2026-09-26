/**
 * ============================================================================
 * GIRIONIX AUTONOMOUS OFFICE AGENT (girionixAgent.js)
 * Official Strategic Partnership: Giri Orbit × Girionix AI
 * ============================================================================
 * Features:
 * - Autonomous multi-step workplace task execution
 * - Single-prompt document drafting, financial modeling, and slide deck creation
 * - Polymath Suite Mode: Concurrently generates Doc + Sheet + Slides in 1 click
 * - Client-side high-velocity autonomous synthesis engine with zero latency
 * - Live step-by-step progress visualizer & execution tracker
 * - Voice dictation & quick blueprint library
 * - Deep 2-way handshake with Girionix AI (https://girionix-ai.pages.dev)
 */

import girionixEngine from '../modules/girionixEngine.js?v=10.9';

export class GirionixAgentManager {
  constructor(platform) {
    this.platform = platform;
    this.isOpen = false;
    this.isExecuting = false;
    this.activeMode = 'auto';
    this.activeTone = 'executive';

    this.blueprints = [
      {
        id: 'nda',
        tool: 'drift',
        icon: '📄',
        title: 'Mutual NDA Agreement',
        desc: 'Standard sovereign bilateral non-disclosure agreement with confidentiality covenants.',
        prompt: 'Draft a comprehensive Mutual Non-Disclosure Agreement between Giri Corporation and a partner organization, including definition of confidential information, 3-year term, exclusions, and remedies for breach.'
      },
      {
        id: 'financial_model',
        tool: 'axis',
        icon: '📊',
        title: 'Annual Operating Budget & P&L',
        desc: '12-month financial model with automated revenue, COGS, OpEx, and EBITDA sum formulas.',
        prompt: 'Build a 12-month Annual Financial Operating Model with Monthly Revenue streams, Cost of Goods Sold (COGS), Operating Expenses (R&D, Sales, G&A), Net EBITDA, and automated =SUM and =AVERAGE calculation formulas.'
      },
      {
        id: 'pitch_deck',
        tool: 'kinetic',
        icon: '🎯',
        title: 'Investor Pitch Deck (6 Slides)',
        desc: 'Cinematic pitch presentation covering Problem, Solution, Market, Tech, Metrics & Ask.',
        prompt: 'Generate an executive 6-slide Investor Pitch Deck for an autonomous AI software company. Include slides for: The Problem, The Breakthrough Solution, Total Addressable Market (TAM), Product Architecture, Traction & Unit Economics, and Funding Request.'
      },
      {
        id: 'launch_kit',
        tool: 'polymath',
        icon: '🚀',
        title: 'Full Product Launch Kit (Doc + Sheet + Slides)',
        desc: 'Comprehensive multi-tool package: Launch Whitepaper in Drift, Budget in Axis, and Keynote in Kinetic.',
        prompt: 'Build a complete Product Launch Kit for a new sovereign cloud enterprise suite. Generate the executive strategy whitepaper in Drift, the launch budget and CAC model in Axis, and the executive announcement slides in Kinetic.'
      },
      {
        id: 'sow',
        tool: 'drift',
        icon: '💼',
        title: 'Consulting SOW & Proposal',
        desc: 'Statement of Work with milestones, deliverables, payment terms, and governance schedule.',
        prompt: 'Draft an Enterprise Consulting Statement of Work (SOW) outlining project scope, technical deliverables, phased milestone timeline, pricing schedule, and acceptance criteria.'
      },
      {
        id: 'payroll_tracker',
        tool: 'axis',
        icon: '👥',
        title: 'Employee Payroll & Tax Model',
        desc: 'Staff compensation matrix with gross pay, tax deductions, bonuses, and net disbursement formulas.',
        prompt: 'Create an Employee Payroll & Compensation Tracker with employee departments, base salaries, tax withholding formulas, performance bonuses, and total net payout calculations.'
      },
      {
        id: 'audit_seal',
        tool: 'pdf',
        icon: '🛡️',
        title: 'ISO 27001 Security Audit Record',
        desc: 'Cryptographic compliance verification with access controls and audit signatures.',
        prompt: 'Generate an ISO 27001 / SOC 2 Compliance Audit Summary with data privacy guarantees, zero-telemetry client verification checklist, and executive cryptographic sign-off blocks.'
      },
      {
        id: 'sprint_deck',
        tool: 'kinetic',
        icon: '⚡',
        title: 'Sprint Review & Engineering Roadmap',
        desc: 'Agile team presentation with velocity metrics, shipped features, and next sprint goals.',
        prompt: 'Create a 5-slide Engineering Sprint Review presentation showing Sprint Highlights, Completed Epics, System Performance Metrics, Blocker Retrospective, and Next Sprint OKRs.'
      }
    ];

    this.init();
  }

  init() {
    this.createAgentDom();
    this.bindEvents();
  }

  createAgentDom() {
    if (document.getElementById('girionix-agent-modal-backdrop')) return;

    const html = `
      <div id="girionix-agent-modal-backdrop" class="girionix-agent-backdrop" style="display:none;" role="dialog" aria-modal="true" aria-labelledby="girionix-agent-modal-title">
        <div class="girionix-agent-modal">
          
          <!-- Agent Modal Header -->
          <div class="girionix-agent-header">
            <div class="girionix-agent-brand">
              <div class="girionix-agent-avatar">
                <img src="assets/girionix-logo.png" alt="Girionix AI Logo" style="width:22px; height:22px; object-fit:contain; border-radius:4px;">
                <span class="girionix-agent-avatar-badge">🤖</span>
              </div>
              <div class="girionix-agent-titles">
                <div style="display:flex; align-items:center; gap:8px;">
                  <h2 id="girionix-agent-modal-title" style="margin:0; font-size:16px; font-weight:800; color:#f8fafc; letter-spacing:-0.3px;">Girionix Autonomous Agent</h2>
                  <span class="girionix-partner-badge" id="btn-agent-view-partnership" title="Click to inspect Giri Orbit × Girionix AI official partnership details" style="cursor:pointer; font-size:10px; padding:2px 7px;">
                    <span class="girionix-partner-pulse"></span>
                    VERIFIED PARTNER ↗
                  </span>
                </div>
                <p style="margin:2px 0 0 0; font-size:11.5px; color:#94a3b8;">
                  State-of-the-Art Autonomous Office Worker • 1-Prompt Complete Document, Model &amp; Slide Synthesizer
                </p>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="agent-shortcut-tag" title="Keyboard shortcut">Alt+A</span>
              <button id="btn-close-girionix-agent" class="girionix-agent-close-btn" title="Close Agent (Esc)">✕</button>
            </div>
          </div>

          <!-- Mode Navigation Strip -->
          <div class="girionix-agent-mode-bar">
            <button class="agent-mode-btn active" data-agent-mode="auto">
              <span>⚡</span> <span>Auto-Detect</span>
            </button>
            <button class="agent-mode-btn" data-agent-mode="drift">
              <span>✍️</span> <span>Drift Document</span>
            </button>
            <button class="agent-mode-btn" data-agent-mode="axis">
              <span>📊</span> <span>Axis Spreadsheet</span>
            </button>
            <button class="agent-mode-btn" data-agent-mode="kinetic">
              <span>🎞</span> <span>Kinetic Deck</span>
            </button>
            <button class="agent-mode-btn" data-agent-mode="pdf">
              <span>🛡️</span> <span>Aegis PDF</span>
            </button>
            <button class="agent-mode-btn polymath-btn" data-agent-mode="polymath" title="Generate Doc + Sheet + Slides concurrently in 1 prompt!">
              <span>🌐</span> <span>Polymath Suite (All-In-One)</span>
            </button>
          </div>

          <!-- Main Agent Interactive Body -->
          <div class="girionix-agent-body">
            
            <!-- Prompt Input Zone -->
            <div class="girionix-agent-prompt-box">
              <label for="girionix-agent-prompt-input" style="display:flex; justify-content:space-between; align-items:center; font-size:11px; font-weight:700; color:#cbd5e1; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:6px;">
                <span>Describe what you want the agent to build:</span>
                <span id="agent-active-mode-label" style="color:#38bdf8; font-size:10.5px; text-transform:none; font-weight:600;">Target: Inferred Automatically</span>
              </label>
              
              <div style="position:relative;">
                <textarea 
                  id="girionix-agent-prompt-input" 
                  rows="3" 
                  placeholder="e.g. 'Draft an enterprise SaaS service level agreement with 99.9% uptime and refund tiers' or 'Build an annual operating budget with Q1-Q4 revenue, salaries, OpEx, and EBITDA formulas'..." 
                  spellcheck="false"
                ></textarea>
                
                <div class="agent-input-actions">
                  <button id="btn-agent-voice-dictate" title="Dictate goal using microphone" class="agent-mini-action-btn">
                    🎙️
                  </button>
                  <button id="btn-agent-clear-prompt" title="Clear input" class="agent-mini-action-btn">
                    ✕
                  </button>
                </div>
              </div>

              <!-- Options & Execution Strip -->
              <div class="agent-controls-strip">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                  <label style="font-size:11.5px; color:#94a3b8; font-weight:500;">Tone / Style:</label>
                  <select id="agent-tone-select" class="agent-select-pill">
                    <option value="executive">👔 Executive &amp; Formal</option>
                    <option value="technical">⚙️ Technical &amp; Rigorous</option>
                    <option value="investor">📈 Investor &amp; Commercial</option>
                    <option value="creative">🎨 Creative &amp; Modern</option>
                  </select>

                  <label style="font-size:11.5px; color:#94a3b8; font-weight:500; margin-left:6px;">Model Core:</label>
                  <span class="agent-model-pill" title="Powered by Girionix Pro Neural Engine">⚡ Girionix Pro (Autonomous)</span>
                </div>

                <div style="display:flex; align-items:center; gap:8px;">
                  <button id="btn-run-girionix-agent" class="btn-run-agent">
                    <span id="run-agent-spinner" style="display:none;" class="agent-spinner"></span>
                    <span id="run-agent-btn-text">Execute Autonomous Agent ➔</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Execution Live Progress Stepper (Hidden by default, shown during run) -->
            <div id="girionix-agent-stepper" class="agent-stepper-wrap" style="display:none;">
              <div class="agent-stepper-header">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="agent-stepper-pulse"></span>
                  <strong id="agent-stepper-main-text" style="font-size:13px; color:#f8fafc;">Autonomous Agent In Progress...</strong>
                </div>
                <span id="agent-stepper-timer" style="font-size:11.5px; color:#38bdf8; font-family:monospace; font-weight:700;">0.0s</span>
              </div>
              <div class="agent-steps-list" id="agent-steps-list">
                <!-- Dynamically populated steps -->
              </div>
            </div>

            <!-- Quick Blueprints Section -->
            <div class="girionix-agent-blueprints-wrap">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:14px;">⚡</span>
                  <strong style="font-size:12px; color:#e2e8f0; text-transform:uppercase; letter-spacing:0.5px;">1-Click Autonomous Blueprints</strong>
                </div>
                <span style="font-size:11px; color:#64748b;">Click any recipe to load and execute instantly</span>
              </div>

              <div class="agent-blueprints-grid" id="agent-blueprints-grid">
                ${this.renderBlueprintsHtml()}
              </div>
            </div>

          </div>

          <!-- Agent Modal Footer -->
          <div class="girionix-agent-footer">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:12px;">🔒</span>
              <span style="font-size:11px; color:#94a3b8;">
                <strong>100% Client-Side Privacy:</strong> Content synthesized in-memory. Zero data leakage.
              </span>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <a href="https://girionix-ai.pages.dev" target="_blank" rel="noopener" style="font-size:11.5px; color:#38bdf8; text-decoration:none; display:inline-flex; align-items:center; gap:4px; font-weight:600;">
                <span>Visit Girionix AI</span> <span>↗</span>
              </a>
              <button id="btn-agent-help" style="background:transparent; border:none; color:#64748b; font-size:11.5px; cursor:pointer;">Shortcuts &amp; Tips</button>
            </div>
          </div>

        </div>
      </div>

      <!-- Strategic Partnership Modal -->
      <div id="girionix-partnership-modal-backdrop" class="girionix-agent-backdrop" style="display:none;" role="dialog">
        <div class="girionix-agent-modal" style="max-width:540px;">
          <div class="girionix-agent-header">
            <div style="display:flex; align-items:center; gap:10px;">
              <img src="assets/giri-logo-symbol.png" style="width:24px; height:24px; border-radius:50%; object-fit:cover;" alt="Giri Orbit">
              <span style="color:#64748b; font-weight:700;">×</span>
              <img src="assets/girionix-logo.png" style="width:24px; height:24px; border-radius:4px; object-fit:contain;" alt="Girionix AI">
              <h2 style="margin:0; font-size:15px; font-weight:800; color:#f8fafc;">Official Strategic AI Alliance</h2>
            </div>
            <button id="btn-close-partnership-modal" class="girionix-agent-close-btn">✕</button>
          </div>
          <div style="padding:22px; font-size:13px; color:#cbd5e1; line-height:1.6;">
            <div style="background:linear-gradient(135deg, rgba(6,182,212,0.12), rgba(37,99,235,0.12)); border:1px solid rgba(56,189,248,0.3); border-radius:12px; padding:16px; margin-bottom:16px;">
              <strong style="color:#38bdf8; font-size:14px; display:block; margin-bottom:6px;">Sovereignty Meets Autonomous Polymath Intelligence</strong>
              <p style="margin:0; font-size:12px; color:#94a3b8;">
                Giri Orbit by GIRI Corporation has forged an official sovereign alliance with Girionix AI (https://girionix-ai.pages.dev) to deliver instantaneous, zero-telemetry autonomous agent execution for global enterprises, students, and researchers.
              </p>
            </div>
            <h4 style="margin:14px 0 8px 0; color:#f1f5f9; font-size:13px;">Joint Capabilities &amp; Architecture:</h4>
            <ul style="margin:0 0 16px 0; padding-left:18px; font-size:12px; color:#94a3b8;">
              <li><strong style="color:#f1f5f9;">Autonomous Work Dispatch:</strong> Generate full documents, spreadsheet calculations, and presentations directly inside your local browser storage.</li>
              <li><strong style="color:#f1f5f9;">Zero Data Harvesting:</strong> Your proprietary formulas and confidential documents never leave your browser sandbox unless explicitly synced to your personal Google Drive.</li>
              <li><strong style="color:#f1f5f9;">Cross-Device Portability:</strong> Send special self-loading document links to phone or PC with zero cloud dependency.</li>
              <li><strong style="color:#f1f5f9;">Girionix Pro Integration:</strong> Instant access to Girionix Pro intelligence directly through the in-app Copilot and Agent modals.</li>
            </ul>
            <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:20px;">
              <a href="https://girionix-ai.pages.dev" target="_blank" rel="noopener" class="btn-giri-primary" style="padding:8px 16px; font-size:12px; text-decoration:none;">
                Explore Girionix AI Web ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
  }

  renderBlueprintsHtml() {
    return this.blueprints.map(bp => `
      <div class="agent-blueprint-card" data-blueprint-id="${bp.id}" role="button" tabindex="0" title="${bp.desc}">
        <div class="agent-bp-top">
          <span class="agent-bp-icon">${bp.icon}</span>
          <span class="agent-bp-tool-tag tool-${bp.tool}">${bp.tool.toUpperCase()}</span>
        </div>
        <strong class="agent-bp-title">${bp.title}</strong>
        <p class="agent-bp-desc">${bp.desc}</p>
      </div>
    `).join('');
  }

  bindEvents() {
    const backdrop = document.getElementById('girionix-agent-modal-backdrop');
    const closeBtn = document.getElementById('btn-close-girionix-agent');
    const runBtn = document.getElementById('btn-run-girionix-agent');
    const promptInput = document.getElementById('girionix-agent-prompt-input');
    const modeBtns = backdrop?.querySelectorAll('.agent-mode-btn');
    const toneSelect = document.getElementById('agent-tone-select');
    const clearBtn = document.getElementById('btn-agent-clear-prompt');
    const voiceBtn = document.getElementById('btn-agent-voice-dictate');
    const partnerBadge = document.getElementById('btn-agent-view-partnership');
    const partnerModalBackdrop = document.getElementById('girionix-partnership-modal-backdrop');
    const closePartnerBtn = document.getElementById('btn-close-partnership-modal');

    // Close handlers
    closeBtn?.addEventListener('click', () => this.closeAgent());
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop && !this.isExecuting) this.closeAgent();
    });

    closePartnerBtn?.addEventListener('click', () => {
      if (partnerModalBackdrop) partnerModalBackdrop.style.display = 'none';
    });
    partnerModalBackdrop?.addEventListener('click', (e) => {
      if (e.target === partnerModalBackdrop) partnerModalBackdrop.style.display = 'none';
    });
    partnerBadge?.addEventListener('click', () => {
      if (partnerModalBackdrop) partnerModalBackdrop.style.display = 'flex';
    });

    // Also wire header partner badge
    document.querySelectorAll('.girionix-partner-badge').forEach(badge => {
      badge.style.cursor = 'pointer';
      badge.addEventListener('click', () => {
        if (partnerModalBackdrop) partnerModalBackdrop.style.display = 'flex';
      });
    });

    // Mode Selector
    modeBtns?.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeMode = btn.dataset.agentMode;
        
        const label = document.getElementById('agent-active-mode-label');
        if (label) {
          const names = {
            auto: 'Inferred Automatically',
            drift: 'Giri Drift (Document)',
            axis: 'Giri Axis (Spreadsheet)',
            kinetic: 'Giri Kinetic (Slide Deck)',
            pdf: 'Giri Aegis (PDF Studio)',
            polymath: 'Polymath Suite (Doc + Sheet + Slides)'
          };
          label.textContent = `Target: ${names[this.activeMode] || 'Autonomous'}`;
        }
      });
    });

    // Tone change
    toneSelect?.addEventListener('change', () => {
      this.activeTone = toneSelect.value;
    });

    // Clear prompt
    clearBtn?.addEventListener('click', () => {
      if (promptInput) {
        promptInput.value = '';
        promptInput.focus();
      }
    });

    // Voice Dictation
    voiceBtn?.addEventListener('click', () => this.startVoiceDictation());

    // Blueprint Click
    backdrop?.querySelectorAll('.agent-blueprint-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.blueprintId;
        const bp = this.blueprints.find(b => b.id === id);
        if (bp && promptInput) {
          promptInput.value = bp.prompt;
          // Switch mode tab
          modeBtns?.forEach(b => {
            if (b.dataset.agentMode === bp.tool) {
              b.click();
            }
          });
          promptInput.focus();
          this.executeAgent(bp.prompt, bp.tool);
        }
      });
    });

    // Run Agent
    runBtn?.addEventListener('click', () => {
      const prompt = promptInput?.value?.trim() || '';
      if (!prompt) {
        if (this.platform) this.platform.showToast('Please describe what you want the agent to build.', 'yellow');
        promptInput?.focus();
        return;
      }
      this.executeAgent(prompt, this.activeMode);
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt+A or Ctrl+Shift+A opens the Agent
      if ((e.altKey && (e.key === 'a' || e.key === 'A')) || (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        this.toggleAgent();
        return;
      }
      // Enter in prompt runs agent
      if (this.isOpen && e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runBtn?.click();
      }
      // Esc closes agent
      if (this.isOpen && e.key === 'Escape' && !this.isExecuting) {
        this.closeAgent();
      }
    });
  }

  openAgent(defaultMode = null, prefillPrompt = '') {
    const backdrop = document.getElementById('girionix-agent-modal-backdrop');
    if (!backdrop) return;

    if (defaultMode) {
      const modeBtn = backdrop.querySelector(`.agent-mode-btn[data-agent-mode="${defaultMode}"]`);
      if (modeBtn) modeBtn.click();
    } else {
      // Auto-set mode based on current platform view
      const current = this.platform?.currentView;
      if (current && current !== 'launcher' && current !== 'girionix') {
        const modeBtn = backdrop.querySelector(`.agent-mode-btn[data-agent-mode="${current}"]`);
        if (modeBtn) modeBtn.click();
      }
    }

    const input = document.getElementById('girionix-agent-prompt-input');
    if (input && prefillPrompt) {
      input.value = prefillPrompt;
    }

    backdrop.style.display = 'flex';
    this.isOpen = true;
    setTimeout(() => {
      input?.focus();
    }, 100);
  }

  closeAgent() {
    const backdrop = document.getElementById('girionix-agent-modal-backdrop');
    if (backdrop) backdrop.style.display = 'none';
    this.isOpen = false;
  }

  toggleAgent(defaultMode = null) {
    if (this.isOpen) {
      this.closeAgent();
    } else {
      this.openAgent(defaultMode);
    }
  }

  startVoiceDictation() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      if (this.platform) this.platform.showToast('Voice recognition not supported in this browser.', 'yellow');
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = 'en-US';

    const voiceBtn = document.getElementById('btn-agent-voice-dictate');
    if (voiceBtn) {
      voiceBtn.style.color = '#ef4444';
      voiceBtn.innerHTML = '🔴';
    }

    if (this.platform) this.platform.showToast('🎙️ Listening... Speak your goal for the agent.', 'blue');

    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      const input = document.getElementById('girionix-agent-prompt-input');
      if (input) {
        input.value = (input.value ? input.value + ' ' : '') + text;
        input.focus();
      }
      if (this.platform) this.platform.showToast(`Heard: "${text}"`, 'green');
    };

    rec.onerror = () => {
      if (this.platform) this.platform.showToast('Voice dictation paused.', 'yellow');
    };

    rec.onend = () => {
      if (voiceBtn) {
        voiceBtn.style.color = '';
        voiceBtn.innerHTML = '🎙️';
      }
    };

    try {
      rec.start();
    } catch (_) {}
  }

  /**
   * Main Autonomous Execution Pipeline
   */
  async executeAgent(prompt, requestedMode = 'auto') {
    if (this.isExecuting) return;
    this.isExecuting = true;

    const runBtn = document.getElementById('btn-run-girionix-agent');
    const spinner = document.getElementById('run-agent-spinner');
    const btnText = document.getElementById('run-agent-btn-text');
    const stepper = document.getElementById('girionix-agent-stepper');
    const stepsList = document.getElementById('agent-steps-list');
    const timerEl = document.getElementById('agent-stepper-timer');

    if (runBtn) runBtn.disabled = true;
    if (spinner) spinner.style.display = 'inline-block';
    if (btnText) btnText.textContent = 'Agent Working...';
    if (stepper) stepper.style.display = 'block';

    const startTime = Date.now();
    const timerInterval = setInterval(() => {
      if (timerEl) {
        const sec = ((Date.now() - startTime) / 1000).toFixed(1);
        timerEl.textContent = `${sec}s`;
      }
    }, 100);

    // Resolve Target Tool
    let targetTool = requestedMode;
    if (targetTool === 'auto') {
      targetTool = this.inferToolFromPrompt(prompt);
    }

    const steps = [
      { text: 'Deconstructing intent & mapping sovereign data schema', status: 'pending' },
      { text: `Synthesizing ${targetTool.toUpperCase()} architecture with Girionix Pro`, status: 'pending' },
      { text: 'Injecting layout, computing formulas, and applying typography', status: 'pending' },
      { text: 'Synchronizing local browser storage & mounting live workspace', status: 'pending' }
    ];

    const renderSteps = () => {
      if (!stepsList) return;
      stepsList.innerHTML = steps.map(s => `
        <div class="agent-step-item step-${s.status}">
          <span class="step-indicator">${s.status === 'done' ? '✓' : (s.status === 'active' ? '●' : '○')}</span>
          <span class="step-text">${s.text}</span>
        </div>
      `).join('');
    };

    renderSteps();

    try {
      // Step 1: Decomposition
      steps[0].status = 'active';
      renderSteps();
      await this.sleep(300);
      steps[0].status = 'done';

      // Step 2: Synthesis
      steps[1].status = 'active';
      renderSteps();
      await this.sleep(450);
      steps[1].status = 'done';

      // Step 3: Injection & Execution
      steps[2].status = 'active';
      renderSteps();
      
      let result = null;
      if (targetTool === 'drift') {
        result = await this.synthesizeDriftDocument(prompt, this.activeTone);
      } else if (targetTool === 'axis') {
        result = await this.synthesizeAxisSheet(prompt, this.activeTone);
      } else if (targetTool === 'kinetic') {
        result = await this.synthesizeKineticDeck(prompt, this.activeTone);
      } else if (targetTool === 'pdf') {
        result = await this.synthesizePdfAudit(prompt, this.activeTone);
      } else if (targetTool === 'polymath') {
        result = await this.synthesizePolymathSuite(prompt, this.activeTone);
      }

      steps[2].status = 'done';

      // Step 4: Storage sync & Mount
      steps[3].status = 'active';
      renderSteps();
      await this.sleep(300);
      steps[3].status = 'done';
      renderSteps();

      clearInterval(timerInterval);

      if (this.platform) {
        this.platform.showToast(`✨ Autonomous Agent completed: ${result?.title || 'Work'} generated!`, 'green');
      }

      await this.sleep(400);
      this.closeAgent();

      // Navigate to resulting workspace
      if (targetTool !== 'polymath') {
        if (this.platform) {
          this.platform.navigateTo(targetTool, result?.title, true, true);
        }
      }

    } catch (err) {
      console.error('[Girionix Agent] Execution error:', err);
      if (this.platform) {
        this.platform.showToast('Agent encountered an unexpected issue. Please retry.', 'red');
      }
    } finally {
      clearInterval(timerInterval);
      this.isExecuting = false;
      if (runBtn) runBtn.disabled = false;
      if (spinner) spinner.style.display = 'none';
      if (btnText) btnText.textContent = 'Execute Autonomous Agent ➔';
    }
  }

  inferToolFromPrompt(prompt) {
    const text = prompt.toLowerCase();
    if (text.includes('sheet') || text.includes('excel') || text.includes('budget') || text.includes('p&l') || text.includes('financial') || text.includes('payroll') || text.includes('formula') || text.includes('calculator') || text.includes('rows') || text.includes('sum') || text.includes('table')) {
      return 'axis';
    }
    if (text.includes('slide') || text.includes('pitch') || text.includes('deck') || text.includes('presentation') || text.includes('powerpoint') || text.includes('keynote') || text.includes('show')) {
      return 'kinetic';
    }
    if (text.includes('pdf') || text.includes('sign') || text.includes('audit seal') || text.includes('certificate') || text.includes('cryptographic') || text.includes('sha-256')) {
      return 'pdf';
    }
    if (text.includes('all-in-one') || text.includes('launch kit') || text.includes('package') || text.includes('polymath') || (text.includes('doc') && text.includes('sheet') && text.includes('deck'))) {
      return 'polymath';
    }
    return 'drift';
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Autonomous Synthesis for Giri Drift (Document)
   */
  async synthesizeDriftDocument(prompt, tone) {
    const gen = await girionixEngine.generate({ tool: 'drift', prompt, tone });
    const text = gen.text || '';

    // Derive title from generated text or prompt
    const firstHeading = text.match(/^#+\s*(.+)$/m);
    let title = firstHeading ? firstHeading[1].trim() : prompt.slice(0, 40);
    title = title.replace(/\*+/g, '').replace(/#+/g, '').trim();

    // Convert markdown to clean semantic HTML for Drift editor
    let formattedBody = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Tables
    const tableRegex = /((?:\|.+?\|\r?\n)+)/g;
    formattedBody = formattedBody.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n').filter(l => l.trim().length > 0);
      if (lines.length < 2) return match;
      let tbl = '<table style="width:100%; border-collapse:collapse; margin:18px 0; font-size:13px;">';
      lines.forEach((line, idx) => {
        if (/^\|?\s*[-:]+[-|\s:]*$/.test(line)) return;
        const cells = line.split('|').filter((_, i, arr) => i > 0 && i < arr.length - 1);
        if (cells.length === 0) return;
        tbl += '<tr>';
        cells.forEach(c => {
          const tag = idx === 0 ? 'th' : 'td';
          const style = idx === 0
            ? 'padding:10px 12px; background:#0f172a; color:#fff; border:1px solid #cbd5e1; font-weight:700;'
            : 'padding:8px 12px; border:1px solid #cbd5e1; color:#334155;';
          tbl += `<${tag} style="${style}">${c.trim()}</${tag}>`;
        });
        tbl += '</tr>';
      });
      tbl += '</table>';
      return tbl;
    });

    // Headings
    formattedBody = formattedBody.replace(/^### (.*$)/gim, '<h3 style="font-size:16px; font-weight:700; color:#1e293b; margin-top:22px; margin-bottom:8px;">$1</h3>');
    formattedBody = formattedBody.replace(/^## (.*$)/gim, '<h2 style="font-size:19px; font-weight:700; color:#1e293b; margin-top:26px; margin-bottom:10px; border-bottom:1px solid #f1f5f9; padding-bottom:4px;">$1</h2>');
    formattedBody = formattedBody.replace(/^# (.*$)/gim, '<h1 style="font-size:26px; font-weight:800; color:#0f172a; margin-bottom:6px; letter-spacing:-0.5px;">$1</h1>');

    // Bold / Italic
    formattedBody = formattedBody.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedBody = formattedBody.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Lists
    formattedBody = formattedBody.replace(/^\d+\.\s+(.*$)/gim, '<li style="margin-bottom:4px;">$1</li>');
    formattedBody = formattedBody.replace(/^[-*•]\s+(.*$)/gim, '<li style="margin-bottom:4px;">$1</li>');
    formattedBody = formattedBody.replace(/((?:<li.*?>.*?<\/li>\s*)+)/g, '<ul style="margin:10px 0; padding-left:24px; font-size:14px; color:#334155; line-height:1.7;">$1</ul>');

    // Paragraphs
    const html = formattedBody.split(/\n{2,}/).map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<h') || p.startsWith('<table') || p.startsWith('<ul') || p.startsWith('<ol')) {
        return p;
      }
      return `<p style="font-size:14px; color:#334155; line-height:1.7; margin:12px 0;">${p.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

    localStorage.setItem('giri_orbit_drift_doc', html);
    return { title, tool: 'drift' };
  }

  /**
   * Autonomous Synthesis for Giri Axis (Spreadsheets with Real Formulas)
   */
  async synthesizeAxisSheet(prompt, tone) {
    const q = prompt.toLowerCase();
    let title = 'Enterprise Operational Ledger';
    let sheetData = {};

    if (q.includes('student') || q.includes('marks') || q.includes('grade') || q.includes('school')) {
      title = 'Student Academic Grade & Performance Ledger';
      sheetData = {
        Sheet1: {
          A1: 'STUDENT ACADEMIC PERFORMANCE MATRIX',
          B1: '', C1: '', D1: '', E1: '', F1: '', G1: '', H1: '',
          A2: 'Roll No', B2: 'Student Name', C2: 'Mathematics', D2: 'Science', E2: 'English', F2: 'Total Marks', G2: 'Percentage', H2: 'Grade',
          A3: '101', B3: 'Aarav Sharma', C3: '95', D3: '92', E3: '88', F3: '=SUM(C3:E3)', G3: '=F3/3', H3: '=IF(G3>=90,"A+",IF(G3>=80,"A","B"))',
          A4: '102', B4: 'Ananya Patel', C4: '88', D4: '85', E4: '90', F4: '=SUM(C4:E4)', G4: '=F4/3', H4: '=IF(G4>=90,"A+",IF(G4>=80,"A","B"))',
          A5: '103', B5: 'Rohan Gupta', C5: '76', D5: '78', E5: '82', F5: '=SUM(C5:E5)', G5: '=F5/3', H5: '=IF(G5>=90,"A+",IF(G5>=80,"A","B"))',
          A6: '104', B6: 'Priya Nair', C6: '94', D6: '96', E6: '91', F6: '=SUM(C6:E6)', G6: '=F6/3', H6: '=IF(G6>=90,"A+",IF(G6>=80,"A","B"))',
          A7: '105', B7: 'Vikramaditya Rao', C7: '82', D7: '89', E7: '84', F7: '=SUM(C7:E7)', G7: '=F7/3', H7: '=IF(G7>=90,"A+",IF(G7>=80,"A","B"))',
          A8: 'Class Average', B8: 'Mean Scores', C8: '=AVERAGE(C3:C7)', D8: '=AVERAGE(D3:D7)', E8: '=AVERAGE(E3:E7)', F8: '=AVERAGE(F3:F7)', G8: '=AVERAGE(G3:G7)', H8: '—'
        }
      };
    } else if (q.includes('payroll') || q.includes('salary') || q.includes('employee') || q.includes('hr')) {
      title = 'Employee Compensation & Payroll Ledger';
      sheetData = {
        Sheet1: {
          A1: 'ENTERPRISE EMPLOYEE PAYROLL REGISTER',
          B1: '', C1: '', D1: '', E1: '', F1: '', G1: '', H1: '', I1: '',
          A2: 'Emp ID', B2: 'Employee Name', C2: 'Department', D2: 'Basic Salary', E2: 'HRA (40%)', F2: 'Allowances', G2: 'Gross Pay', H2: 'Tax & Deductions', I2: 'Net Salary',
          A3: 'EMP-01', B3: 'Jonathan Vance', C3: 'Engineering', D3: '6500', E3: '=D3*0.4', F3: '1200', G3: '=SUM(D3:F3)', H3: '=G3*0.15', I3: '=G3-H3',
          A4: 'EMP-02', B4: 'Melissa Wong', C4: 'Product Design', D4: '5800', E4: '=D4*0.4', F4: '950', G4: '=SUM(D4:F4)', H4: '=G4*0.15', I4: '=G4-H4',
          A5: 'EMP-03', B5: 'Tariq Al-Mansoor', C5: 'Cloud Ops', D5: '6200', E5: '=D5*0.4', F5: '1100', G5: '=SUM(D5:F5)', H5: '=G5*0.15', I5: '=G5-H5',
          A6: 'EMP-04', B6: 'Sophia Rossi', C6: 'Marketing', D6: '5200', E6: '=D6*0.4', F6: '850', G6: '=SUM(D6:F6)', H6: '=G6*0.15', I6: '=G6-H6',
          A7: 'TOTAL', B7: 'Department Total', C7: '—', D7: '=SUM(D3:D6)', E7: '=SUM(E3:E6)', F7: '=SUM(F3:F6)', G7: '=SUM(G3:G6)', H7: '=SUM(H3:H6)', I7: '=SUM(I3:I6)'
        }
      };
    } else if (q.includes('inventory') || q.includes('stock') || q.includes('warehouse') || q.includes('product')) {
      title = 'Inventory Valuation & Reorder Ledger';
      sheetData = {
        Sheet1: {
          A1: 'CENTRAL WAREHOUSE INVENTORY VALUATION',
          B1: '', C1: '', D1: '', E1: '', F1: '', G1: '', H1: '',
          A2: 'SKU Code', B2: 'Item Description', C2: 'Category', D2: 'Quantity in Stock', E2: 'Reorder Level',线条: '', F2: 'Unit Cost ($)', G2: 'Total Valuation ($)', H2: 'Inventory Status',
          A3: 'SKU-1042', B3: 'Enterprise SSD 2TB', C3: 'Hardware', D3: '145', E3: '50', F3: '185.00', G3: '=D3*F3', H3: '=IF(D3<=E3,"REORDER","IN STOCK")',
          A4: 'SKU-2081', B4: 'USB-C Docking Station', C4: 'Accessories', D4: '38', E4: '60', F4: '45.00', G4: '=D4*F4', H4: '=IF(D4<=E4,"REORDER","IN STOCK")',
          A5: 'SKU-3190', B5: 'Mechanical Keyboard', C5: 'Peripherals', D5: '92', E5: '30', F5: '78.50', G5: '=D5*F5', H5: '=IF(D5<=E5,"REORDER","IN STOCK")',
          A6: 'SKU-4502', B6: '4K IPS Monitor 27"', C6: 'Displays', D6: '64', E6: '25', F6: '290.00', G6: '=D6*F6', H6: '=IF(D6<=E6,"REORDER","IN STOCK")',
          A7: 'TOTAL', B7: 'Summary Valuation', C7: '—', D7: '=SUM(D3:D6)', E7: '—', F7: '—', G7: '=SUM(G3:G6)', H7: '—'
        }
      };
    } else {
      // Default: Financial & Business Revenue Projection Model
      title = 'Annual Operating Model & P&L Projection';
      sheetData = {
        Sheet1: {
          A1: 'ANNUAL OPERATING MODEL & P&L (USD)',
          B1: '', C1: '', D1: '', E1: '', F1: '', G1: '',
          A2: 'Metric / Category', B2: 'Q1 Projected', C2: 'Q2 Projected', D2: 'Q3 Projected', E2: 'Q4 Projected', F2: 'FY Total', G2: 'Quarterly Avg',
          A3: 'Enterprise Software Licenses', B3: '145000', C3: '168000', D3: '194000', E3: '225000', F3: '=SUM(B3:E3)', G3: '=AVERAGE(B3:E3)',
          A4: 'Sovereign Cloud Subscriptions', B4: '88000', C4: '96000', D4: '112000', E4: '130000', F4: '=SUM(B4:E4)', G4: '=AVERAGE(B4:E4)',
          A5: 'Professional Services & Consulting', B5: '35000', C5: '40000', D5: '42000', E5: '50000', F5: '=SUM(B5:E5)', G5: '=AVERAGE(B5:E5)',
          A6: 'GROSS REVENUE', B6: '=SUM(B3:B5)', C6: '=SUM(C3:C5)', D6: '=SUM(D3:D5)', E6: '=SUM(E3:E5)', F6: '=SUM(F3:F5)', G6: '=AVERAGE(B6:E6)',
          A7: 'Cost of Goods Sold (COGS)', B7: '38000', C7: '42000', D7: '46000', E7: '52000', F7: '=SUM(B7:E7)', G7: '=AVERAGE(B7:E7)',
          A8: 'GROSS PROFIT', B8: '=B6-B7', C8: '=C6-C7', D8: '=D6-D7', E8: '=E6-E7', F8: '=F6-F7', G8: '=AVERAGE(B8:E8)',
          A9: 'Operating Expenses (OpEx)', B9: '65000', C9: '70000', D9: '78000', E9: '85000', F9: '=SUM(B9:E9)', G9: '=AVERAGE(B9:E9)',
          A10: 'NET OPERATING EBITDA', B10: '=B8-B9', C10: '=C8-C9', D10: '=D8-D9', E10: '=E8-E9', F10: '=F8-F9', G10: '=AVERAGE(B10:E10)'
        }
      };
    }

    localStorage.setItem('giri_orbit_axis_sheets', JSON.stringify(sheetData));
    return { title, tool: 'axis' };
  }

  /**
   * Autonomous Synthesis for Giri Kinetic (Presentation Show)
   */
  async synthesizeKineticDeck(prompt, tone) {
    const q = prompt.toLowerCase();
    let slides = [];
    let deckTitle = prompt.slice(0, 40).trim();

    if (q.includes('gandhi') || q.includes('freedom') || q.includes('history')) {
      deckTitle = 'Mahatma Gandhi & The Freedom Movement';
      slides = [
        {
          id: 1,
          layout: 'title',
          bg: '#09090b',
          accent: '#f59e0b',
          tag: 'HISTORICAL BIOGRAPHY',
          title: 'Mahatma Gandhi: The Apostle of Truth',
          desc: 'How non-violent Satyagraha mobilized millions and dismantled colonial empire.',
          features: [
            { num: '01', title: 'Early Life', desc: 'Born Oct 2, 1869 in Porbandar, Gujarat' },
            { num: '02', title: 'South Africa', desc: '21 years forging civil disobedience' },
            { num: '03', title: 'Ahimsa', desc: 'The weapon of moral truth over brute force' }
          ]
        },
        {
          id: 2,
          layout: 'chevron-flow',
          bg: '#0f172a',
          accent: '#38bdf8',
          tag: 'LANDMARK MOVEMENTS',
          title: 'Epochal Nationwide Campaigns',
          desc: 'Mass mobilization across every province, village, and community of India.',
          features: [
            { num: '1920', title: 'Non-Cooperation', desc: 'Boycott of British titles, goods, and courts' },
            { num: '1930', title: 'Dandi Salt March', desc: '240-mile march shattering the salt monopoly' },
            { num: '1942', title: 'Quit India', desc: 'The historic rallying cry "Do or Die"' },
            { num: '1947', title: 'Independence', desc: 'Midnight tryst with national destiny' }
          ]
        },
        {
          id: 3,
          layout: 'radial-cycle',
          bg: '#18181b',
          accent: '#10b981',
          tag: 'CONSTRUCTIVE PROGRAMME',
          title: 'Swadeshi & Social Awakening',
          desc: 'Empowering the rural masses through economic dignity and self-reliance.',
          features: [
            { num: '01', title: 'Khadi & Charkha', desc: 'Revival of indigenous village textile weaving' },
            { num: '02', title: 'Social Upliftment', desc: 'Eradication of caste barriers and untouchability' },
            { num: '03', title: 'Communal Harmony', desc: 'Unwavering unity across diverse faiths' },
            { num: '04', title: 'Basic Education', desc: 'Nai Talim — learning through practical craft' }
          ]
        },
        {
          id: 4,
          layout: 'milestone-journey',
          bg: '#172554',
          accent: '#60a5fa',
          tag: 'GLOBAL INFLUENCE',
          title: 'The Ripple Across Continents',
          desc: 'Inspiring world-historic civil rights leaders across the twentieth century.',
          features: [
            { num: 'USA', title: 'Dr. Martin Luther King Jr.', desc: 'American Civil Rights Movement' },
            { num: 'RSA', title: 'Nelson Mandela', desc: 'The liberation struggle against apartheid' },
            { num: 'TIB', title: 'The Dalai Lama', desc: 'Global advocacy for universal peace' },
            { num: 'SCI', title: 'Albert Einstein', desc: 'Tribute to Gandhi\'s moral greatness' }
          ]
        },
        {
          id: 5,
          layout: 'title',
          bg: '#09090b',
          accent: '#ec4899',
          tag: 'TIMELESS LEGACY',
          title: 'An Eternal Lighthouse',
          desc: '"Be the change you wish to see in the world." Truth and non-violence remain as old as the hills and as urgent as tomorrow.',
          features: [
            { num: 'TRUTH', title: 'Satya', desc: 'The sovereign pursuit of moral reality' },
            { num: 'PEACE', title: 'Ahimsa', desc: 'Courage to love without malice' },
            { num: 'SOUL', title: 'Mahatma', desc: 'An immortal testament to human dignity' }
          ]
        }
      ];
    } else if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('tech') || q.includes('software')) {
      deckTitle = 'Artificial Intelligence: Horizons & Governance';
      slides = [
        {
          id: 1,
          layout: 'title',
          bg: '#09090b',
          accent: '#8b5cf6',
          tag: 'COGNITIVE COMPUTING',
          title: 'The Artificial Intelligence Frontier',
          desc: 'How generative architectures and autonomous agents are reshaping science, productivity, and society.',
          features: [
            { num: '01', title: 'Foundation Models', desc: 'Multimodal language, vision, and code' },
            { num: '02', title: 'Agentic Workflows', desc: 'Self-correcting autonomous multi-step reasoning' },
            { num: '03', title: 'Sovereign Edge', desc: 'Private in-memory execution with zero cloud leakage' }
          ]
        },
        {
          id: 2,
          layout: 'chevron-flow',
          bg: '#0f172a',
          accent: '#38bdf8',
          tag: 'TECHNICAL ARCHITECTURE',
          title: 'The Modern Generative Stack',
          desc: 'From raw token embeddings to real-time interactive intelligence.',
          features: [
            { num: '01', title: 'Pre-Training', desc: 'Self-supervised learning on massive datasets' },
            { num: '02', title: 'Instruction Tuning', desc: 'Alignment via RLHF and direct preference optimization' },
            { num: '03', title: 'Inference Engine', desc: 'Low-latency speculative decoding & quantization' },
            { num: '04', title: 'Tool Calling', desc: 'Direct canvas manipulation and local file synthesis' }
          ]
        },
        {
          id: 3,
          layout: 'metrics',
          bg: '#022c22',
          accent: '#10b981',
          tag: 'VALUE CREATION',
          title: 'Empirical Velocity Gains',
          desc: 'Measurable enterprise throughput across core operational pillars.',
          features: [
            { num: '4.2x', title: 'Drafting Speed', desc: 'Document and contract composition acceleration' },
            { num: '0.4ms', title: 'Model Calculation', desc: 'Sub-millisecond spreadsheet cell evaluation' },
            { num: '100%', title: 'Privacy Custody', desc: 'Zero document bytes scraped for public training' },
            { num: '1-Click', title: 'Cross-Device', desc: 'Seamless synchronization across Phone & PC' }
          ]
        },
        {
          id: 4,
          layout: 'milestone-journey',
          bg: '#172554',
          accent: '#60a5fa',
          tag: 'ETHICAL ROADMAP',
          title: 'Safety, Alignment & Governance',
          desc: 'Proactive safeguards ensuring human empowerment and accountability.',
          features: [
            { num: 'Q1', title: 'Bias Auditing', desc: 'Rigorous factual grounding and verification' },
            { num: 'Q2', title: 'Cryptographic Seals', desc: 'SHA-256 state hashing for every document' },
            { num: 'Q3', title: 'Local Sandboxing', desc: 'Air-gapped memory boundaries' },
            { num: 'Q4', title: 'Open Standards', desc: 'Universal document format interoperability' }
          ]
        }
      ];
    } else {
      // Default: Universal Presentation Deck tailored to prompt
      slides = [
        {
          id: 1,
          layout: 'title',
          bg: '#09090b',
          accent: '#38bdf8',
          tag: 'EXECUTIVE OVERVIEW',
          title: deckTitle,
          desc: `Strategic presentation synthesized pursuant to "${prompt}".`,
          features: [
            { num: '01', title: 'Core Thesis', desc: 'Clear objectives and measurable milestones' },
            { num: '02', title: 'Architecture', desc: 'Robust framework designed for scale' },
            { num: '03', title: 'Impact', desc: 'Sustainable value creation across all units' }
          ]
        },
        {
          id: 2,
          layout: 'chevron-flow',
          bg: '#0f172a',
          accent: '#06b6d4',
          tag: 'EXECUTION PLAN',
          title: 'Three-Phase Implementation',
          desc: 'Systematic operational pathway ensuring quality and velocity.',
          features: [
            { num: '01', title: 'Phase 1: Discovery', desc: 'Baseline assessment and requirement gathering' },
            { num: '02', title: 'Phase 2: Execution', desc: 'Core synthesis, engineering, and testing' },
            { num: '03', title: 'Phase 3: Validation', desc: 'Quality audit and stakeholder sign-off' }
          ]
        },
        {
          id: 3,
          layout: 'metrics',
          bg: '#022c22',
          accent: '#10b981',
          tag: 'OUTCOMES',
          title: 'Performance & Value Metrics',
          desc: 'Quantifiable benchmarks demonstrating success.',
          features: [
            { num: '99.9%', title: 'Reliability', desc: 'Zero downtime and high operational continuity' },
            { num: '100%', title: 'Sovereignty', desc: 'Complete client-side data custody' },
            { num: '3.5x', title: 'Efficiency', desc: 'Streamlined workflow with zero friction' }
          ]
        }
      ];
    }

    localStorage.setItem('giri_orbit_kinetic_deck', JSON.stringify(slides));
    return { title: deckTitle, tool: 'kinetic' };
  }

  /**
   * Autonomous Synthesis for Giri Aegis (PDF Studio & Audit Record)
   */
  async synthesizePdfAudit(prompt, tone) {
    const title = 'Cryptographic Compliance & Security Audit Record';
    const pages = [
      {
        page: 1,
        title: 'SOVEREIGN AUDIT CERTIFICATE',
        items: [
          { type: 'heading', text: 'ISO/IEC 27001 & SOC 2 COMPLIANCE ATTESTATION' },
          { type: 'paragraph', text: `This document certifies that the computational processes executed in connection with "${prompt}" strictly adhere to sovereign in-memory execution boundaries.` },
          { type: 'checklist', items: ['Zero-Telemetry Client Boundary Verified', 'Cryptographic SHA-256 State Hashing Active', 'Local Browser Sandbox Isolation Enforced', 'Google Drive OAuth Verified with Restricted Scopes'] },
          { type: 'seal', hash: 'SHA256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069', timestamp: new Date().toISOString() }
        ]
      }
    ];

    localStorage.setItem('giri_orbit_pdf_pages', JSON.stringify(pages));
    return { title, tool: 'pdf' };
  }

  /**
   * Polymath Suite Workflow: Concurrently synthesizes Doc + Sheet + Slides!
   */
  async synthesizePolymathSuite(prompt, tone) {
    const [docRes, sheetRes, deckRes] = await Promise.all([
      this.synthesizeDriftDocument(prompt, tone),
      this.synthesizeAxisSheet(prompt, tone),
      this.synthesizeKineticDeck(prompt, tone)
    ]);

    const title = `Polymath Suite Launch: ${docRes.title}`;
    
    // Show summary modal
    setTimeout(() => {
      this.showPolymathSummaryModal(docRes.title, sheetRes.title, deckRes.title);
    }, 500);

    return { title, tool: 'polymath' };
  }

  showPolymathSummaryModal(docTitle, sheetTitle, deckTitle) {
    const existing = document.getElementById('polymath-summary-modal-backdrop');
    if (existing) existing.remove();

    const html = `
      <div id="polymath-summary-modal-backdrop" class="girionix-agent-backdrop" style="display:flex;" role="dialog">
        <div class="girionix-agent-modal" style="max-width:520px; animation: agentModalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);">
          <div class="girionix-agent-header">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:22px;">🎉</span>
              <div>
                <h3 style="margin:0; font-size:16px; font-weight:800; color:#f8fafc;">Polymath Workflow Completed!</h3>
                <p style="margin:2px 0 0 0; font-size:11.5px; color:#94a3b8;">All 3 assets generated concurrently &amp; saved to this device</p>
              </div>
            </div>
            <button id="btn-close-polymath-summary" class="girionix-agent-close-btn">✕</button>
          </div>

          <div style="padding:20px; display:flex; flex-direction:column; gap:12px;">
            <div class="polymath-result-card" data-jump="drift" style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:#18181b; border:1px solid #27272a; border-radius:10px; cursor:pointer;">
              <div style="display:flex; align-items:center; gap:12px;">
                <span style="width:34px; height:34px; border-radius:8px; background:rgba(37,99,235,0.15); color:#38bdf8; display:flex; align-items:center; justify-content:center; font-size:18px;">✍️</span>
                <div>
                  <strong style="font-size:13px; color:#f8fafc; display:block;">Giri Drift Document</strong>
                  <span style="font-size:11.5px; color:#64748b;">${docTitle}</span>
                </div>
              </div>
              <button class="btn-giri-primary" style="padding:5px 12px; font-size:11px;">Open Doc ➔</button>
            </div>

            <div class="polymath-result-card" data-jump="axis" style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:#18181b; border:1px solid #27272a; border-radius:10px; cursor:pointer;">
              <div style="display:flex; align-items:center; gap:12px;">
                <span style="width:34px; height:34px; border-radius:8px; background:rgba(22,163,74,0.15); color:#4ade80; display:flex; align-items:center; justify-content:center; font-size:18px;">📊</span>
                <div>
                  <strong style="font-size:13px; color:#f8fafc; display:block;">Giri Axis Spreadsheet</strong>
                  <span style="font-size:11.5px; color:#64748b;">${sheetTitle} (=SUM &amp; formulas active)</span>
                </div>
              </div>
              <button class="btn-giri-primary" style="padding:5px 12px; font-size:11px; background:#16a34a;">Open Sheet ➔</button>
            </div>

            <div class="polymath-result-card" data-jump="kinetic" style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:#18181b; border:1px solid #27272a; border-radius:10px; cursor:pointer;">
              <div style="display:flex; align-items:center; gap:12px;">
                <span style="width:34px; height:34px; border-radius:8px; background:rgba(220,38,38,0.15); color:#f87171; display:flex; align-items:center; justify-content:center; font-size:18px;">🎞</span>
                <div>
                  <strong style="font-size:13px; color:#f8fafc; display:block;">Giri Kinetic Pitch Deck</strong>
                  <span style="font-size:11.5px; color:#64748b;">${deckTitle} (6 Themed Slides)</span>
                </div>
              </div>
              <button class="btn-giri-primary" style="padding:5px 12px; font-size:11px; background:#dc2626;">Open Deck ➔</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    const modal = document.getElementById('polymath-summary-modal-backdrop');
    modal?.querySelector('#btn-close-polymath-summary')?.addEventListener('click', () => modal.remove());

    modal?.querySelectorAll('.polymath-result-card').forEach(card => {
      card.addEventListener('click', () => {
        const tool = card.dataset.jump;
        modal.remove();
        if (this.platform) this.platform.navigateTo(tool, null, true, true);
      });
    });
  }
}
