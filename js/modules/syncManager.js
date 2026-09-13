/**
 * ============================================================================
 * GIRI ORBIT — SOVEREIGN BROWSER SYNC & STORAGE SYSTEM (syncManager.js)
 * By GIRI Corporation
 * ============================================================================
 * Features:
 * - 100% In-Memory & Browser LocalStorage Sovereign Persistence
 * - Auto-Sync on all inputs, edits, formulas, and presentations
 * - Multi-Tool Synced Registry (Drift Docs, Axis Sheets, Kinetic Show, Aegis PDF)
 * - Quick "Pick Up Where You Left Off" data hydration across Hub & Tool views
 * - Full Deletion & Reset Capabilities (individual document or full workspace purge)
 * - Interactive Browser Sync & Storage Manager Modal Dialog
 */

const TOOL_DEFAULTS = {
  drift: {
    tool: 'drift',
    toolName: 'Giri Drift',
    category: 'Writer',
    badgeColor: '#2563eb',
    badgeBg: '#eff6ff',
    badgeText: 'D',
    defaultTitle: 'Enterprise Strategic Charter',
    defaultSnippet: 'Comprehensive sovereign document orchestration standard developed by GIRI Corporation.',
    defaultStats: '1,420 words • 8,940 chars',
    dataKey: 'giri_orbit_drift_doc',
    titleKey: 'giri_orbit_drift_title',
    timeKey: 'giri_orbit_drift_time',
    url: '#drift'
  },
  axis: {
    tool: 'axis',
    toolName: 'Giri Axis',
    category: 'Sheet',
    badgeColor: '#16a34a',
    badgeBg: '#f0fdf4',
    badgeText: 'A',
    defaultTitle: 'Capital & Revenue Matrix',
    defaultSnippet: 'Q1-Q4 capital deployment ledger, dynamic net runway analysis, and formula variance models.',
    defaultStats: '3 Sheets • 250 Data Cells • SUM/AVERAGE',
    dataKey: 'giri_orbit_axis_sheets',
    titleKey: 'giri_orbit_axis_title',
    timeKey: 'giri_orbit_axis_time',
    url: '#axis'
  },
  kinetic: {
    tool: 'kinetic',
    toolName: 'Giri Kinetic',
    category: 'Show',
    badgeColor: '#dc2626',
    badgeBg: '#fef2f2',
    badgeText: 'K',
    defaultTitle: 'Corporate Business Annual Report',
    defaultSnippet: 'Widescreen 16:9 executive presentation covering fiscal review, strategy roadmap, and ESG metrics.',
    defaultStats: '10 Slides • 16:9 Widescreen • Animations',
    dataKey: 'giri_orbit_kinetic_deck',
    titleKey: 'giri_orbit_kinetic_title',
    timeKey: 'giri_orbit_kinetic_time',
    url: '#kinetic'
  },
  pdf: {
    tool: 'pdf',
    toolName: 'Aegis PDF',
    category: 'PDF',
    badgeColor: '#ea580c',
    badgeBg: '#fff7ed',
    badgeText: 'Æ',
    defaultTitle: 'Certified Executive Memorandum',
    defaultSnippet: 'Official binding corporate authorization with SHA-256 digital verification and approved stamp.',
    defaultStats: '2 Pages • Approved Seal • PKI Signed',
    dataKey: 'giri_orbit_pdf_pages',
    titleKey: 'giri_orbit_pdf_title',
    timeKey: 'giri_orbit_pdf_time',
    url: '#pdf'
  }
};

class GiriSyncManager {
  constructor() {
    this.registryKey = 'giri_orbit_synced_registry';
    this.isAutoSyncEnabled = true;
    this.init();
  }

  init() {
    if (typeof localStorage === 'undefined') return;
    // Ensure default registry exists if first time
    const existing = localStorage.getItem(this.registryKey);
    if (!existing) {
      const initialRegistry = [
        {
          tool: 'drift',
          title: TOOL_DEFAULTS.drift.defaultTitle,
          snippet: TOOL_DEFAULTS.drift.defaultSnippet,
          stats: TOOL_DEFAULTS.drift.defaultStats,
          updatedAt: Date.now() - (12 * 60 * 1000), // 12m ago
          customized: false
        },
        {
          tool: 'axis',
          title: TOOL_DEFAULTS.axis.defaultTitle,
          snippet: TOOL_DEFAULTS.axis.defaultSnippet,
          stats: TOOL_DEFAULTS.axis.defaultStats,
          updatedAt: Date.now() - (60 * 60 * 1000), // 1h ago
          customized: false
        },
        {
          tool: 'kinetic',
          title: TOOL_DEFAULTS.kinetic.defaultTitle,
          snippet: TOOL_DEFAULTS.kinetic.defaultSnippet,
          stats: TOOL_DEFAULTS.kinetic.defaultStats,
          updatedAt: Date.now() - (3 * 60 * 60 * 1000), // 3h ago
          customized: false
        },
        {
          tool: 'pdf',
          title: TOOL_DEFAULTS.pdf.defaultTitle,
          snippet: TOOL_DEFAULTS.pdf.defaultSnippet,
          stats: TOOL_DEFAULTS.pdf.defaultStats,
          updatedAt: Date.now() - (24 * 60 * 60 * 1000), // Yesterday
          customized: false
        }
      ];
      try {
        localStorage.setItem(this.registryKey, JSON.stringify(initialRegistry));
      } catch {}
    }
  }

  /**
   * Save and synchronize tool state into browser storage
   */
  recordSync(tool, data, title = null, meta = {}) {
    const config = TOOL_DEFAULTS[tool];
    if (!config) return;

    const now = Date.now();
    try {
      if (data !== undefined && data !== null) {
        if (typeof data === 'string') {
          localStorage.setItem(config.dataKey, data);
        } else {
          localStorage.setItem(config.dataKey, JSON.stringify(data));
        }
      }
      if (title) {
        localStorage.setItem(config.titleKey, title);
      }
      localStorage.setItem(config.timeKey, String(now));
    } catch (e) {
      console.warn('[SyncManager] localStorage write error:', e);
    }

    // Update or create registry entry
    let registry = this.getRegistry();
    let entry = registry.find(r => r.tool === tool);
    if (!entry) {
      entry = { tool };
      registry.push(entry);
    }

    entry.title = title || entry.title || config.defaultTitle;
    entry.updatedAt = now;
    entry.customized = true;

    if (meta.snippet) entry.snippet = meta.snippet;
    if (meta.stats) entry.stats = meta.stats;

    try {
      localStorage.setItem(this.registryKey, JSON.stringify(registry));
    } catch {}

    // Update live indicators in DOM
    this.pulseSyncIndicators(tool);

    // Notify window listeners
    window.dispatchEvent(new CustomEvent('orbit:sync-change', {
      detail: { tool, title: entry.title, time: now }
    }));
  }

  /**
   * Check if tool has non-empty saved work in browser
   */
  hasSavedWork(tool) {
    const config = TOOL_DEFAULTS[tool];
    if (!config) return false;
    const raw = localStorage.getItem(config.dataKey);
    if (!raw) return false;
    if (raw === '[]' || raw === '{}' || raw === '<p><br></p>') return false;
    return true;
  }

  /**
   * Get sync metadata for a specific tool
   */
  getToolSyncInfo(tool) {
    const config = TOOL_DEFAULTS[tool];
    if (!config) return null;

    const registry = this.getRegistry();
    const entry = registry.find(r => r.tool === tool) || {};

    const savedTitle = localStorage.getItem(config.titleKey);
    const savedTime = localStorage.getItem(config.timeKey);
    const hasData = this.hasSavedWork(tool);

    return {
      tool,
      toolName: config.toolName,
      category: config.category,
      badgeColor: config.badgeColor,
      badgeBg: config.badgeBg,
      badgeText: config.badgeText,
      url: config.url,
      title: savedTitle || entry.title || config.defaultTitle,
      snippet: entry.snippet || config.defaultSnippet,
      stats: entry.stats || config.defaultStats,
      updatedAt: savedTime ? parseInt(savedTime, 10) : (entry.updatedAt || Date.now()),
      hasSavedData: hasData
    };
  }

  /**
   * Get list of all synced items for the Recent Documents section
   */
  getAllSyncedWork() {
    const tools = ['drift', 'axis', 'kinetic', 'pdf'];
    const list = tools.map(t => this.getToolSyncInfo(t)).filter(Boolean);
    list.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    return list;
  }

  /**
   * Delete saved work for a specific tool from browser storage
   */
  deleteSyncedWork(tool) {
    const config = TOOL_DEFAULTS[tool];
    if (!config) return false;

    try {
      localStorage.removeItem(config.dataKey);
      localStorage.removeItem(config.titleKey);
      localStorage.removeItem(config.timeKey);

      let registry = this.getRegistry();
      registry = registry.filter(r => r.tool !== tool);
      localStorage.setItem(this.registryKey, JSON.stringify(registry));
    } catch (e) {
      console.warn('[SyncManager] Delete error:', e);
    }

    if (window.orbitPlatform && window.orbitPlatform.showToast) {
      window.orbitPlatform.showToast(`Deleted saved ${config.toolName} work from browser storage`, 'red');
    }

    window.dispatchEvent(new CustomEvent('orbit:sync-change', {
      detail: { tool, action: 'delete' }
    }));

    return true;
  }

  /**
   * Clear all synced work across all tools
   */
  clearAllSyncedWork() {
    ['drift', 'axis', 'kinetic', 'pdf'].forEach(tool => {
      const config = TOOL_DEFAULTS[tool];
      if (config) {
        localStorage.removeItem(config.dataKey);
        localStorage.removeItem(config.titleKey);
        localStorage.removeItem(config.timeKey);
      }
    });

    try {
      localStorage.removeItem(this.registryKey);
    } catch {}

    if (window.orbitPlatform && window.orbitPlatform.showToast) {
      window.orbitPlatform.showToast('Cleared all browser-synced work across Giri Orbit', 'red');
    }

    window.dispatchEvent(new CustomEvent('orbit:sync-change', {
      detail: { action: 'clearAll' }
    }));

    return true;
  }

  /**
   * Calculate browser storage usage
   */
  getStorageUsage() {
    let totalChars = 0;
    const tools = ['drift', 'axis', 'kinetic', 'pdf'];
    const toolSizes = {};

    tools.forEach(t => {
      const config = TOOL_DEFAULTS[t];
      const data = localStorage.getItem(config.dataKey) || '';
      toolSizes[t] = (data.length / 1024).toFixed(1) + ' KB';
      totalChars += data.length;
    });

    const totalKb = (totalChars / 1024).toFixed(1);
    return {
      total: totalKb + ' KB',
      toolSizes
    };
  }

  /**
   * Convert timestamp to human-friendly relative time
   */
  formatTimeAgo(timestamp) {
    if (!timestamp) return 'Recently';
    const now = Date.now();
    const diffSec = Math.max(0, Math.floor((now - timestamp) / 1000));

    if (diffSec < 45) return 'Just now';
    if (diffSec < 3600) {
      const m = Math.floor(diffSec / 60);
      return `${m}m ago`;
    }
    if (diffSec < 86400) {
      const h = Math.floor(diffSec / 3600);
      return `${h}h ago`;
    }
    if (diffSec < 172800) return 'Yesterday';
    const d = Math.floor(diffSec / 86400);
    return `${d}d ago`;
  }

  /**
   * Visual feedback for sync pills
   */
  pulseSyncIndicators(tool) {
    const headerPillText = document.getElementById('txt-global-sync');
    const headerDot = document.querySelector('.sync-dot-live');
    if (headerPillText) {
      headerPillText.textContent = 'Synced';
    }
    if (headerDot) {
      headerDot.classList.add('syncing');
      setTimeout(() => headerDot.classList.remove('syncing'), 600);
    }

    const toolSyncText = document.getElementById(`txt-${tool}-sync-status`);
    if (toolSyncText) {
      toolSyncText.textContent = '🟢 Synced';
      setTimeout(() => {
        if (toolSyncText) toolSyncText.textContent = 'Synced to Browser';
      }, 2000);
    }
  }

  getRegistry() {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(this.registryKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  /**
   * Render or open the Browser Sync & Storage Manager Modal
   */
  openStorageModal() {
    let modalBackdrop = document.getElementById('orbit-sync-modal-backdrop');
    if (!modalBackdrop) {
      modalBackdrop = document.createElement('div');
      modalBackdrop.className = 'sync-modal-backdrop';
      modalBackdrop.id = 'orbit-sync-modal-backdrop';
      document.body.appendChild(modalBackdrop);
    }

    const items = this.getAllSyncedWork();
    const usage = this.getStorageUsage();

    modalBackdrop.innerHTML = `
      <div class="sync-modal-card" role="dialog" aria-modal="true">
        <div class="sync-modal-header">
          <div class="sync-modal-title-wrap">
            <span style="font-size:18px;">🔄</span>
            <div>
              <div class="sync-modal-title">Browser Sync &amp; Storage Manager</div>
              <div class="sync-modal-sub">100% In-Memory Browser Storage • Zero Cloud Tracking</div>
            </div>
          </div>
          <button class="esc-kbd" id="btn-close-sync-modal-top">ESC</button>
        </div>

        <div class="sync-modal-body">
          <div class="sync-storage-overview">
            <div>
              <div class="sync-meter-title">Browser Storage Status: Active</div>
              <div class="sync-meter-desc">All edits, slides, and sheets auto-sync continuously to this browser.</div>
            </div>
            <div class="sync-storage-badge">
              <span class="sync-dot-live"></span>
              <span>${usage.total} Used</span>
            </div>
          </div>

          <div style="font-size:12px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">
            Saved Work Sessions (Pick up where you left off)
          </div>

          <div class="sync-items-list" id="sync-modal-items-list">
            ${items.map(item => `
              <div class="sync-item-row" data-tool="${item.tool}">
                <div class="sync-item-info">
                  <div class="sync-tool-badge" style="background:${item.badgeColor};">
                    ${item.badgeText}
                  </div>
                  <div>
                    <div class="sync-tool-title">${item.title}</div>
                    <div class="sync-tool-meta">
                      <span>${item.toolName}</span> • 
                      <span>Saved ${this.formatTimeAgo(item.updatedAt)}</span> • 
                      <span style="color:#64748b;">${usage.toolSizes[item.tool] || '0 KB'}</span>
                    </div>
                  </div>
                </div>
                <div class="sync-item-actions">
                  <button class="btn-sync-open" data-action="open" data-tool="${item.tool}">
                    ▶ Resume
                  </button>
                  <button class="btn-sync-delete" data-action="delete" data-tool="${item.tool}" title="Delete saved work from browser">
                    🗑 Delete
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="sync-modal-footer">
          <button class="btn-clear-all-sync" id="btn-purge-all-sync">
            Clear All Browser Work
          </button>
          <button class="btn-close-sync-modal" id="btn-close-sync-modal-bottom">
            Done
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');

    // Attach listeners
    const close = () => modalBackdrop.classList.remove('open');
    modalBackdrop.querySelector('#btn-close-sync-modal-top')?.addEventListener('click', close);
    modalBackdrop.querySelector('#btn-close-sync-modal-bottom')?.addEventListener('click', close);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) close();
    });

    // Handle open/resume & delete actions inside modal
    modalBackdrop.querySelectorAll('.btn-sync-open').forEach(btn => {
      btn.addEventListener('click', () => {
        const tool = btn.dataset.tool;
        close();
        if (window.orbitPlatform && window.orbitPlatform.navigateTo) {
          window.orbitPlatform.navigateTo(tool);
        } else {
          window.location.hash = `#${tool}`;
        }
      });
    });

    modalBackdrop.querySelectorAll('.btn-sync-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const tool = btn.dataset.tool;
        const config = TOOL_DEFAULTS[tool];
        if (confirm(`Delete saved ${config?.toolName || tool} work from browser storage? This will clear your draft.`)) {
          this.deleteSyncedWork(tool);
          // Re-render modal list
          this.openStorageModal();
        }
      });
    });

    modalBackdrop.querySelector('#btn-purge-all-sync')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all saved work from browser storage? All drafts in Drift, Axis, Kinetic, and PDF will be reset.')) {
        this.clearAllSyncedWork();
        close();
      }
    });
  }
}

export const syncManager = new GiriSyncManager();
if (typeof window !== 'undefined') {
  window.giriSyncManager = syncManager;
}
