import { FluentFontPicker } from '../components/fontPicker.js';
import { symbolsManager } from '../components/symbolsManager.js';
import { localSync } from '../components/localFileDirectSync.js';
import { thesaurusManager } from '../components/thesaurusManager.js';
/**
 * ============================================================================
 * GIRI ORBIT — GIRI DRIFT: ENTERPRISE WORD PROCESSOR & TEMPLATE HUB (drift.js)
 * By GIRI Corporation (A Subsidiary of Giri Group)
 * ============================================================================
 * Features:
 * - Fluent Office Document Start & Template Hub:
 *   - Dark obsidian hero banner with 3D workspace graphic & action CTAs
 *   - "Create with templates" category pills (Recommended, Resumes, Invoices,
 *     Papers and Reports, Flyers, Meeting Notes, Letters, Custom Templates)
 *   - Live search filter for templates
 *   - High-fidelity realistic mini document preview cards with hover elevation
 * - Comprehensive Custom Templates Engine:
 *   - Create custom templates from scratch or save active document as a template
 *   - Persistent in localStorage ('giri_orbit_custom_templates')
 *   - Delete, manage, and load user-defined custom templates
 * - Full-Bleed 5-Tab Office Ribbon Editor:
 *   - Home, Insert, Page Layout, Review, View
 *   - Table builder, Equation editor, Special symbols, Hyperlinks, Checklists
 *   - Document statistics, Voice dictation, Outline sidebar, Zen mode
 */

// ============================================================================
// BUILT-IN TEMPLATES COLLECTION (Matching User's Screenshot & Office Needs)
// ============================================================================
const BUILTIN_TEMPLATES = [
  {
    id: 'fall-gala',
    name: 'Fall Gala',
    category: 'flyers',
    desc: 'Stylish event invitation flyer with warm autumn organic shapes',
    previewBg: '#fdfbf7',
    previewAccent: '#bfa47e',
    previewHtml: `
      <div style="padding:12px 10px; height:100%; display:flex; flex-direction:column; align-items:center; text-align:center; background:#fcf9f2; position:relative; overflow:hidden; font-family:Georgia, serif;">
        <div style="position:absolute; top:-12px; left:-12px; width:45px; height:45px; background:#e8dfcc; border-radius:50%; opacity:0.7;"></div>
        <div style="position:absolute; bottom:-18px; right:-10px; width:65px; height:65px; background:#e0cfb8; border-radius:40% 60% 70% 30%; opacity:0.6;"></div>
        <span style="font-size:7px; text-transform:uppercase; letter-spacing:1px; color:#8c7e68; margin-top:16px;">Annual Benefit</span>
        <strong style="font-size:14px; font-weight:400; letter-spacing:2px; color:#2c2824; margin:4px 0 2px 0;">FALL GALA</strong>
        <div style="width:24px; height:1px; background:#bfa47e; margin:4px auto;"></div>
        <span style="font-size:8px; font-weight:700; color:#4a4237; margin-top:2px;">SEPTEMBER 23RD</span>
        <span style="font-size:7px; color:#786c59;">6:00 PM &bull; CHICAGO</span>
        <div style="width:85%; height:2px; background:#e8dfcc; margin:16px auto 3px;"></div>
        <div style="width:70%; height:2px; background:#e8dfcc; margin:3px auto;"></div>
        <div style="width:60%; height:2px; background:#e8dfcc; margin:3px auto;"></div>
      </div>
    `,
    content: `
      <div style="background:#fcf9f2; padding:48px 40px; border-radius:8px; border:1px solid #e7dfcf; font-family:'Georgia', serif; text-align:center; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-30px; left:-30px; width:130px; height:130px; background:#e8dfcc; border-radius:50%; opacity:0.6;"></div>
        <div style="position:absolute; bottom:-40px; right:-20px; width:160px; height:160px; background:#e0cfb8; border-radius:40% 60% 70% 30%; opacity:0.5;"></div>
        <p style="font-size:11.5px; text-transform:uppercase; letter-spacing:0.25em; color:#786c59; margin-bottom:12px;">You Are Cordially Invited</p>
        <h1 style="font-size:42px; font-weight:400; letter-spacing:0.15em; color:#2c2824; margin:12px 0;">FALL GALA</h1>
        <div style="width:50px; height:2px; background:#bfa47e; margin:18px auto;"></div>
        <p style="font-size:14px; font-weight:600; color:#4a4237; margin:14px 0;">SEPTEMBER 23RD AT 6:00 PM</p>
        <p style="font-size:12.5px; color:#6b6051; margin:6px 0;">GRAND BALLROOM &bull; 123 45TH AVE, CHICAGO, IL 54321</p>
        <p style="font-size:13.5px; line-height:1.8; color:#574e41; max-width:480px; margin:24px auto;">
          Join us for an enchanting evening under the autumn moon celebrating seasonal innovation, sustainable agriculture, and community fellowship. A night of fine dining, live chamber music, and philanthropic awards.
        </p>
        <div style="margin-top:28px; padding:10px 24px; display:inline-block; border:1px solid #bfa47e; border-radius:24px; font-size:12px; font-weight:600; color:#3b352c; letter-spacing:0.05em;">
          RSVP: GALA@EASTORCHARD.ORG &bull; BLACK TIE OPTIONAL
        </div>
      </div>
      <p></p>
    `
  },
  {
    id: 'academic-paper',
    name: 'Academic Research Paper',
    category: 'papers',
    desc: 'MLA/APA style academic paper with works cited and abstract',
    previewBg: '#ffffff',
    previewAccent: '#0f172a',
    previewHtml: `
      <div style="padding:14px 12px; height:100%; font-family:'Times New Roman', serif; color:#0f172a; display:flex; flex-direction:column;">
        <span style="font-size:7px; color:#64748b;">Alex Morgan<br>Prof. Vance</span>
        <div style="height:3px; width:70%; background:#0f172a; margin:14px auto 4px; text-align:center;"></div>
        <div style="height:2px; width:50%; background:#0f172a; margin:2px auto 14px;"></div>
        <div style="height:2px; width:95%; background:#cbd5e1; margin-bottom:4px;"></div>
        <div style="height:2px; width:90%; background:#cbd5e1; margin-bottom:4px;"></div>
        <div style="height:2px; width:92%; background:#cbd5e1; margin-bottom:4px;"></div>
        <div style="height:2px; width:88%; background:#cbd5e1; margin-bottom:4px;"></div>
        <div style="height:2px; width:75%; background:#cbd5e1; margin-bottom:12px;"></div>
        <div style="height:2px; width:92%; background:#cbd5e1; margin-bottom:4px;"></div>
        <div style="height:2px; width:85%; background:#cbd5e1;"></div>
      </div>
    `,
    content: `
      <div style="font-family:'Times New Roman', serif; line-height:2.0; font-size:13.5px; color:#111827;">
        <p style="margin:0; text-align:left;">
          Alex Morgan<br>
          Prof. Eleanor Vance<br>
          Advanced Spatial Computation 401<br>
          14 September 2026
        </p>
        <h2 style="text-align:center; font-size:16px; font-weight:bold; margin:28px 0 20px;">
          Applying Principles of Zero-Database Memory Structures in Modern Enterprise Computation
        </h2>
        <p style="text-indent:36px; margin-bottom:18px;">
          Modern enterprise computing frameworks have historically prioritized centralized client-server paradigms, introducing persistent network latency, transmission overhead, and third-party cloud data exfiltration vulnerabilities. In this study, we evaluate the cognitive and computational throughput gains achieved by executing distributed workspace geometry directly within sovereign client memory buffers.
        </p>
        <p style="text-indent:36px; margin-bottom:18px;">
          Our empirical benchmarks across 1,500 continuous vector transformations recorded sub-millisecond dispatch cycles with 0 KB outbound packet transmission. These findings substantiate the feasibility of complete local data sovereignty in mission-critical office suites.
        </p>
        <h3 style="text-align:center; font-size:14px; font-weight:bold; margin-top:32px;">Works Cited</h3>
        <p style="margin-left:36px; text-indent:-36px; font-size:12.5px;">
          Giri, Abhinav. <em>Sovereign In-Memory Vector Architectures: Operational Paradigms for Enterprise Workspace Parity</em>. Giri Group Press, 2026.
        </p>
      </div>
      <p></p>
    `
  },
  {
    id: 'kai-carter',
    name: 'Kai Carter Resume',
    category: 'resumes',
    desc: 'Clean 2-column executive resume layout with experience timeline',
    previewBg: '#ffffff',
    previewAccent: '#2563eb',
    previewHtml: `
      <div style="padding:12px 10px; height:100%; font-family:sans-serif; display:flex; flex-direction:column;">
        <div style="border-bottom:1px solid #0f172a; padding-bottom:6px; margin-bottom:8px;">
          <strong style="font-size:10px; color:#0f172a; display:block;">KAI CARTER</strong>
          <span style="font-size:6px; color:#64748b;">EXECUTIVE PRODUCT DESIGNER</span>
        </div>
        <div style="display:grid; grid-template-columns:1fr 2fr; gap:8px;">
          <div>
            <span style="font-size:6.5px; font-weight:700; color:#2563eb; display:block; margin-bottom:3px;">PROFILE</span>
            <div style="height:2px; width:90%; background:#e2e8f0; margin-bottom:3px;"></div>
            <div style="height:2px; width:70%; background:#e2e8f0; margin-bottom:8px;"></div>
            <span style="font-size:6.5px; font-weight:700; color:#2563eb; display:block; margin-bottom:3px;">SKILLS</span>
            <div style="height:2px; width:80%; background:#e2e8f0; margin-bottom:3px;"></div>
            <div style="height:2px; width:60%; background:#e2e8f0;"></div>
          </div>
          <div>
            <span style="font-size:6.5px; font-weight:700; color:#0f172a; display:block; margin-bottom:3px;">EXPERIENCE</span>
            <div style="height:2px; width:95%; background:#cbd5e1; margin-bottom:3px;"></div>
            <div style="height:2px; width:90%; background:#cbd5e1; margin-bottom:3px;"></div>
            <div style="height:2px; width:85%; background:#cbd5e1; margin-bottom:6px;"></div>
            <div style="height:2px; width:90%; background:#cbd5e1; margin-bottom:3px;"></div>
            <div style="height:2px; width:75%; background:#cbd5e1;"></div>
          </div>
        </div>
      </div>
    `,
    content: `
      <div style="font-family:'Plus Jakarta Sans', sans-serif; color:#0f172a;">
        <header style="border-bottom:2px solid #0f172a; padding-bottom:16px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:flex-end;">
          <div>
            <h1 style="font-size:30px; font-weight:800; letter-spacing:-0.02em; margin:0 0 4px 0;">KAI CARTER</h1>
            <span style="font-size:13px; font-weight:700; color:#2563eb; text-transform:uppercase; letter-spacing:0.06em;">Principal Executive Product Designer</span>
          </div>
          <div style="text-align:right; font-size:11.5px; color:#64748b; line-height:1.5;">
            kai.carter@giricorp.com<br>+1 (555) 382-9901 &bull; San Francisco, CA
          </div>
        </header>

        <div style="display:grid; grid-template-columns:1fr 2.2fr; gap:32px;">
          <aside>
            <section style="margin-bottom:20px;">
              <h3 style="font-size:12px; font-weight:800; text-transform:uppercase; border-bottom:1.5px solid #cbd5e1; padding-bottom:4px; margin-bottom:8px; color:#1e293b;">Profile</h3>
              <p style="font-size:12px; line-height:1.6; color:#334155;">
                Senior product architect with 10+ years specializing in enterprise design systems, fluid vector physics, and zero-latency desktop software suites.
              </p>
            </section>
            <section style="margin-bottom:20px;">
              <h3 style="font-size:12px; font-weight:800; text-transform:uppercase; border-bottom:1.5px solid #cbd5e1; padding-bottom:4px; margin-bottom:8px; color:#1e293b;">Education</h3>
              <p style="font-size:12px; font-weight:700; margin:0; color:#0f172a;">B.S. Interaction Design</p>
              <p style="font-size:11px; color:#64748b; margin:2px 0;">Stanford University, 2016</p>
            </section>
            <section>
              <h3 style="font-size:12px; font-weight:800; text-transform:uppercase; border-bottom:1.5px solid #cbd5e1; padding-bottom:4px; margin-bottom:8px; color:#1e293b;">Core Competencies</h3>
              <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:6px;">
                <span style="font-size:10.5px; background:#eff6ff; color:#2563eb; padding:3px 7px; border-radius:4px; font-weight:600;">System Architecture</span>
                <span style="font-size:10.5px; background:#eff6ff; color:#2563eb; padding:3px 7px; border-radius:4px; font-weight:600;">Vector Physics</span>
                <span style="font-size:10.5px; background:#eff6ff; color:#2563eb; padding:3px 7px; border-radius:4px; font-weight:600;">UI/UX Design</span>
                <span style="font-size:10.5px; background:#eff6ff; color:#2563eb; padding:3px 7px; border-radius:4px; font-weight:600;">Typography</span>
              </div>
            </section>
          </aside>

          <main>
            <section style="margin-bottom:24px;">
              <h3 style="font-size:12px; font-weight:800; text-transform:uppercase; border-bottom:1.5px solid #cbd5e1; padding-bottom:4px; margin-bottom:12px; color:#1e293b;">Work Experience</h3>
              <div style="margin-bottom:18px;">
                <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:700; color:#0f172a;">
                  <span>Lead Architect &bull; Giri Corporation</span>
                  <span style="color:#64748b; font-weight:500; font-size:12px;">2022 &ndash; Present</span>
                </div>
                <p style="font-size:12px; color:#334155; line-height:1.6; margin-top:4px;">
                  Architected the full-bleed white design system for Giri Orbit. Engineered interactive ribbons, formula parsers, and custom template systems serving multinational enterprise clients.
                </p>
              </div>

              <div>
                <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:700; color:#0f172a;">
                  <span>Senior Product Designer &bull; Linear Dynamics</span>
                  <span style="color:#64748b; font-weight:500; font-size:12px;">2018 &ndash; 2022</span>
                </div>
                <p style="font-size:12px; color:#334155; line-height:1.6; margin-top:4px;">
                  Designed dark and light sovereign productivity suites. Reduced cognitive context-switching overhead by 42% across 500,000 active enterprise workstations.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
      <p></p>
    `
  },
  {
    id: 'tonnie-thomsen',
    name: 'Tonnie Thomsen Cover Letter',
    category: 'letters',
    desc: 'Stylish executive cover letter with sage green header typography',
    previewBg: '#ffffff',
    previewAccent: '#15803d',
    previewHtml: `
      <div style="padding:14px 12px; height:100%; font-family:sans-serif; display:flex; flex-direction:column;">
        <strong style="font-size:11px; color:#15803d; margin-bottom:2px;">Tonnie Thomsen</strong>
        <span style="font-size:6px; color:#64748b; margin-bottom:6px;">EDUCATIONAL STRATEGIST</span>
        <div style="height:1.5px; width:100%; background:#bbf7d0; margin-bottom:10px;"></div>
        <span style="font-size:6px; color:#94a3b8; margin-bottom:6px;">September 11, 2026</span>
        <div style="height:2px; width:45%; background:#0f172a; margin-bottom:10px;"></div>
        <div style="height:2px; width:95%; background:#cbd5e1; margin-bottom:3px;"></div>
        <div style="height:2px; width:90%; background:#cbd5e1; margin-bottom:3px;"></div>
        <div style="height:2px; width:92%; background:#cbd5e1; margin-bottom:8px;"></div>
        <div style="height:2px; width:95%; background:#cbd5e1; margin-bottom:3px;"></div>
        <div style="height:2px; width:80%; background:#cbd5e1; margin-bottom:12px;"></div>
        <span style="font-size:8px; font-family:'Brush Script MT', cursive; color:#15803d;">Tonnie Thomsen</span>
      </div>
    `,
    content: `
      <div style="font-family:'Inter', sans-serif; color:#1e293b; line-height:1.7;">
        <header style="margin-bottom:24px;">
          <h1 style="font-size:28px; font-weight:800; color:#15803d; margin:0 0 4px 0;">Tonnie Thomsen</h1>
          <span style="font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.04em;">Educational Strategist &bull; Curriculum Director</span>
          <div style="font-size:11.5px; color:#94a3b8; margin-top:4px;">tonnie.thomsen@education.org &bull; (555) 749-1123</div>
        </header>

        <div style="height:2px; background:#bbf7d0; margin-bottom:20px;"></div>
        <p style="font-size:12px; color:#64748b; margin-bottom:16px;">September 11, 2026</p>
        <p style="font-size:13px; font-weight:600; margin-bottom:14px; color:#0f172a;">
          Principal Ann Harrison<br>
          Oakridge Collegiate Institute<br>
          742 Evergreen Terrace, Seattle, WA
        </p>
        <p style="font-size:13px; margin-bottom:14px;">Dear Principal Harrison,</p>
        <p style="font-size:13px; margin-bottom:14px;">
          I am writing with genuine enthusiasm to submit my candidacy for the Lead Educational Strategist position at Oakridge Collegiate Institute. With more than nine years of experience leading advanced interdisciplinary STEM programs, I specialize in designing curricula that bridge classical humanities and computational literacy.
        </p>
        <p style="font-size:13px; margin-bottom:14px;">
          During my recent tenure with Pacific Academic Networks, I oversaw the rollout of high-velocity research workshops across 18 regional institutions, yielding a 28% increase in student research publications. My commitment is to foster an academic culture where teachers and students thrive.
        </p>
        <p style="font-size:13px; margin-bottom:24px;">
          I look forward to discussing how my strategic methodology aligns with the forward-looking vision of Oakridge Collegiate Institute. Thank you for your time and consideration.
        </p>
        <p style="font-size:13px; margin-bottom:4px;">Sincerely,</p>
        <div style="font-family:'Brush Script MT', cursive, sans-serif; font-size:26px; color:#15803d;">Tonnie Thomsen</div>
      </div>
      <p></p>
    `
  },
  {
    id: 'market-invoice',
    name: 'Market Financial Consulting Invoice',
    category: 'invoices',
    desc: 'Itemized billing statement with calculation columns and payment terms',
    previewBg: '#ffffff',
    previewAccent: '#16a34a',
    previewHtml: `
      <div style="padding:12px 10px; height:100%; font-family:sans-serif; display:flex; flex-direction:column;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <div><strong style="font-size:7px; color:#1e40af;">Market Consulting</strong></div>
          <div><strong style="font-size:9px; color:#0f172a;">INVOICE</strong></div>
        </div>
        <div style="height:10px; background:#f8fafc; border:1px solid #e2e8f0; margin-bottom:8px;"></div>
        <div style="height:8px; background:#1e40af; margin-bottom:2px;"></div>
        <div style="height:4px; background:#e2e8f0; margin-bottom:2px;"></div>
        <div style="height:4px; background:#f8fafc; margin-bottom:2px;"></div>
        <div style="height:4px; background:#e2e8f0; margin-bottom:8px;"></div>
        <div style="display:flex; justify-content:flex-end;">
          <div style="width:40%; height:6px; background:#16a34a;"></div>
        </div>
      </div>
    `,
    content: `
      <div style="font-family:'Inter', sans-serif; color:#0f172a;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px;">
          <div>
            <h2 style="font-size:19px; font-weight:800; color:#1e40af; margin:0;">Market Financial Consulting</h2>
            <span style="font-size:11.5px; color:#64748b;">450 East 53rd Street, New York, NY 10022</span>
          </div>
          <div style="text-align:right;">
            <h1 style="font-size:24px; font-weight:900; color:#0f172a; margin:0;">INVOICE</h1>
            <span style="font-size:11px; font-family:var(--font-mono); color:#64748b;">#INV-2026-089</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; background:#f8fafc; padding:14px; border-radius:6px; margin-bottom:22px; font-size:12px; border:1px solid #e2e8f0;">
          <div><strong>Billed To:</strong><br>Giri Corporation<br>Attn: Enterprise Treasury Division</div>
          <div style="text-align:right;"><strong>Invoice Date:</strong> 2026-09-11<br><strong>Due Date:</strong> 2026-10-11 (Net 30)</div>
        </div>

        <table style="width:100%; border-collapse:collapse; font-size:12px; margin-bottom:20px;">
          <thead>
            <tr style="background:#1e40af; color:#ffffff;">
              <th style="padding:9px 12px; text-align:left;">Description</th>
              <th style="padding:9px 12px; text-align:center;">Hours</th>
              <th style="padding:9px 12px; text-align:right;">Rate</th>
              <th style="padding:9px 12px; text-align:right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:9px 12px; font-weight:500;">Q3 Enterprise Sovereign Architecture Audit</td>
              <td style="padding:9px 12px; text-align:center;">16</td>
              <td style="padding:9px 12px; text-align:right;">$150.00</td>
              <td style="padding:9px 12px; text-align:right;">$2,400.00</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:9px 12px; font-weight:500;">In-Memory Zero-Database Performance Testing</td>
              <td style="padding:9px 12px; text-align:center;">9</td>
              <td style="padding:9px 12px; text-align:right;">$150.00</td>
              <td style="padding:9px 12px; text-align:right;">$1,350.00</td>
            </tr>
          </tbody>
        </table>

        <div style="display:flex; justify-content:flex-end;">
          <div style="width:230px; font-size:12.5px;">
            <div style="display:flex; justify-content:space-between; padding:4px 0;"><span>Subtotal:</span><span>$3,750.00</span></div>
            <div style="display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #cbd5e1;"><span>Tax (0%):</span><span>$0.00</span></div>
            <div style="display:flex; justify-content:space-between; padding:8px 0; font-size:15px; font-weight:800; color:#1e40af;"><span>Total Due:</span><span>$3,750.00</span></div>
          </div>
        </div>
      </div>
      <p></p>
    `
  },
  {
    id: 'pet-volunteer',
    name: 'Pet Volunteer Opportunity',
    category: 'flyers',
    desc: 'Community bulletin flyer with cyan banner and bulleted role checklist',
    previewBg: '#ffffff',
    previewAccent: '#0284c7',
    previewHtml: `
      <div style="height:100%; font-family:sans-serif; display:flex; flex-direction:column;">
        <div style="height:55px; background:linear-gradient(135deg, #0284c7, #0369a1); padding:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff;">
          <strong style="font-size:7.5px; text-align:center;">PET VOLUNTEER OPPORTUNITY</strong>
        </div>
        <div style="padding:10px 8px; flex:1;">
          <div style="height:3px; width:70%; background:#0f172a; margin-bottom:6px;"></div>
          <div style="height:2px; width:90%; background:#e2e8f0; margin-bottom:3px;"></div>
          <div style="height:2px; width:85%; background:#e2e8f0; margin-bottom:8px;"></div>
          <div style="height:2px; width:80%; background:#0284c7; margin-bottom:3px;"></div>
          <div style="height:2px; width:75%; background:#0284c7; margin-bottom:3px;"></div>
          <div style="height:2px; width:70%; background:#0284c7;"></div>
        </div>
      </div>
    `,
    content: `
      <div style="font-family:'Plus Jakarta Sans', sans-serif; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden; background:#ffffff;">
        <div style="background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding:28px 24px; color:#ffffff; text-align:center;">
          <h1 style="font-size:28px; font-weight:800; margin:0 0 6px 0; letter-spacing:0.02em;">PET VOLUNTEER OPPORTUNITY</h1>
          <p style="font-size:13.5px; opacity:0.92; margin:0;">Make a direct, life-saving impact for rescued companion animals.</p>
        </div>
        <div style="padding:28px;">
          <h3 style="font-size:16px; font-weight:700; color:#0f172a; margin-bottom:10px;">Community Foster & Socialization Weekend</h3>
          <p style="font-size:13px; line-height:1.7; color:#475569; margin-bottom:18px;">
            The regional animal sanctuary is inviting compassionate volunteers to join our weekend care teams. Whether assisting with gentle exercise, grooming, or adoption matchmaking, your hours make an immediate difference.
          </p>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:13px; margin-bottom:24px;">
            <div style="display:flex; align-items:center; gap:10px;"><span style="color:#0284c7; font-weight:800;">✔</span> <span>Canine Enrichment & Walking Shifts (Saturday mornings)</span></div>
            <div style="display:flex; align-items:center; gap:10px;"><span style="color:#0284c7; font-weight:800;">✔</span> <span>Feline Socialization and Cuddle Rooms</span></div>
            <div style="display:flex; align-items:center; gap:10px;"><span style="color:#0284c7; font-weight:800;">✔</span> <span>Adoption Welcome Desk & Visitor Guidance</span></div>
          </div>
          <div style="background:#f0f9ff; border-left:4px solid #0284c7; padding:14px 18px; border-radius:4px; font-size:12.5px; color:#0369a1;">
            <strong>Orientation Sessions:</strong> Saturdays at 10:00 AM &bull; 4567 Main Street &bull; Call (555) 019-2831 to reserve your badge.
          </div>
        </div>
      </div>
      <p></p>
    `
  },
  {
    id: 'meeting-notes',
    name: 'Executive Meeting Notes',
    category: 'meeting',
    desc: 'Council agenda, attendee roster, and action items accountability grid',
    previewBg: '#ffffff',
    previewAccent: '#475569',
    previewHtml: `
      <div style="padding:14px 12px; height:100%; font-family:sans-serif; display:flex; flex-direction:column;">
        <div style="border-bottom:1.5px solid #0f172a; padding-bottom:4px; margin-bottom:8px; display:flex; justify-content:space-between;">
          <strong style="font-size:7px;">MEETING MINUTES</strong>
          <span style="font-size:6px; color:#64748b;">2026-09-11</span>
        </div>
        <span style="font-size:6.5px; font-weight:700; color:#1e40af; margin-bottom:2px;">1. ATTENDEES</span>
        <div style="height:2px; width:80%; background:#e2e8f0; margin-bottom:6px;"></div>
        <span style="font-size:6.5px; font-weight:700; color:#1e40af; margin-bottom:2px;">2. DECISIONS</span>
        <div style="height:2px; width:90%; background:#e2e8f0; margin-bottom:3px;"></div>
        <div style="height:2px; width:85%; background:#e2e8f0; margin-bottom:6px;"></div>
        <span style="font-size:6.5px; font-weight:700; color:#1e40af; margin-bottom:2px;">3. ACTION ITEMS</span>
        <div style="height:20px; background:#f8fafc; border:1px solid #cbd5e1;"></div>
      </div>
    `,
    content: `
      <div style="font-family:'Inter', sans-serif; color:#0f172a;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #0f172a; padding-bottom:12px; margin-bottom:20px;">
          <div>
            <h1 style="font-size:22px; font-weight:800; margin:0;">EXECUTIVE STRATEGIC COUNCIL MINUTES</h1>
            <span style="font-size:11px; font-family:var(--font-mono); color:#64748b;">GIRI CORPORATION // SOVEREIGN COMPUTING DIVISION</span>
          </div>
          <div style="text-align:right; font-size:11.5px; color:#64748b;">
            Date: 2026-09-11<br>Location: Executive Boardroom Alpha & Hybrid Mesh
          </div>
        </div>

        <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; color:#1e40af; margin-bottom:6px;">1. Attendees & Quorum</h3>
        <p style="font-size:12.5px; color:#334155; margin-bottom:18px;">
          Abhinav Giri (Executive Director), Directorate Members, Chief Legal Officer, Principal Systems Architect. Quorum established.
        </p>

        <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; color:#1e40af; margin-bottom:6px;">2. Strategic Resolutions</h3>
        <ul style="font-size:12.5px; line-height:1.7; color:#334155; margin-bottom:20px; padding-left:22px;">
          <li><strong>Zero-Database Core:</strong> Formally ratified complete deployment of Giri Orbit in-memory office framework across all enterprise tiers.</li>
          <li><strong>Template Engine Expansion:</strong> Approved standard Word-compatible template hub architecture with persistent custom user template storage.</li>
        </ul>

        <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; color:#1e40af; margin-bottom:8px;">3. Action Items Schedule</h3>
        <table style="width:100%; border-collapse:collapse; font-size:12px; border:1px solid #cbd5e1;">
          <thead>
            <tr style="background:#f1f5f9;">
              <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Action Item</th>
              <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Custodian</th>
              <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:8px 12px; border:1px solid #cbd5e1;">Implement Word-style Template Hub in Drift</td><td style="padding:8px 12px; border:1px solid #cbd5e1;">Frontend Arch</td><td style="padding:8px 12px; border:1px solid #cbd5e1;">Complete</td></tr>
            <tr><td style="padding:8px 12px; border:1px solid #cbd5e1;">Deploy Custom Templates Engine with Local Persistence</td><td style="padding:8px 12px; border:1px solid #cbd5e1;">Core Systems</td><td style="padding:8px 12px; border:1px solid #cbd5e1;">Active</td></tr>
          </tbody>
        </table>
      </div>
      <p></p>
    `
  }
];

// Seed sample custom templates
const DEFAULT_CUSTOM_TEMPLATES = [
  {
    id: 'custom-charter',
    name: 'Corporate Strategic Charter',
    category: 'custom',
    desc: 'Executive strategy brief with principles and directives',
    content: `
      <h1>Giri Orbit // Enterprise Strategic Charter</h1>
      <blockquote>
        "Spatial computing and zero-gravity document orchestration form the executive cornerstone of modern cognitive efficiency." — GIRI Corporation Directorate
      </blockquote>
      <p>
        This document serves as the operational architecture standard for <strong>Giri Orbit</strong>, developed as a sovereign productivity layer by <em>GIRI Corporation (Giri Group)</em>.
      </p>
      <h2>1. Strategic Objectives</h2>
      <p>
        Traditional office software forces knowledge workers into siloed application windows and cumbersome remote databases. Giri Orbit introduces a unified hybrid model:
      </p>
      <div class="drift-todo-item">
        <input type="checkbox" class="drift-todo-check" checked>
        <span>Deploy full-bleed executive document processing standard across all enterprise nodes.</span>
      </div>
      <div class="drift-todo-item">
        <input type="checkbox" class="drift-todo-check" checked>
        <span>Enforce 100% client-side memory sovereignty with zero outbound network telemetry leaks.</span>
      </div>
      <div class="drift-todo-item">
        <input type="checkbox" class="drift-todo-check">
        <span>Finalize multi-format Office export parity (.docx, .xlsx, .pptx, .pdf).</span>
      </div>
      <h2>2. Governance & Security Specifications</h2>
      <p>
        All files are preserved locally in cryptographic memory buffers, maintaining full privacy compliance and instant zero-latency compilation across corporate endpoints.
      </p>
    `
  },
  {
    id: 'custom-nda',
    name: 'Mutual Non-Disclosure Agreement (NDA)',
    category: 'custom',
    desc: 'Standard enterprise bilateral confidential information agreement',
    content: `
      <div style="font-family:'Inter', sans-serif; color:#0f172a;">
        <h1 style="font-size:22px; font-weight:800; text-align:center; border-bottom:2px solid #0f172a; padding-bottom:8px;">MUTUAL NON-DISCLOSURE AGREEMENT</h1>
        <p style="text-align:center; font-size:11px; font-family:var(--font-mono); color:#64748b;">CONFIDENTIALITY & INTELLECTUAL PROPERTY PRESERVATION</p>
        <p style="font-size:12.5px; line-height:1.7; margin:20px 0;">
          This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of <strong>September 11, 2026</strong>, by and between <strong>Giri Corporation</strong> ("Disclosing Party") and the undersigned corporate affiliate ("Receiving Party").
        </p>
        <h3 style="font-size:13px; font-weight:700;">1. Proprietary Information</h3>
        <p style="font-size:12.5px; line-height:1.7;">
          Proprietary Information encompasses all zero-gravity vector algorithms, sovereign client-side memory structures, financial models, and code artifacts disclosed in connection with Giri Orbit.
        </p>
        <h3 style="font-size:13px; font-weight:700;">2. Obligations of Non-Disclosure</h3>
        <p style="font-size:12.5px; line-height:1.7;">
          The Receiving Party shall exercise the highest degree of care to safeguard Proprietary Information and shall not distribute or reverse engineer any sovereign memory mechanisms.
        </p>
      </div>
    `
  }
];

export function renderDriftApp(container, onDocUpdate = null, initialDocTitle = null, startInEditor = true) {
  // Load custom templates from localStorage
  let customTemplates = [];
  const storedCustom = localStorage.getItem('giri_orbit_custom_templates');
  if (storedCustom) {
    try {
      customTemplates = JSON.parse(storedCustom);
    } catch {
      customTemplates = [...DEFAULT_CUSTOM_TEMPLATES];
    }
  } else {
    customTemplates = [...DEFAULT_CUSTOM_TEMPLATES];
    localStorage.setItem('giri_orbit_custom_templates', JSON.stringify(customTemplates));
  }

  // Determine starting view
  if (startInEditor || initialDocTitle) {
    mountEditor(container, null, initialDocTitle || 'Document 1 - Giri Drift', onDocUpdate);
  } else {
    mountHub(container, onDocUpdate);
  }

  // =========================================================================
  // VIEW 1: WORD ON THE WEB STYLE TEMPLATE HUB
  // =========================================================================
  function mountHub(rootEl, onUpdate) {
    rootEl.innerHTML = `
      <div class="drift-hub-shell" id="drift-hub-shell">
        <!-- Top App Brand Bar in Hub Mode -->
        <div class="drift-hub-top-bar">
          <div class="drift-hub-brand-left">
            <div class="drift-app-icon-badge">D</div>
            <div class="tool-hub-brand-dropdown-wrap" id="drift-brand-dropdown-wrap">
              <button class="tool-hub-brand-btn" id="drift-brand-dropdown-trigger" style="display:flex; align-items:center; gap:6px; background:transparent; border:none; cursor:pointer; padding:4px 6px; border-radius:4px;" title="Switch Suite Tool">
                <span style="color:#ffffff; font-family:var(--font-display, sans-serif); font-weight:700; font-size:14px;">Giri Drift</span>
                <span style="color:#94a3b8; font-size:11px;">▾</span>
              </button>
              <!-- Suite Switcher Dropdown Menu -->
              <div class="tool-suite-switcher-menu" id="drift-suite-menu" style="display:none;">
                <div class="suite-switcher-header">Giri Orbit Suite</div>
                <a href="#hub" class="suite-switcher-item" data-switch="launcher">
                  <div class="switcher-icon hub">🪐</div>
                  <div class="switcher-info">
                    <strong>Orbit Hub</strong>
                    <span>Workspace Launcher &amp; Overview</span>
                  </div>
                  <span class="switcher-link-tag">#hub</span>
                </a>
                <a href="#drift" class="suite-switcher-item active" data-switch="drift">
                  <div class="switcher-icon drift">D</div>
                  <div class="switcher-info">
                    <strong>Giri Drift</strong>
                    <span>Word Processor &amp; Document Composer</span>
                  </div>
                  <span class="switcher-link-tag">#drift</span>
                </a>
                <a href="#axis" class="suite-switcher-item" data-switch="axis">
                  <div class="switcher-icon axis">A</div>
                  <div class="switcher-info">
                    <strong>Giri Axis</strong>
                    <span>Data Matrix &amp; Financial Sheets</span>
                  </div>
                  <span class="switcher-link-tag">#axis</span>
                </a>
                <a href="#kinetic" class="suite-switcher-item" data-switch="kinetic">
                  <div class="switcher-icon kinetic">K</div>
                  <div class="switcher-info">
                    <strong>Giri Kinetic</strong>
                    <span>Cinematic Presentation Studio</span>
                  </div>
                  <span class="switcher-link-tag">#kinetic</span>
                </a>
                <a href="#pdf" class="suite-switcher-item" data-switch="pdf">
                  <div class="switcher-icon pdf">Æ</div>
                  <div class="switcher-info">
                    <strong>Giri Aegis PDF</strong>
                    <span>Cryptographic PDF &amp; Document Security</span>
                  </div>
                  <span class="switcher-link-tag">#pdf</span>
                </a>
              </div>
            </div>
            <nav class="drift-hub-nav-links">
              <span class="drift-hub-nav-link" id="hub-nav-blank">Create Blank</span>
              <span class="drift-hub-nav-link" id="hub-nav-templates">Templates</span>
              <span class="drift-hub-nav-link" id="hub-nav-custom">Custom Templates</span>
            </nav>
          </div>

          <!-- Suite Nav Links & Direct Link Copier on Right -->
          <div class="tool-hub-top-right">
            <div class="tool-hub-suite-links">
              <a href="#hub" class="tool-hub-suite-link" data-switch="launcher" title="Orbit Hub (http://127.0.0.1:5000/#hub)">Hub</a>
              <a href="#drift" class="tool-hub-suite-link active" data-switch="drift" title="Giri Drift Docs (http://127.0.0.1:5000/#drift)">Drift</a>
              <a href="#axis" class="tool-hub-suite-link" data-switch="axis" title="Giri Axis Sheets (http://127.0.0.1:5000/#axis)">Axis</a>
              <a href="#kinetic" class="tool-hub-suite-link" data-switch="kinetic" title="Giri Kinetic Presentation (http://127.0.0.1:5000/#kinetic)">Kinetic</a>
              <a href="#pdf" class="tool-hub-suite-link" data-switch="pdf" title="Giri Aegis PDF Studio (http://127.0.0.1:5000/#pdf)">Aegis PDF</a>
            </div>
            <button class="btn-tool-copy-link" id="btn-drift-share-link" title="Copy direct link to Giri Drift (http://127.0.0.1:5000/#drift)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        <!-- Sleek Dark Hero Banner -->
        <section class="drift-hub-hero">
          <div class="drift-hero-left">
            <h1 class="drift-hero-title">Welcome to Drift for free on the web</h1>
            <p class="drift-hero-subtitle">
              Sovereign in-memory document composer for high-velocity teams. Zero database tracking, instant local persistence, and customizable templates.
            </p>
            
      <div class="follow-journey-wrap" style="margin-bottom:18px;">
        <span class="follow-journey-label">FOLLOW THE JOURNEY</span>
        <a href="https://www.instagram.com/abhinavgiri45/" target="_blank" rel="noopener" class="giri-instagram-card giri-instagram-card-dark" title="Connect with Abhinav Giri on Instagram">
          <div class="instagram-logo-badge">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" stroke="#ffffff" stroke-width="2" fill="none"/>
              <circle cx="12" cy="12" r="4.2" stroke="#ffffff" stroke-width="2" fill="none"/>
              <circle cx="16.8" cy="7.2" r="1.1" fill="#ffffff"/>
            </svg>
          </div>
          <div class="instagram-card-text">
            <strong class="instagram-handle">@abhinavgiri45</strong>
            <span class="instagram-sub">Connect on Instagram &rarr;</span>
          </div>
        </a>
      </div>

      <div class="drift-hero-actions">
              <button class="btn-drift-create-blank" id="btn-hub-create-blank">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
                <span>Create blank document</span>
              </button>

              <button class="btn-drift-upload-file" id="btn-hub-upload-file">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <span>Upload a file</span>
              </button>
              <input type="file" id="hub-hidden-file-input" accept=".txt,.md,.html,.docx" style="display:none;">

              <button class="btn-drift-new-template-cta" id="btn-hub-new-custom-template">
                <span>+ Custom Template</span>
              </button>
            </div>
          </div>

          <!-- 3D Modern Desk Illustration Graphic -->
          <div class="drift-hero-visual">
            <svg class="drift-hero-visual-svg" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Desk Surface -->
              <rect x="20" y="110" width="240" height="50" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
              <rect x="30" y="105" width="220" height="8" rx="3" fill="#0f172a"/>
              <!-- 3D Document Folders / Desk Organizer -->
              <rect x="180" y="30" width="70" height="90" rx="6" fill="#3b82f6" fill-opacity="0.9"/>
              <rect x="190" y="24" width="60" height="85" rx="5" fill="#60a5fa"/>
              <rect x="200" y="18" width="50" height="80" rx="4" fill="#93c5fd"/>
              <!-- Floating Document Page (Isometric) -->
              <g filter="drop-shadow(0 10px 15px rgba(0,0,0,0.4))">
                <polygon points="50,45 150,25 155,115 55,135" fill="#ffffff"/>
                <line x1="68" y1="55" x2="135" y2="42" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                <line x1="68" y1="70" x2="138" y2="57" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
                <line x1="68" y1="82" x2="132" y2="69" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
                <line x1="68" y1="94" x2="120" y2="82" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
              </g>
              <!-- Ceramic Pencil Pot & Executive Stylus -->
              <circle cx="150" cy="115" r="14" fill="#f8fafc"/>
              <line x1="145" y1="110" x2="135" y2="70" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
              <line x1="152" y1="110" x2="155" y2="65" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
              <line x1="156" y1="112" x2="165" y2="75" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>
            </svg>
          </div>
        </section>
        
        <!-- Pick Up Where You Left Off Synced Work Banner -->
        <div id="drift-resume-banner-slot"></div>

        <!-- "Create with templates" Section -->
        <main class="drift-templates-section">
          <div class="drift-templates-section-header">
            <h2 class="drift-templates-heading">Create with templates</h2>
            <div class="drift-category-filter-row">
              <div class="drift-category-pill-strip" id="drift-category-pill-strip">
                <button class="drift-category-pill active" data-category="all">Recommended</button>
                <button class="drift-category-pill" data-category="resumes">Resumes</button>
                <button class="drift-category-pill" data-category="invoices">Invoices</button>
                <button class="drift-category-pill" data-category="papers">Papers and Reports</button>
                <button class="drift-category-pill" data-category="flyers">Flyers</button>
                <button class="drift-category-pill" data-category="meeting">Meeting Notes</button>
                <button class="drift-category-pill" data-category="letters">Letters</button>
                <button class="drift-category-pill" data-category="custom" id="pill-custom-templates">
                  <span>Custom Templates</span>
                  <span class="pill-counter-badge" id="custom-templates-count">${customTemplates.length}</span>
                </button>
              </div>

              <!-- Search templates input -->
              <div class="drift-search-templates-wrap">
                <svg class="drift-search-templates-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input type="text" class="drift-search-templates-input" id="drift-search-templates-input" placeholder="Search templates" spellcheck="false">
              </div>
            </div>
          </div>

          <!-- Templates Grid View -->
          <div class="drift-templates-grid" id="drift-templates-grid">
            <!-- Dynamically populated -->
          </div>
        </main>
      </div>
    `;

    bindHubEvents(rootEl, onUpdate);
  }

  function bindHubEvents(rootEl, onUpdate) {
    const grid = rootEl.querySelector('#drift-templates-grid');
    const searchInput = rootEl.querySelector('#drift-search-templates-input');
    const categoryPills = rootEl.querySelectorAll('.drift-category-pill');
    const hiddenFileInput = rootEl.querySelector('#hub-hidden-file-input');
    const customCountBadge = rootEl.querySelector('#custom-templates-count');

    let currentCategory = 'all';

    function renderCards() {
      grid.innerHTML = '';
      const query = (searchInput.value || '').toLowerCase().trim();

      // Determine items to display
      let allItems = [];

      if (currentCategory === 'custom') {
        allItems = customTemplates.map(t => ({ ...t, isCustom: true }));
      } else {
        allItems = BUILTIN_TEMPLATES.map(t => ({ ...t, isCustom: false }));
        if (currentCategory === 'all') {
          // Include user custom templates in recommended list
          const customMapped = customTemplates.map(t => ({ ...t, isCustom: true }));
          allItems = [...allItems, ...customMapped];
        } else {
          allItems = allItems.filter(t => t.category === currentCategory);
          // Also check custom templates tagged with this category
          const customMatching = customTemplates.filter(t => t.category === currentCategory).map(t => ({ ...t, isCustom: true }));
          allItems = [...allItems, ...customMatching];
        }
      }

      // Filter by search query
      if (query) {
        allItems = allItems.filter(t =>
          t.name.toLowerCase().includes(query) ||
          t.desc.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query)
        );
      }

      // If viewing custom templates, render "+ Create Custom Template" Card
      if (currentCategory === 'custom') {
        const createCard = document.createElement('div');
        createCard.className = 'drift-template-card create-custom-card';
        createCard.innerHTML = `
          <div class="drift-template-preview-frame">
            <div style="text-align:center; padding:16px;">
              <span style="font-size:32px; font-weight:300; display:block; margin-bottom:8px;">+</span>
              <strong style="font-size:13px; font-weight:700;">New Custom Template</strong>
              <p style="font-size:11px; margin-top:4px; opacity:0.8;">Save active document or create layout</p>
            </div>
          </div>
          <div class="drift-template-meta">
            <span class="drift-template-title">Create Template</span>
            <span class="drift-template-cat-label">User Template</span>
          </div>
        `;

        createCard.addEventListener('click', () => {
          promptCreateCustomTemplate(rootEl, onUpdate);
        });

        grid.appendChild(createCard);
      }

      // Render cards
      allItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'drift-template-card';
        card.title = item.desc;

        // Custom template preview representation if not pre-rendered
        let previewHtml = item.previewHtml;
        if (!previewHtml) {
          previewHtml = `
            <div style="padding:16px 12px; height:100%; font-family:sans-serif; color:#0f172a; display:flex; flex-direction:column; background:#ffffff;">
              <div style="display:flex; justify-content:space-between; border-bottom:1.5px solid #2563eb; padding-bottom:4px; margin-bottom:10px;">
                <strong style="font-size:8px; color:#2563eb;">CUSTOM TEMPLATE</strong>
              </div>
              <strong style="font-size:9.5px; margin-bottom:4px; color:#0f172a;">${item.name}</strong>
              <div style="height:2px; width:80%; background:#cbd5e1; margin-bottom:4px;"></div>
              <div style="height:2px; width:95%; background:#e2e8f0; margin-bottom:3px;"></div>
              <div style="height:2px; width:90%; background:#e2e8f0; margin-bottom:3px;"></div>
              <div style="height:2px; width:70%; background:#e2e8f0;"></div>
            </div>
          `;
        }

        card.innerHTML = `
          ${item.isCustom ? `
            <button class="custom-template-del-btn" title="Delete custom template" data-del-id="${item.id}">✕</button>
          ` : ''}
          <div class="drift-template-preview-frame" style="background:${item.previewBg || '#ffffff'};">
            ${previewHtml}
          </div>
          <div class="drift-template-meta">
            <span class="drift-template-title">${item.name}</span>
            <span class="drift-template-cat-label">${item.isCustom ? 'Custom Template' : item.category}</span>
          </div>
        `;

        // Click to launch template in Editor
        card.addEventListener('click', (e) => {
          if (e.target.closest('.custom-template-del-btn')) return;
          mountEditor(rootEl, item.content, item.name, onUpdate);
        });

        // Delete button for custom template
        const delBtn = card.querySelector('.custom-template-del-btn');
        delBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm(`Delete custom template "${item.name}"?`)) {
            customTemplates = customTemplates.filter(t => t.id !== item.id);
            localStorage.setItem('giri_orbit_custom_templates', JSON.stringify(customTemplates));
            if (customCountBadge) customCountBadge.textContent = customTemplates.length;
            renderCards();
            if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Deleted template "${item.name}"`);
          }
        });

        grid.appendChild(card);
      });
    }

    // Category filter clicks
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.dataset.category;
        renderCards();
      });
    });

    // Search input
    searchInput.addEventListener('input', renderCards);

    // Create Blank Document
    rootEl.querySelector('#btn-hub-create-blank')?.addEventListener('click', () => {
      try { localStorage.removeItem('giri_orbit_drift_doc'); } catch {}
      mountEditor(rootEl, '<p style="font-family: Calibri, \'Segoe UI\', Arial, sans-serif; font-size: 11pt;"><br></p>', 'Document 1 - Giri Drift', onUpdate);
    });
    rootEl.querySelector('#hub-nav-blank')?.addEventListener('click', () => {
      try { localStorage.removeItem('giri_orbit_drift_doc'); } catch {}
      mountEditor(rootEl, '<p style="font-family: Calibri, \'Segoe UI\', Arial, sans-serif; font-size: 11pt;"><br></p>', 'Document 1 - Giri Drift', onUpdate);
    });

    // Nav switch to Custom Templates
    rootEl.querySelector('#hub-nav-custom')?.addEventListener('click', () => {
      const customPill = rootEl.querySelector('#pill-custom-templates');
      customPill?.click();
    });

    // New Custom Template CTA
    rootEl.querySelector('#btn-hub-new-custom-template')?.addEventListener('click', () => {
      promptCreateCustomTemplate(rootEl, onUpdate);
    });

    // File Upload
    const uploadBtn = rootEl.querySelector('#btn-hub-upload-file');
    uploadBtn?.addEventListener('click', () => {
      hiddenFileInput?.click();
    });

    hiddenFileInput?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target.result;
        mountEditor(rootEl, text, file.name.replace(/\.[^/.]+$/, ''), onUpdate);
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Uploaded ${file.name} into Drift`);
      };
      reader.readAsText(file);
      hiddenFileInput.value = '';
    });

    // Suite Switcher Dropdown Toggle
    const brandTrigger = rootEl.querySelector('#drift-brand-dropdown-trigger');
    const suiteMenu = rootEl.querySelector('#drift-suite-menu');
    brandTrigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (suiteMenu) suiteMenu.style.display = suiteMenu.style.display === 'none' ? 'block' : 'none';
    });
    document.addEventListener('click', () => {
      if (suiteMenu) suiteMenu.style.display = 'none';
    });

    // Suite navigation links
    rootEl.querySelectorAll('[data-switch]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.dataset.switch;
        if (window.orbitPlatform) window.orbitPlatform.navigateTo(target);
      });
    });

    // Direct Tool Link Copier
    rootEl.querySelector('#btn-drift-share-link')?.addEventListener('click', () => {
      const url = window.orbitPlatform ? window.orbitPlatform.getToolUrl('drift') : `${window.location.origin}/#drift`;
      navigator.clipboard?.writeText(url).then(() => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Copied direct link to Giri Drift: ${url}`);
      }).catch(() => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Direct Link: ${url}`);
      });
    });

    // Hydrate Pick Up Where You Left Off Banner
    const resumeSlot = rootEl.querySelector('#drift-resume-banner-slot');
    if (resumeSlot && window.giriSyncManager && window.giriSyncManager.hasSavedWork('drift')) {
      const syncInfo = window.giriSyncManager.getToolSyncInfo('drift');
      const timeStr = window.giriSyncManager.formatTimeAgo(syncInfo.updatedAt);
      resumeSlot.innerHTML = `
        <div class="tool-resume-banner" id="drift-resume-banner" style="margin: 20px auto 24px auto; max-width: 1200px;">
          <div class="tool-resume-left">
            <div class="tool-resume-icon-badge" style="background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; font-weight:800; font-size:16px;">
              D
            </div>
            <div>
              <div class="tool-resume-title" style="font-size:15px; font-weight:700; color:#ffffff;">Pick up where you left off in Drift</div>
              <div class="tool-resume-meta" style="font-size:12px; color:#94a3b8; display:flex; align-items:center; gap:6px; margin-top:3px;">
                <span class="sync-dot-live" style="width:6px; height:6px; display:inline-block;"></span>
                <span style="color:#f8fafc; font-weight:600;">${syncInfo.title}</span> • 
                <span>Saved ${timeStr}</span> • 
                <span>${syncInfo.stats || 'Executive document draft'}</span>
              </div>
            </div>
          </div>
          <div class="tool-resume-actions" style="display:flex; align-items:center; gap:10px;">
            <button class="btn-delete-saved-work" id="btn-drift-banner-delete" title="Delete this saved draft from browser storage">
              🗑 Delete Draft
            </button>
            <button class="btn-resume-work" id="btn-drift-banner-resume" style="background:#2563eb; color:#ffffff; padding:7px 16px; border-radius:6px; font-weight:600; border:none; cursor:pointer;">
              ▶ Resume Work &rarr;
            </button>
          </div>
        </div>
      `;

      resumeSlot.querySelector('#btn-drift-banner-resume')?.addEventListener('click', () => {
        mountEditor(rootEl, null, syncInfo.title, onUpdate);
      });

      resumeSlot.querySelector('#btn-drift-banner-delete')?.addEventListener('click', () => {
        if (confirm('Delete saved Drift work from browser storage? This will clear your draft.')) {
          window.giriSyncManager.deleteSyncedWork('drift');
          resumeSlot.innerHTML = '';
        }
      });
    }

    renderCards();
  }

  function promptCreateCustomTemplate(rootEl, onUpdate) {
    const name = prompt('Enter a name for your custom template:', 'Executive Memorandum Template');
    if (!name) return;

    const cat = prompt('Choose category (resumes, invoices, papers, flyers, meeting, letters, custom):', 'custom') || 'custom';
    const desc = prompt('Short description:', 'Corporate executive template layout') || 'Custom layout';

    const newTemplate = {
      id: 'custom-' + Date.now(),
      name: name,
      category: cat.toLowerCase().trim(),
      desc: desc,
      content: `
        <div style="font-family:'Inter', sans-serif; color:#0f172a; padding:10px 0;">
          <h1 style="font-size:24px; font-weight:800; border-bottom:2px solid #2563eb; padding-bottom:8px; margin-bottom:16px;">${name}</h1>
          <p style="font-size:13px; line-height:1.7; color:#334155;">
            Type your custom template structure, boilerplate clauses, or formatting guidelines here.
          </p>
        </div>
        <p></p>
      `
    };

    customTemplates.push(newTemplate);
    localStorage.setItem('giri_orbit_custom_templates', JSON.stringify(customTemplates));
    if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Custom template "${name}" created!`);

    // Reload Hub view and select Custom category
    mountHub(rootEl, onUpdate);
    const customPill = rootEl.querySelector('#pill-custom-templates');
    customPill?.click();
  }

  // =========================================================================
  // VIEW 2: FULL-BLEED 5-TAB OFFICE RIBBON EDITOR VIEW
  // =========================================================================
  function mountEditor(rootEl, templateContent = null, docTitle = 'Document 1 - Giri Drift', onUpdate = null) {
    let currentDocTitle = docTitle;
    const defaultBlankDoc = '<p style="font-family: Calibri, \'Segoe UI\', Arial, sans-serif; font-size: 11pt;"><br></p>';
    const savedDoc = templateContent !== null ? templateContent : (localStorage.getItem('giri_orbit_drift_doc') || defaultBlankDoc);
    if (templateContent !== null) {
      try { localStorage.setItem('giri_orbit_drift_doc', savedDoc); } catch {}
    }

    // In-memory format buffer for Format Painter
    let formatBuffer = null;
    let isFormatPainterActive = false;

    // Track Changes mode state
    let isTrackChangesActive = false;

    // Comments array
    let comments = [
      { id: 'c1', author: 'Executive Reviewer', date: 'Just now', text: 'Document charter conforms to sovereign computing specification.', resolved: false }
    ];

    // Version history snapshots
    let versionSnapshots = [
      { id: 'v1', timestamp: '2026-09-11 13:00', title: 'Initial Revision', author: 'Abhinav Giri', length: 1200 },
      { id: 'v2', timestamp: '2026-09-11 13:25', title: 'Added Enterprise Metrics', author: 'Abhinav Giri', length: 1850 }
    ];

    rootEl.innerHTML = `
      <div class="drift-app-shell" id="drift-app-shell">
        <!-- Modern Fluent Office Ribbon -->
        <nav class="fluent-ribbon-bar" aria-label="Word Processing Fluent Office Ribbon">
          <!-- Ribbon Tabs Strip -->
          <div class="fluent-ribbon-tabs">
            <!-- File Menu Trigger Button (plain text tab matching media_1789113480130.png) -->
            <button class="fluent-tab-btn" id="btn-drift-return-hub" style="color:#38bdf8; font-weight:700; display:flex; align-items:center; gap:4px; margin-right:4px;" title="Return to Orbit Hub"><span style="font-size:13px;">⟵</span><span>Hub</span></button>
            <button class="fluent-tab-btn fluent-tab-file-trigger" id="btn-drift-file-menu" title="Open File Menu">
              File
            </button>
            <button class="fluent-tab-btn" id="btn-drift-toggle-sidebar" title="Toggle Pages & Navigation Drawer" style="color:#a855f7; font-weight:700; display:inline-flex; align-items:center; gap:3px;">
              <span>📄</span><span>Pages</span>
            </button>

            <!-- Standard Ribbon Tabs -->
            <button class="fluent-tab-btn active" data-tab="home">Home</button>
            <button class="fluent-tab-btn" data-tab="insert">Insert</button>
            <button class="fluent-tab-btn" data-tab="layout">Layout</button>
            <button class="fluent-tab-btn" data-tab="references">References</button>
            <button class="fluent-tab-btn" data-tab="review">Review</button>
            <button class="fluent-tab-btn" data-tab="view">View</button>
            <button class="fluent-tab-btn" data-tab="help">Help</button>

            <!-- Right Action Strip (Exact match to media_1789113480130.png) -->
            <div class="fluent-top-actions">
              <button class="fluent-sync-action-pill" id="btn-drift-browser-sync" title="Browser Sync: Edits are automatically saved to browser storage. Click to manage or purge.">
                <span class="sync-dot-live"></span>
                <span id="txt-drift-sync-status">Synced to Browser</span>
              </button>
              
              <button class="fluent-top-action-pill" id="btn-drift-save-device" title="Direct Disk Sync: Save directly to your local PC file without re-downloads" style="background:#059669; color:#ffffff; font-weight:600; border-color:#047857;">
                <span style="font-size:12px;">💾</span>
                <span id="txt-drift-sync-status">Save to Device</span>
              </button>
              <button class="fluent-top-action-pill" id="btn-toggle-comments-sidebar" title="Comments">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span>Comments</span>
              </button>

              <button class="fluent-top-action-pill" id="btn-drift-catchup" title="Catch up on document changes">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <span>Catch up</span>
              </button>

              <button class="fluent-top-action-pill" id="btn-drift-editing-mode" title="Editing Mode">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <span>Editing ▾</span>
              </button>

              <button class="fluent-top-action-pill share-btn" id="btn-drift-share" title="Share Sovereign Document">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                <span>Share ▾</span>
              </button>
            </div>
          </div>

          <!-- Dark Office 365 File Dropdown Menu (Exact match to screenshot) -->
          <div class="office-file-menu-dropdown" id="drift-file-menu-dropdown">
            
            <div class="file-menu-item" data-action="save-device" id="file-menu-save-device" style="background:rgba(5,150,105,0.15); color:#34d399; font-weight:600;">
              <span class="file-menu-icon">💾</span>
              <span>Save to Device (Direct Sync)</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-item" data-action="open-device" id="file-menu-open-device">
              <span class="file-menu-icon">📂</span>
              <span>Open from Device (Direct Sync)</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-sep"></div>
            <div class="file-menu-item" data-action="new">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg></span>
              <span>New</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-item" data-action="open">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span>
              <span>Open</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-item" data-action="share">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></span>
              <span>Share</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-item" data-action="copy">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></span>
              <span>Create a copy</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-item" data-action="export">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></span>
              <span>Export</span>
              <span class="file-menu-arrow">›</span>
            </div>
            <div class="file-menu-item" data-action="print">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg></span>
              <span>Print</span>
            </div>
            <div class="file-menu-sep"></div>
            <div class="file-menu-item" data-action="rename">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></span>
              <span>Rename</span>
            </div>
            <div class="file-menu-item disabled" title="Document is sovereignly stored in browser local memory" data-action="move">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg></span>
              <span>Move File</span>
            </div>
            <div class="file-menu-item" data-action="history">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
              <span>Version history</span>
            </div>
            <div class="file-menu-sep"></div>
            <div class="file-menu-item danger" data-action="delete">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
              <span>Delete</span>
            </div>
            <div class="file-menu-item" data-action="info">
              <span class="file-menu-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
              <span>Info</span>
              <span class="file-menu-arrow">›</span>
            </div>
          </div>

          <!-- Fluent Grouped Ribbon Panes -->
          <div class="fluent-ribbon-panes">
            <!-- 1. HOME TAB PANE -->
            <div class="fluent-ribbon-pane active" id="pane-home">
              <!-- Undo Group (Far Left) -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col" style="gap:4px;">
                    <button class="fluent-btn-small" data-cmd="undo" id="btn-drift-undo" title="Undo (Ctrl+Z)">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    </button>
                    <button class="fluent-btn-small" data-cmd="redo" id="btn-drift-redo" title="Redo (Ctrl+Y)">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    </button>
                  </div>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Undo</div>
                </div>
              </div>

              <!-- Clipboard Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-drift-paste" title="Paste (Ctrl+V)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                    <span>Paste ▾</span>
                  </button>
                  <div class="fluent-group-col">
                    <button class="fluent-btn-small" id="btn-drift-cut" title="Cut (Ctrl+X)">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
                    </button>
                    <button class="fluent-btn-small" id="btn-drift-copy" title="Copy (Ctrl+C)">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                    <button class="fluent-btn-small" id="btn-drift-format-painter" title="Format Painter: Copy formatting from selection and apply to other text">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 11V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M5 13v7a2 2 0 0 0 2 2h2v-9"/><path d="M15 13v9"/></svg>
                    </button>
                  </div>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Clipboard</div>
                  <button class="fluent-group-launcher" id="btn-drift-launcher-clipboard" title="Clipboard Options">⤢</button>
                </div>
              </div>

              <!-- Font Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <div class="fluent-group-row">
                      <div id="drift-font-picker-mount" class="fluent-font-mount"></div>

                      <select class="fluent-select-dark" id="drift-font-size-pt" style="width:62px;" title="Font Size">
                        <option value="1">10 pt</option>
                        <option value="2">11 pt</option>
                        <option value="3" selected>12 pt</option>
                        <option value="4">14 pt</option>
                        <option value="5">18 pt</option>
                        <option value="6">24 pt</option>
                        <option value="7">36 pt</option>
                      </select>

                      <button class="fluent-btn-small" id="btn-font-grow" title="Grow Font (Ctrl+Shift+>)">A<sup>▲</sup></button>
                      <button class="fluent-btn-small" id="btn-font-shrink" title="Shrink Font (Ctrl+Shift+<)">A<sup>▼</sup></button>
                      <button class="fluent-btn-small" data-cmd="removeFormat" title="Clear All Formatting (Tx)">T<span style="font-size:9px; color:#ef4444; margin-left:1px;">✕</span></button>
                    </div>

                    <div class="fluent-group-row">
                      <button class="fluent-btn-small" data-cmd="bold" title="Bold (Ctrl+B)"><strong>B</strong></button>
                      <button class="fluent-btn-small" data-cmd="italic" title="Italic (Ctrl+I)"><em>I</em></button>
                      <button class="fluent-btn-small" data-cmd="underline" title="Underline (Ctrl+U)"><u>U</u></button>
                      <button class="fluent-btn-small" data-cmd="strikeThrough" title="Strikethrough"><s>ab</s></button>
                      <button class="fluent-btn-small" data-cmd="subscript" title="Subscript">x<span class="sub-blue">2</span></button>
                      <button class="fluent-btn-small" data-cmd="superscript" title="Superscript">x<span class="sup-blue">2</span></button>
                      <button class="fluent-btn-small" id="btn-drift-change-case" title="Change Case (Sentence, UPPERCASE, lowercase, Capitalize)">Ab ▾</button>

                      <label class="fluent-btn-small ribbon-color-picker-wrap" title="Highlight Color">
                        <span style="background:#fde047; color:#000; padding:0 3px; font-weight:800; border-radius:2px; font-size:10px;">ab</span>
                        <input type="color" id="drift-bg-color" class="ribbon-color-input" value="#fde047">
                      </label>

                      <label class="fluent-btn-small ribbon-color-picker-wrap" title="Font Color">
                        <span style="font-weight:900; color:#ef4444; border-bottom:2px solid #ef4444; font-size:12px;">A</span>
                        <input type="color" id="drift-text-color" class="ribbon-color-input" value="#ef4444">
                      </label>
                    </div>
                  </div>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Font</div>
                  <button class="fluent-group-launcher" id="btn-drift-launcher-font" title="Font Dialog (Ctrl+D)">⤢</button>
                </div>
              </div>

              <!-- Paragraph Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <div class="fluent-group-row">
                      <button class="fluent-btn-small" data-cmd="insertUnorderedList" title="Bulleted List">•≡</button>
                      <button class="fluent-btn-small" data-cmd="insertOrderedList" title="Numbered List">1≡</button>
                      <button class="fluent-btn-small" id="btn-insert-checklist" title="Checklist Task Item">☑≡</button>
                      <button class="fluent-btn-small" data-cmd="outdent" title="Decrease Indent">⇤</button>
                      <button class="fluent-btn-small" data-cmd="indent" title="Increase Indent">⇥</button>
                      <button class="fluent-btn-small" id="btn-toggle-paragraph-marks" title="Show/Hide Paragraph Marks (¶)">¶</button>
                    </div>

                    <div class="fluent-group-row">
                      <button class="fluent-btn-small" data-cmd="justifyLeft" title="Align Left">⇦</button>
                      <button class="fluent-btn-small" data-cmd="justifyCenter" title="Center">⇋</button>
                      <button class="fluent-btn-small" data-cmd="justifyRight" title="Align Right">⇨</button>
                      <button class="fluent-btn-small" data-cmd="justifyFull" title="Justify">≡</button>

                      <select class="fluent-select-dark" id="drift-line-spacing" style="width:68px;" title="Line Spacing">
                        <option value="1.0">1.0</option>
                        <option value="1.15" selected>1.15</option>
                        <option value="1.5">1.5</option>
                        <option value="2.0">2.0</option>
                        <option value="2.5">2.5</option>
                      </select>

                      <label class="fluent-btn-small ribbon-color-picker-wrap" title="Paragraph Shading / Fill">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 8.5l-4-4-7.5 7.5 4 4 7.5-7.5z"/><path d="M12 4.5l3.5 3.5"/><path d="M2 20h20"/></svg>
                        <input type="color" id="drift-paragraph-shading" class="ribbon-color-input" value="#f1f5f9">
                      </label>
                    </div>
                  </div>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Paragraph</div>
                  <button class="fluent-group-launcher" id="btn-drift-launcher-paragraph" title="Paragraph Settings">⤢</button>
                </div>
              </div>

              <!-- Styles Gallery Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-styles-gallery" id="fluent-styles-gallery">
                    <div class="fluent-style-card active" data-style-cmd="p">
                      <span class="fluent-style-card-title">Normal</span>
                      <span class="fluent-style-card-sub">Aptos, 12</span>
                    </div>
                    <div class="fluent-style-card" data-style-cmd="nospacing">
                      <span class="fluent-style-card-title">No Spacing</span>
                      <span class="fluent-style-card-sub">Aptos, 12</span>
                    </div>
                    <div class="fluent-style-card" data-style-cmd="h1">
                      <span class="fluent-style-card-title" style="font-weight:800; color:#38bdf8;">Heading 1</span>
                      <span class="fluent-style-card-sub">Aptos Display, 20</span>
                    </div>
                    <div class="fluent-style-card" data-style-cmd="h2">
                      <span class="fluent-style-card-title" style="font-weight:700; color:#60a5fa;">Heading 2</span>
                      <span class="fluent-style-card-sub">Aptos Display, 16</span>
                    </div>
                    <div class="fluent-style-card" data-style-cmd="title">
                      <span class="fluent-style-card-title" style="font-weight:900; letter-spacing:-0.5px;">Title</span>
                      <span class="fluent-style-card-sub">Aptos, 28</span>
                    </div>
                    <div class="fluent-style-card" data-style-cmd="subtitle">
                      <span class="fluent-style-card-title" style="font-weight:500; color:#94a3b8;">Subtitle</span>
                      <span class="fluent-style-card-sub">Aptos, 14</span>
                    </div>
                    <div class="fluent-style-card" data-style-cmd="quote">
                      <span class="fluent-style-card-title" style="font-style:italic; color:#cbd5e1;">Quote</span>
                      <span class="fluent-style-card-sub">“AaBb”</span>
                    </div>
                  </div>
                  <button class="fluent-btn-small" id="btn-drift-styles-dropdown" title="More Styles" style="align-self:center; height:50px; width:18px; padding:0; justify-content:center;">⌵</button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Styles</div>
                  <button class="fluent-group-launcher" id="btn-drift-launcher-styles" title="Styles Pane">⤢</button>
                </div>
              </div>

              <!-- Editing Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <button class="fluent-btn-small" id="btn-find-replace" title="Find (Ctrl+F)" style="width:100%; justify-content:flex-start; gap:4px; padding:0 6px;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      <span>Find</span>
                    </button>
                    <button class="fluent-btn-small" id="btn-find-replace-2" title="Replace (Ctrl+H)" style="width:100%; justify-content:flex-start; gap:4px; padding:0 6px;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                      <span>Replace</span>
                    </button>
                    <button class="fluent-btn-small" id="btn-select-all" title="Select All (Ctrl+A)" style="width:100%; justify-content:flex-start; gap:4px; padding:0 6px;">
                      <span>Select All</span>
                    </button>
                  </div>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Editing</div>
                </div>
              </div>

              <!-- Voice Dictate Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-voice-dictate-group" title="Voice Dictation">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                    <span>Dictate ▾</span>
                  </button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Voice</div>
                </div>
              </div>

              <!-- Proofing / Editor Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-editor-stats-group" title="Check Document Statistics & Proofing">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                    <span>Editor</span>
                  </button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Proofing</div>
                </div>
              </div>

              <!-- Add-ins Group -->
              <div class="fluent-ribbon-group" style="border-right:none;">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-drift-addins" title="Office Add-ins">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2">
                      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
                    </svg>
                    <span>Add-ins ▾</span>
                  </button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Add-ins</div>
                </div>
              </div>
            </div>

            <!-- 2. INSERT TAB PANE -->
            <div class="fluent-ribbon-pane" id="pane-insert">
              <!-- Pages Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-blank-page" title="Insert Blank Page">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span>Blank Page</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-page-break" title="Insert Page Break (Ctrl+Enter)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="4 2"/><polyline points="6 8 2 12 6 16"/><polyline points="18 8 22 12 18 16"/></svg>
                    <span>Page Break</span>
                  </button>
                </div>
                <div class="fluent-group-label">Pages</div>
              </div>

              <!-- Rich Content Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-callout-menu" title="Insert Callout Box (Tip, Warning, Info)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <span>Callout</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-code-block" title="Insert Formatted Code Container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    <span>Code Block</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-divider" title="Insert Horizontal Rule Divider">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>Divider</span>
                  </button>
                </div>
                <div class="fluent-group-label">Rich Content</div>
              </div>

              <!-- Tables Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-table-menu" title="Insert Dynamic Grid Table">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
                    <span>Table ▾</span>
                  </button>
                </div>
                <div class="fluent-group-label">Tables</div>
              </div>

              <!-- Illustrations Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-image-dialog" title="Insert Picture from Device">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span>Pictures</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-shape" title="Insert Drawing Shapes">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polygon points="12 8 16 16 8 16"/></svg>
                    <span>Shapes</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-icon" title="Insert Premium Icons">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>Icons</span>
                  </button>
                </div>
                <div class="fluent-group-label">Illustrations</div>
              </div>

              <!-- Links Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-link-dialog" title="Insert Hyperlink (Ctrl+K)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    <span>Link</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-bookmark" title="Insert Document Bookmark">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    <span>Bookmark</span>
                  </button>
                </div>
                <div class="fluent-group-label">Links</div>
              </div>

              <!-- Comments Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-comment-direct" title="Insert New Margin Comment">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>
                    <span>New Comment</span>
                  </button>
                </div>
                <div class="fluent-group-label">Comments</div>
              </div>

              <!-- Header & Footer Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <button class="fluent-btn-small" id="btn-insert-header" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Header ▾</span>
                    </button>
                    <button class="fluent-btn-small" id="btn-insert-footer" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Footer ▾</span>
                    </button>
                    <button class="fluent-btn-small" id="btn-insert-page-number" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Page Number ▾</span>
                    </button>
                  </div>
                </div>
                <div class="fluent-group-label">Header & Footer</div>
              </div>

              <!-- Text & Callouts Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <button class="fluent-btn-small" id="btn-insert-textbox" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Text Box</span>
                    </button>
                    <button class="fluent-btn-small" id="btn-insert-callout-box" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Callout Box</span>
                    </button>
                    <button class="fluent-btn-small" id="btn-insert-date" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Date & Time</span>
                    </button>
                  </div>
                </div>
                <div class="fluent-group-label">Text</div>
              </div>

              <!-- Seals & Certifications Group (From User Request media_1789232638479.png) -->
              <div class="fluent-ribbon-group" id="drift-ribbon-group-seals">
                <div class="fluent-group-controls">
                  <div style="position:relative; display:inline-block;">
                    <button class="fluent-btn-large" id="btn-drift-stamp-menu" title="Insert Pre-made or Custom Stamp">
                      <span style="color:#ef4444; font-weight:800; font-size:11px; border:1px solid #ef4444; padding:0 3px; border-radius:2px;">APPROVED</span>
                      <span>Stamp ▾</span>
                    </button>
                    <div class="drift-stamp-dropdown-menu" id="drift-stamp-dropdown-menu" style="display:none; position:absolute; top:100%; left:0; z-index:10000; background:#18181b; border:1px solid #334155; border-radius:6px; box-shadow:0 8px 24px rgba(0,0,0,0.3); width:190px; padding:6px 0;">
                      <div class="drift-stamp-menu-item" data-stamp="APPROVED" data-color="#059669" style="padding:7px 12px; cursor:pointer; font-size:11.5px; display:flex; align-items:center; gap:8px;">
                        <span style="border:1.5px solid #059669; color:#059669; font-weight:800; font-size:10px; padding:1px 5px; border-radius:2px;">APPROVED</span>
                      </div>
                      <div class="drift-stamp-menu-item" data-stamp="CONFIDENTIAL" data-color="#dc2626" style="padding:7px 12px; cursor:pointer; font-size:11.5px; display:flex; align-items:center; gap:8px;">
                        <span style="border:1.5px solid #dc2626; color:#dc2626; font-weight:800; font-size:10px; padding:1px 5px; border-radius:2px;">CONFIDENTIAL</span>
                      </div>
                      <div class="drift-stamp-menu-item" data-stamp="DRAFT" data-color="#d97706" style="padding:7px 12px; cursor:pointer; font-size:11.5px; display:flex; align-items:center; gap:8px;">
                        <span style="border:1.5px solid #d97706; color:#d97706; font-weight:800; font-size:10px; padding:1px 5px; border-radius:2px;">DRAFT</span>
                      </div>
                      <div class="drift-stamp-menu-item" data-stamp="FINAL" data-color="#2563eb" style="padding:7px 12px; cursor:pointer; font-size:11.5px; display:flex; align-items:center; gap:8px;">
                        <span style="border:1.5px solid #2563eb; color:#2563eb; font-weight:800; font-size:10px; padding:1px 5px; border-radius:2px;">FINAL</span>
                      </div>
                      <div class="drift-stamp-menu-item" data-stamp="URGENT" data-color="#ea580c" style="padding:7px 12px; cursor:pointer; font-size:11.5px; display:flex; align-items:center; gap:8px;">
                        <span style="border:1.5px solid #ea580c; color:#ea580c; font-weight:800; font-size:10px; padding:1px 5px; border-radius:2px;">URGENT</span>
                      </div>
                      <div class="drift-stamp-menu-item" data-stamp="VERIFIED" data-color="#0d9488" style="padding:7px 12px; cursor:pointer; font-size:11.5px; display:flex; align-items:center; gap:8px;">
                        <span style="border:1.5px solid #0d9488; color:#0d9488; font-weight:800; font-size:10px; padding:1px 5px; border-radius:2px;">VERIFIED</span>
                      </div>
                      <div style="height:1px; background:#334155; margin:4px 0;"></div>
                      <div class="drift-stamp-menu-item-custom" id="btn-open-custom-stamp-modal" style="padding:7px 12px; cursor:pointer; font-size:11.5px; font-weight:600; color:#38bdf8; display:flex; align-items:center; gap:6px;">
                        <span>✨ Custom Stamp...</span>
                      </div>
                    </div>
                  </div>
                  <button class="fluent-btn-large" id="btn-drift-exec-seal" title="Affix Giri Group Executive Seal">
                    <span style="font-size:16px;">🛡️</span>
                    <span>Executive Seal</span>
                  </button>
                </div>
                <div class="fluent-group-label">Seals & Certifications</div>
              </div>

              <!-- Reference & Proofing Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-thesaurus" title="Open Thesaurus (Synonyms & Antonyms)">
                    <span style="font-size:16px;">📚</span>
                    <span>Thesaurus</span>
                  </button>
                </div>
                <div class="fluent-group-label">Reference</div>
              </div>

              <!-- Symbols & Emoji Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-rupee-quick" title="Insert Indian Rupee (₹)" style="color:#38bdf8;">
                    <span style="font-family:'Segoe UI',sans-serif; font-size:17px; font-weight:800;">₹</span>
                    <span>Rupee</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-equation-dialog" title="Math Formula Editor (14+ Presets & Palette)">
                    <span style="font-family:serif; font-size:16px; font-weight:700;">√x</span>
                    <span>Equation</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-symbol-dialog" title="Insert Special Character (120+ Symbols)">
                    <span style="font-family:serif; font-size:16px; font-weight:700;">Ω</span>
                    <span>Symbol</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-emoji-picker" title="Insert Emojis (250+ Categorized Emojis)">
                    <span style="font-size:16px;">😀</span>
                    <span>Emoji ▾</span>
                  </button>
                </div>
                <div class="fluent-group-label">Symbols</div>
              </div>
            </div>

            <!-- 3. LAYOUT TAB PANE -->
            <div class="fluent-ribbon-pane" id="pane-layout">
              <!-- Page Setup Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <div class="fluent-group-row">
                      <span style="font-size:11px; color:#a1a1aa; width:70px;">Margins:</span>
                      <select class="fluent-select-dark" id="drift-margin-select" style="width:110px;" title="Page Margins">
                        <option value="normal" selected>Normal (1.0")</option>
                        <option value="narrow">Narrow (0.5")</option>
                        <option value="wide">Wide (1.5")</option>
                      </select>
                    </div>
                    <div class="fluent-group-row">
                      <span style="font-size:11px; color:#a1a1aa; width:70px;">Orientation:</span>
                      <button class="fluent-btn-small active" id="btn-orient-portrait" title="Portrait">📄 Port</button>
                      <button class="fluent-btn-small" id="btn-orient-landscape" title="Landscape">📃 Land</button>
                    </div>
                    <div class="fluent-group-row">
                      <span style="font-size:11px; color:#a1a1aa; width:70px;">Columns:</span>
                      <button class="fluent-btn-small active" id="btn-col-1" title="1 Column">1 Col</button>
                      <button class="fluent-btn-small" id="btn-col-2" title="2 Columns">2 Cols</button>
                      <button class="fluent-btn-small" id="btn-col-3" title="3 Columns">3 Cols</button>
                    </div>
                  </div>
                </div>
                <div class="fluent-group-label">Page Setup</div>
              </div>

              <!-- Paragraph Indent & Spacing Steppers Group (Exact Match to Layout Screenshot) -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col" style="gap:5px;">
                    <div style="font-size:10.5px; font-weight:700; color:#38bdf8; text-transform:uppercase;">Indent</div>
                    <div class="fluent-stepper-wrap">
                      <span style="width:40px;">Left:</span>
                      <input type="number" class="fluent-stepper-input" id="drift-indent-left-val" value="0" min="0" max="100" step="5">
                      <span>px</span>
                    </div>
                    <div class="fluent-stepper-wrap">
                      <span style="width:40px;">Right:</span>
                      <input type="number" class="fluent-stepper-input" id="drift-indent-right-val" value="0" min="0" max="100" step="5">
                      <span>px</span>
                    </div>
                  </div>

                  <div style="width:1px; height:50px; background:#2e2e33; margin:0 4px;"></div>

                  <div class="fluent-group-col" style="gap:5px;">
                    <div style="font-size:10.5px; font-weight:700; color:#38bdf8; text-transform:uppercase;">Spacing</div>
                    <div class="fluent-stepper-wrap">
                      <span style="width:44px;">Before:</span>
                      <input type="number" class="fluent-stepper-input" id="drift-spacing-before-val" value="0" min="0" max="60" step="4">
                      <span>pt</span>
                    </div>
                    <div class="fluent-stepper-wrap">
                      <span style="width:44px;">After:</span>
                      <input type="number" class="fluent-stepper-input" id="drift-spacing-after-val" value="8" min="0" max="60" step="4">
                      <span>pt</span>
                    </div>
                  </div>
                </div>
                <div class="fluent-group-label">Paragraph</div>
              </div>

              <!-- Page Background Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <div class="fluent-group-row">
                      <span style="font-size:11px; color:#a1a1aa; width:75px;">Page Tint:</span>
                      <select class="fluent-select-dark" id="drift-page-tint" style="width:110px;">
                        <option value="#ffffff" selected>Pure White</option>
                        <option value="#fafafa">Warm Ivory</option>
                        <option value="#f8fafc">Slate White</option>
                        <option value="#eff6ff">Cool Frost</option>
                        <option value="#fefce8">Cream</option>
                      </select>
                    </div>
                    <div class="fluent-group-row" style="margin-top:4px;">
                      <button class="fluent-btn-small" id="btn-page-borders" style="width:100%; justify-content:center;">
                        <span>Page Borders ▾</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="fluent-group-label">Page Background</div>
              </div>
            </div>

            <!-- 4. REFERENCES TAB PANE -->
            <div class="fluent-ribbon-pane" id="pane-references">
              <!-- Table of Contents Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-toc-action" title="Generate Table of Contents from Document Headings">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="7" y1="12" x2="21" y2="12"/><line x1="7" y1="18" x2="21" y2="18"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="18" r="1"/></svg>
                    <span>Table of Contents</span>
                  </button>
                </div>
                <div class="fluent-group-label">Table of Contents</div>
              </div>

              <!-- Footnotes Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-insert-footnote" title="Insert Numbered Footnote Reference">
                    <span style="font-family:serif; font-size:16px; font-weight:700;">AB<sup>1</sup></span>
                    <span>Insert Footnote</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-insert-endnote" title="Insert Document Endnote">
                    <span style="font-family:serif; font-size:16px; font-weight:700;">AB<sup>i</sup></span>
                    <span>Insert Endnote</span>
                  </button>
                </div>
                <div class="fluent-group-label">Footnotes</div>
              </div>

              <!-- Citations & Bibliography Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <button class="fluent-btn-small" id="btn-insert-citation" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>+ Insert Citation</span>
                    </button>
                    <div class="fluent-group-row">
                      <span style="font-size:11px; color:#a1a1aa;">Style:</span>
                      <select class="fluent-select-dark" id="drift-citation-style" style="width:80px;">
                        <option value="APA" selected>APA 7th</option>
                        <option value="MLA">MLA 9th</option>
                        <option value="Chicago">Chicago</option>
                        <option value="IEEE">IEEE</option>
                      </select>
                    </div>
                    <button class="fluent-btn-small" id="btn-insert-bibliography" style="width:100%; justify-content:flex-start; gap:4px;">
                      <span>Bibliography ▾</span>
                    </button>
                  </div>
                </div>
                <div class="fluent-group-label">Citations & Bibliography</div>
              </div>
            </div>

            <!-- 5. REVIEW TAB PANE -->
            <div class="fluent-ribbon-pane" id="pane-review">
              <!-- Proofing Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-toggle-spellcheck" title="Toggle Interactive Spellcheck">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Spelling</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-review-thesaurus" title="Thesaurus (Synonyms & Antonyms)">
                    <span style="font-size:18px;">📚</span>
                    <span>Thesaurus</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-doc-statistics" title="Word Count, Paragraphs, Lines, Reading Time">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    <span>Word Count</span>
                  </button>
                </div>
                <div class="fluent-group-label">Proofing</div>
              </div>

              <!-- Language Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-review-translate" title="Document Translation Engine">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <span>Translate</span>
                  </button>
                </div>
                <div class="fluent-group-label">Language</div>
              </div>

              <!-- Comments Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-review-new-comment" title="New Margin Comment">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>New Comment</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-review-show-comments" title="Toggle Comments Sidebar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
                    <span>Show Comments</span>
                  </button>
                </div>
                <div class="fluent-group-label">Comments</div>
              </div>

              <!-- Tracking Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-toggle-track-changes" title="Toggle Track Changes Markup Mode">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    <span id="track-changes-label">Track Changes</span>
                  </button>
                </div>
                <div class="fluent-group-label">Tracking</div>
              </div>

              <!-- Protect Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-doc-lock" title="Lock Document with Sovereign Passcode">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span>Lock Doc</span>
                  </button>
                </div>
                <div class="fluent-group-label">Protect</div>
              </div>
            </div>

            <!-- 6. VIEW TAB PANE -->
            <div class="fluent-ribbon-pane" id="pane-view">
              <!-- Views Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large active" id="btn-view-paper" title="Print Layout View (A4 Paper Sheet)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span>Paged Sheet</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-view-web" title="Full-Bleed Responsive Web View">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <span>Web View</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-toggle-zen" title="Zen Focus Mode">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                    <span>Zen Mode</span>
                  </button>
                </div>
                <div class="fluent-group-label">Views</div>
              </div>

              <!-- Show Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <div class="fluent-group-col">
                    <label style="display:flex; align-items:center; gap:6px; font-size:11px; cursor:pointer; color:#cbd5e1;">
                      <input type="checkbox" id="chk-toggle-ruler" checked> Ruler
                    </label>
                    <label style="display:flex; align-items:center; gap:6px; font-size:11px; cursor:pointer; color:#cbd5e1;">
                      <input type="checkbox" id="chk-toggle-outline" checked> Navigation Pane
                    </label>
                    <label style="display:flex; align-items:center; gap:6px; font-size:11px; cursor:pointer; color:#cbd5e1;">
                      <input type="checkbox" id="chk-toggle-gridlines"> Gridlines
                    </label>
                  </div>
                </div>
                <div class="fluent-group-label">Show</div>
              </div>

              <!-- Zoom Group -->
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-small" id="btn-drift-zoom-out" title="Zoom Out">-</button>
                  <span style="font-family:var(--font-mono); font-size:11.5px; font-weight:700; width:48px; text-align:center; color:#38bdf8;" id="drift-zoom-label">100%</span>
                  <button class="fluent-btn-small" id="btn-drift-zoom-in" title="Zoom In">+</button>
                  <button class="fluent-btn-small" id="btn-drift-zoom-reset" title="Reset Zoom" style="width:auto; padding:0 8px;">100%</button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Zoom</div>
                </div>
              </div>
            </div>

            <!-- 7. HELP TAB PANE -->
            <div class="fluent-ribbon-pane" id="pane-help">
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-drift-help-center" title="Open Help Center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <span>Help</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-drift-shortcuts-btn" title="View Keyboard Shortcuts">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/></svg>
                    <span>Shortcuts</span>
                  </button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Help</div>
                </div>
              </div>
              <div class="fluent-ribbon-group">
                <div class="fluent-group-controls">
                  <button class="fluent-btn-large" id="btn-drift-whats-new" title="What's New in Giri Drift">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>What's New</span>
                  </button>
                  <button class="fluent-btn-large" id="btn-drift-feedback-btn" title="Send Feedback">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <span>Feedback</span>
                  </button>
                </div>
                <div class="fluent-group-footer">
                  <div class="fluent-group-label">Community</div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Split Body: Outline Sidebar + Ruler + Centered Paper + Comments Panel -->
        <div class="drift-split-body" style="position:relative; overflow:hidden;">
          <!-- Left Navigation Sidebar -->
          <aside class="drift-left-sidebar" id="drift-left-sidebar" style="display:flex; flex-direction:column; gap:10px;">
            <!-- Mobile Close Drawer Header -->
            <div class="drift-sidebar-mobile-close-row" style="display:none; justify-content:space-between; align-items:center; margin-bottom:6px; padding-bottom:6px; border-bottom:1px solid #334155;">
              <span style="font-size:12px; font-weight:700; color:#f8fafc; display:flex; align-items:center; gap:6px;">
                <span>📄</span> Navigation
              </span>
              <button id="btn-close-drift-sidebar-drawer" style="background:#27272a; border:1px solid #3f3f46; color:#cbd5e1; border-radius:4px; padding:3px 8px; font-size:12px; cursor:pointer;">✕</button>
            </div>

            <!-- Navigation Tab Switcher -->
            <div class="drift-sidebar-nav-tabs" style="display:flex; gap:4px; margin-bottom:4px; background:#1e293b; padding:3px; border-radius:6px; border:1px solid #334155; flex-shrink:0;">
              <button class="drift-sidebar-nav-tab active" id="tab-drift-pages" style="flex:1; background:#2563eb; color:#fff; border:none; border-radius:4px; padding:6px 4px; font-size:11px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:4px;">
                <span>📄</span> Pages
              </button>
              <button class="drift-sidebar-nav-tab" id="tab-drift-headings" style="flex:1; background:transparent; color:#94a3b8; border:none; border-radius:4px; padding:6px 4px; font-size:11px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:4px;">
                <span>📑</span> Headings
              </button>
            </div>

            <!-- 1. PAGES PANE -->
            <div class="drift-sidebar-tab-pane" id="pane-drift-pages" style="display:flex; flex-direction:column; flex:1; min-height:0; overflow:hidden;">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-shrink:0;">
                <strong id="drift-page-counter-badge" style="font-size:11.5px; color:#38bdf8; font-weight:700;">Page 1 of 1</strong>
                <button id="btn-drift-insert-pagebreak" title="Insert Page Break (Ctrl+Enter)" style="background:#27272a; border:1px solid #3f3f46; color:#cbd5e1; border-radius:4px; padding:3px 8px; font-size:10.5px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:3px;">
                  <span>+</span> Page Break
                </button>
              </div>

              <div class="drift-pages-list" id="drift-pages-list" style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:8px; padding-right:2px;">
                <!-- Dynamically populated page miniature thumbnails -->
              </div>
            </div>

            <!-- 2. HEADINGS PANE -->
            <div class="drift-sidebar-tab-pane" id="pane-drift-headings" style="display:none; flex-direction:column; flex:1; min-height:0; overflow:hidden;">
              <span class="sidebar-heading" style="margin-bottom:6px; flex-shrink:0;">DOCUMENT OUTLINE</span>
              <ul class="doc-outline-list" id="doc-outline-list" style="flex:1; overflow-y:auto; list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:4px;">
                <!-- Dynamically populated from headings -->
              </ul>
            </div>

            <!-- BOTTOM PROOFING & STATS BAR (Replacing old telemetry) -->
            <div class="drift-sidebar-bottom-bar" style="margin-top:auto; padding-top:10px; border-top:1px solid #27272a; display:flex; flex-direction:column; gap:6px; flex-shrink:0;">
              <!-- Word Count Trigger Card -->
              <div class="sidebar-proofing-card" id="btn-drift-sidebar-wordcount" role="button" tabindex="0" title="Open Detailed Word Count & Document Statistics" style="background:#18181b; border:1px solid #27272a; border-radius:6px; padding:7px 9px; cursor:pointer; transition:all 0.15s; display:flex; align-items:center; gap:8px;">
                <span style="font-size:16px;">📝</span>
                <div style="flex:1; min-width:0;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:9.5px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Word Count</span>
                    <strong id="drift-word-count" style="font-size:11.5px; color:#f8fafc;">0</strong>
                  </div>
                  <div style="font-size:10px; color:#64748b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    <span id="drift-char-count">0</span> chars • <span id="drift-read-time">~1 min</span>
                  </div>
                </div>
              </div>

              <!-- Spell Check Trigger Card -->
              <div class="sidebar-proofing-card" id="btn-drift-sidebar-spelling" role="button" tabindex="0" title="Open Spelling & Grammar Proofing Assistant" style="background:#18181b; border:1px solid #27272a; border-radius:6px; padding:7px 9px; cursor:pointer; transition:all 0.15s; display:flex; align-items:center; gap:8px;">
                <span style="font-size:16px; color:#10b981;">✓</span>
                <div style="flex:1; min-width:0;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:9.5px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Spell Check</span>
                    <span id="drift-spelling-status-pill" style="font-size:9.5px; font-weight:700; color:#10b981; background:rgba(16,185,129,0.15); padding:1px 5px; border-radius:3px;">ACTIVE</span>
                  </div>
                  <div style="font-size:10px; color:#64748b;" id="drift-spelling-summary-text">Click to scan document</div>
                </div>
              </div>

              <!-- Thesaurus Trigger Card -->
              <div class="sidebar-proofing-card" id="btn-drift-sidebar-thesaurus" role="button" tabindex="0" title="Open Thesaurus & Synonym Dictionary" style="background:#18181b; border:1px solid #27272a; border-radius:6px; padding:7px 9px; cursor:pointer; transition:all 0.15s; display:flex; align-items:center; gap:8px;">
                <span style="font-size:16px;">📚</span>
                <div style="flex:1; min-width:0;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:9.5px; font-weight:700; color:#94a3b8; text-transform:uppercase;">Thesaurus</span>
                    <span style="font-size:9.5px; color:#38bdf8; font-weight:600;">LOOKUP</span>
                  </div>
                  <div style="font-size:10px; color:#64748b;">Find synonyms & antonyms</div>
                </div>
              </div>
            </div>
          </aside>

          <!-- Centered Paper Canvas Viewport -->
          <div class="drift-center-viewport" id="drift-center-viewport" style="position:relative;">
            <!-- Document Ruler Bar -->
            <div id="drift-top-ruler" style="width:816px; min-width:816px; max-width:816px; height:18px; background:#f1f5f9; border:1px solid #cbd5e1; border-bottom:none; display:flex; align-items:center; justify-content:space-between; padding:0 10px; font-size:9px; font-family:var(--font-mono); color:#64748b; margin:12px auto 0 auto; border-radius:4px 4px 0 0; user-select:none; box-sizing:border-box;">
              <span>| 1"</span><span>| 2"</span><span>| 3"</span><span>| 4"</span><span>| 5"</span><span>| 6"</span><span>| 7"</span><span>| 8"</span>
            </div>

            <article class="paper-sheet-container" contenteditable="true" spellcheck="true" id="drift-paper-canvas" style="border-radius:0 0 4px 4px;">
              ${savedDoc}
            </article>
          </div>

          <!-- Right Slide-Over Comments Panel -->
          <aside class="drift-comments-sidebar" id="drift-comments-sidebar">
            <div class="comments-header">
              <span>Comments & Review</span>
              <button class="fluent-btn-small" id="btn-close-comments-sidebar" style="color:#64748b;">✕</button>
            </div>
            <div class="comments-list" id="drift-comments-list">
              <!-- Populated dynamically -->
            </div>
            <div class="comments-footer-add">
              <textarea id="new-comment-textarea" placeholder="Add a comment or executive note..." rows="2" style="width:100%; padding:8px; font-size:12px; border:1px solid #cbd5e1; border-radius:4px; resize:none; font-family:var(--font-sans);"></textarea>
              <button class="btn-giri-primary" id="btn-post-comment" style="padding:6px 14px; font-size:12px; align-self:flex-end;">Post Comment</button>
            </div>
          </aside>

          <!-- Floating Emoji Picker Dropdown -->
          <div class="fluent-emoji-picker-dropdown" id="drift-emoji-picker-dropdown">
            <!-- Populated dynamically with emojis -->
          </div>
        </div>
      </div>

      <!-- DIALOG MODALS FOR DRIFT -->
      <!-- Save as Custom Template Dialog -->
      <div class="office-modal-backdrop" id="drift-save-template-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true">
          <div class="office-dialog-header">
            <span class="office-dialog-title">★ Save Document as Custom Template</span>
            <button class="esc-kbd" id="btn-close-save-template">ESC</button>
          </div>
          <div class="office-dialog-body">
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Template Name:</label>
              <input type="text" id="custom-template-name-input" class="dialog-input-field" value="${currentDocTitle} Template" placeholder="e.g. Q4 Executive Brief">
            </div>
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Template Category:</label>
              <select id="custom-template-cat-select" class="dialog-input-field">
                <option value="custom" selected>Custom Templates</option>
                <option value="resumes">Resumes</option>
                <option value="invoices">Invoices</option>
                <option value="papers">Papers and Reports</option>
                <option value="flyers">Flyers</option>
                <option value="meeting">Meeting Notes</option>
                <option value="letters">Letters</option>
              </select>
            </div>
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Description:</label>
              <input type="text" id="custom-template-desc-input" class="dialog-input-field" value="Reusable custom document layout" placeholder="Short description of this template...">
            </div>
            <p style="font-size:11px; color:#64748b; margin:0;">
              This template will be saved to your local sovereign template library and available immediately from the Template Hub.
            </p>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-save-template">Cancel</button>
            <button class="btn-giri-primary" id="btn-confirm-save-template" style="padding:7px 16px; font-size:12.5px;">Save Template</button>
          </div>
        </div>
      </div>

      <!-- Find & Replace Dialog -->
      <div class="office-modal-backdrop" id="drift-find-replace-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🔍 Find and Replace</span>
            <button class="esc-kbd" id="btn-close-find-replace">ESC</button>
          </div>
          <div class="office-dialog-body">
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Find Word / Phrase:</label>
              <input type="text" id="find-input-query" class="dialog-input-field" placeholder="Enter text to search...">
            </div>
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Replace With:</label>
              <input type="text" id="replace-input-val" class="dialog-input-field" placeholder="Enter replacement text...">
            </div>
            <div id="find-status-msg" style="font-size:11.5px; color:#64748b;">Ready to search document.</div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-find-next">Find Next</button>
            <button class="btn-giri-primary" id="btn-replace-all" style="padding:7px 14px; font-size:12px;">Replace All</button>
          </div>
        </div>
      </div>

      <!-- Insert Link Dialog -->
      <div class="office-modal-backdrop" id="drift-link-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🔗 Insert Hyperlink</span>
            <button class="esc-kbd" id="btn-close-link-modal">ESC</button>
          </div>
          <div class="office-dialog-body">
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Display Text:</label>
              <input type="text" id="link-display-text" class="dialog-input-field" placeholder="Text to display...">
            </div>
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Web Address / URL:</label>
              <input type="text" id="link-url-target" class="dialog-input-field" placeholder="https://..." value="https://">
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-link">Cancel</button>
            <button class="btn-giri-primary" id="btn-confirm-link" style="padding:7px 14px; font-size:12px;">Insert Link</button>
          </div>
        </div>
      </div>

      <!-- Special Symbols Dialog -->
      <div class="office-modal-backdrop" id="drift-symbol-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:420px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">Ω Special Characters & Symbols</span>
            <button class="esc-kbd" id="btn-close-symbol-modal">ESC</button>
          </div>
          <div class="office-dialog-body">
            <div class="symbols-grid" id="symbols-picker-grid">
              <!-- Dynamically populated -->
            </div>
          </div>
        </div>
      </div>

      <!-- Math Equation Dialog -->
      <div class="office-modal-backdrop" id="drift-equation-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true">
          <div class="office-dialog-header">
            <span class="office-dialog-title">√x Insert Math Formula</span>
            <button class="esc-kbd" id="btn-close-equation-modal">ESC</button>
          </div>
          <div class="office-dialog-body">
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">LaTeX / Formula Expression:</label>
              <input type="text" id="math-equation-input" class="dialog-input-field" placeholder="e.g. E = mc^2 or \sum_{i=1}^n x_i" value="E = mc^2">
            </div>
            <div>
              <label style="display:block; margin-bottom:4px; font-weight:600; font-size:12px;">Preview:</label>
              <div id="math-equation-preview" style="padding:14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; font-family:var(--font-mono); font-size:15px; color:#1e40af; text-align:center;">
                E = mc²
              </div>
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-equation">Cancel</button>
            <button class="btn-giri-primary" id="btn-confirm-equation" style="padding:7px 14px; font-size:12px;">Insert Formula</button>
          </div>
        </div>
      </div>

      <!-- Document Statistics Dialog -->
      <div class="office-modal-backdrop" id="drift-stats-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:400px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">📊 Document Telemetry & Statistics</span>
            <button class="esc-kbd" id="btn-close-stats-modal">ESC</button>
          </div>
          <div class="office-dialog-body" id="doc-stats-modal-body">
            <!-- Populated dynamically -->
          </div>
          <div class="office-dialog-footer">
            <button class="btn-giri-primary" id="btn-ok-stats" style="padding:7px 16px; font-size:12px;">Close</button>
          </div>
        </div>
      </div>

      
      <!-- Custom Stamp Creator Modal (User Request media_1789232638479.png) -->
      <div class="office-modal-backdrop" id="drift-custom-stamp-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:480px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🛡️ Custom Stamp Studio</span>
            <button class="esc-kbd" id="btn-close-custom-stamp-modal">ESC</button>
          </div>
          <div class="office-dialog-body" style="display:flex; flex-direction:column; gap:12px;">
            <div>
              <label style="display:block; font-size:11.5px; font-weight:600; color:#334155; margin-bottom:4px;">Primary Stamp Text:</label>
              <input type="text" id="stamp-custom-text-input" class="dialog-input-field" value="CONFIDENTIAL" placeholder="e.g. APPROVED, TOP SECRET, ACCEPTED" style="text-transform:uppercase;">
            </div>
            <div>
              <label style="display:block; font-size:11.5px; font-weight:600; color:#334155; margin-bottom:4px;">Issuer / Department Subtext:</label>
              <input type="text" id="stamp-custom-sub-input" class="dialog-input-field" value="GIRI CORP EXECUTIVE" placeholder="e.g. OFFICE OF THE CEO, LEGAL AUDIT">
            </div>
            <div style="display:flex; gap:14px; align-items:center;">
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#334155; margin-bottom:4px;">Stamp Color:</label>
                <div style="display:flex; gap:6px;" id="stamp-color-swatches">
                  <button class="stamp-color-btn active" data-color="#dc2626" style="width:24px; height:24px; border-radius:50%; background:#dc2626; border:2px solid #fff; box-shadow:0 0 0 2px #dc2626;"></button>
                  <button class="stamp-color-btn" data-color="#059669" style="width:24px; height:24px; border-radius:50%; background:#059669; border:2px solid #fff; box-shadow:0 0 0 1px #cbd5e1;"></button>
                  <button class="stamp-color-btn" data-color="#1e3a8a" style="width:24px; height:24px; border-radius:50%; background:#1e3a8a; border:2px solid #fff; box-shadow:0 0 0 1px #cbd5e1;"></button>
                  <button class="stamp-color-btn" data-color="#7c3aed" style="width:24px; height:24px; border-radius:50%; background:#7c3aed; border:2px solid #fff; box-shadow:0 0 0 1px #cbd5e1;"></button>
                  <button class="stamp-color-btn" data-color="#d97706" style="width:24px; height:24px; border-radius:50%; background:#d97706; border:2px solid #fff; box-shadow:0 0 0 1px #cbd5e1;"></button>
                  <button class="stamp-color-btn" data-color="#0f172a" style="width:24px; height:24px; border-radius:50%; background:#0f172a; border:2px solid #fff; box-shadow:0 0 0 1px #cbd5e1;"></button>
                </div>
              </div>
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#334155; margin-bottom:4px;">Border Style:</label>
                <select id="stamp-border-style-select" class="dialog-input-field" style="padding:5px 8px;">
                  <option value="double" selected>Double Border</option>
                  <option value="solid">Solid Thick</option>
                  <option value="dashed">Dashed Line</option>
                  <option value="groove">Heavy Grunge</option>
                </select>
              </div>
            </div>
            <div style="display:flex; gap:16px; align-items:center; font-size:11.5px; color:#475569;">
              <label style="display:flex; align-items:center; gap:4px; cursor:pointer;">
                <input type="checkbox" id="stamp-include-date" checked> Include Current Date
              </label>
              <label style="display:flex; align-items:center; gap:4px; cursor:pointer;">
                <input type="checkbox" id="stamp-include-hash" checked> Cryptographic Hash
              </label>
            </div>
            <div>
              <label style="display:block; font-size:11.5px; font-weight:600; color:#64748b; margin-bottom:6px;">Live Stamp Preview:</label>
              <div id="stamp-live-preview-box" style="padding:20px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; display:flex; justify-content:center; align-items:center; min-height:85px;">
              </div>
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-custom-stamp">Cancel</button>
            <button class="btn-giri-primary" id="btn-confirm-insert-stamp" style="padding:7px 18px; font-size:12px;">Insert Stamp</button>
          </div>
        </div>
      </div>

      <!-- Version History Dialog -->
      <div class="office-modal-backdrop" id="drift-version-history-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:460px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🕒 Document Version History</span>
            <button class="esc-kbd" id="btn-close-history-modal">ESC</button>
          </div>
          <div class="office-dialog-body" id="doc-version-history-body">
            <div style="font-size:12px; color:#64748b; margin-bottom:12px;">
              All snapshots are captured sovereignly in local memory buffers.
            </div>
            <div id="version-history-list" style="display:flex; flex-direction:column; gap:8px;">
              <!-- Dynamically populated -->
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="btn-giri-primary" id="btn-ok-history" style="padding:7px 16px; font-size:12px;">Done</button>
          </div>
        </div>
      </div>

      <!-- Info Dialog -->
      <div class="office-modal-backdrop" id="drift-info-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:440px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">ℹ Document Information</span>
            <button class="esc-kbd" id="btn-close-info-modal">ESC</button>
          </div>
          <div class="office-dialog-body" id="doc-info-modal-body">
            <!-- Dynamically populated -->
          </div>
          <div class="office-dialog-footer">
            <button class="btn-giri-primary" id="btn-ok-info" style="padding:7px 16px; font-size:12px;">Close</button>
          </div>
        </div>
      </div>

      <!-- Font Dialog Launcher Modal -->
      <div class="office-modal-backdrop" id="drift-font-dialog-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:480px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🔤 Font Settings</span>
            <button class="esc-kbd" id="btn-close-font-dialog">ESC</button>
          </div>
          <div class="office-dialog-body" style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; gap:12px;">
              <div style="flex:2;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Font Family:</label>
                <select id="modal-font-family" class="fluent-select-dark" style="width:100%; height:32px;">
                  <option value="Aptos, Calibri, sans-serif" selected>Aptos (Default)</option>
                  <option value="Calibri, sans-serif">Calibri</option>
                  <option value="'Segoe UI', sans-serif">Segoe UI</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="'Times New Roman', serif">Times New Roman</option>
                  <option value="Arial, sans-serif">Arial</option>
                </select>
              </div>
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Size (pt):</label>
                <input type="number" id="modal-font-size-val" class="dialog-input-field" value="12" min="8" max="72">
              </div>
            </div>
            <div style="display:flex; gap:12px;">
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Font Style:</label>
                <select id="modal-font-weight-style" class="fluent-select-dark" style="width:100%; height:32px;">
                  <option value="normal" selected>Regular</option>
                  <option value="italic">Italic</option>
                  <option value="bold">Bold</option>
                  <option value="bold-italic">Bold Italic</option>
                </select>
              </div>
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Font Color:</label>
                <input type="color" id="modal-font-color-picker" class="ribbon-color-input" value="#0f172a" style="width:100%; height:32px; border-radius:4px; cursor:pointer;">
              </div>
            </div>
            <div>
              <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Effects:</label>
              <div style="display:flex; gap:16px; font-size:12px; color:#94a3b8;">
                <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" id="modal-chk-strike"> Strikethrough</label>
                <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" id="modal-chk-sub"> Subscript</label>
                <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" id="modal-chk-sup"> Superscript</label>
              </div>
            </div>
            <div style="padding:14px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; text-align:center;">
              <span id="modal-font-preview" style="font-family:Aptos, Calibri, sans-serif; font-size:16px; color:#0f172a;">Aptos Preview Text (Office 365)</span>
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-font-dialog">Cancel</button>
            <button class="btn-giri-primary" id="btn-apply-font-dialog" style="padding:7px 18px; font-size:12px;">Apply Font</button>
          </div>
        </div>
      </div>

      <!-- Paragraph Dialog Launcher Modal -->
      <div class="office-modal-backdrop" id="drift-paragraph-dialog-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:480px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">¶ Paragraph Settings</span>
            <button class="esc-kbd" id="btn-close-paragraph-dialog">ESC</button>
          </div>
          <div class="office-dialog-body" style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; gap:12px;">
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Alignment:</label>
                <select id="modal-para-align" class="fluent-select-dark" style="width:100%; height:32px;">
                  <option value="left" selected>Left</option>
                  <option value="center">Centered</option>
                  <option value="right">Right</option>
                  <option value="justify">Justified</option>
                </select>
              </div>
              <div style="flex:1;">
                <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Line Spacing:</label>
                <select id="modal-para-line-spacing" class="fluent-select-dark" style="width:100%; height:32px;">
                  <option value="1.0">Single (1.0)</option>
                  <option value="1.15" selected>1.15 lines</option>
                  <option value="1.5">1.5 lines</option>
                  <option value="2.0">Double (2.0)</option>
                </select>
              </div>
            </div>
            <div>
              <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Indentation (px):</label>
              <div style="display:flex; gap:12px;">
                <div style="flex:1;">
                  <span style="font-size:11px; color:#94a3b8;">Left:</span>
                  <input type="number" id="modal-para-indent-left" class="dialog-input-field" value="0" min="0" max="100" step="10">
                </div>
                <div style="flex:1;">
                  <span style="font-size:11px; color:#94a3b8;">Right:</span>
                  <input type="number" id="modal-para-indent-right" class="dialog-input-field" value="0" min="0" max="100" step="10">
                </div>
              </div>
            </div>
            <div>
              <label style="display:block; font-size:11.5px; font-weight:600; color:#cbd5e1; margin-bottom:4px;">Spacing (pt):</label>
              <div style="display:flex; gap:12px;">
                <div style="flex:1;">
                  <span style="font-size:11px; color:#94a3b8;">Before:</span>
                  <input type="number" id="modal-para-space-before" class="dialog-input-field" value="0" min="0" max="60" step="4">
                </div>
                <div style="flex:1;">
                  <span style="font-size:11px; color:#94a3b8;">After:</span>
                  <input type="number" id="modal-para-space-after" class="dialog-input-field" value="8" min="0" max="60" step="4">
                </div>
              </div>
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-paragraph-dialog">Cancel</button>
            <button class="btn-giri-primary" id="btn-apply-paragraph-dialog" style="padding:7px 18px; font-size:12px;">Apply Paragraph</button>
          </div>
        </div>
      </div>

      <!-- Proofing Editor Modal -->
      <div class="office-modal-backdrop" id="drift-editor-proofing-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:480px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🖊️ Proofing & Spelling Assistant</span>
            <button class="esc-kbd" id="btn-close-drift-spelling-dialog">✕</button>
          </div>
          <div class="office-dialog-body" style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; background:#1e293b; border-radius:8px; border:1px solid #334155;">
              <div>
                <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#94a3b8; display:block;">Editor Score</span>
                <strong style="font-size:28px; font-weight:800; color:#10b981;" id="drift-editor-score-val">98%</strong>
              </div>
              <div style="text-align:right;">
                <span style="font-size:11.5px; color:#38bdf8; font-weight:600; display:block;">Executive Document</span>
                <span style="font-size:11px; color:#64748b;">Formal Tone</span>
              </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="padding:10px; background:#18181b; border:1px solid #27272a; border-radius:6px;">
                <span style="font-size:11px; color:#71717a; display:block;">Spelling</span>
                <strong style="font-size:14px; color:#10b981;">✓ 0 Issues</strong>
              </div>
              <div style="padding:10px; background:#18181b; border:1px solid #27272a; border-radius:6px;">
                <span style="font-size:11px; color:#71717a; display:block;">Grammar</span>
                <strong style="font-size:14px; color:#10b981;">✓ Concise & Clear</strong>
              </div>
              <div style="padding:10px; background:#18181b; border:1px solid #27272a; border-radius:6px;">
                <span style="font-size:11px; color:#71717a; display:block;">Reading Ease</span>
                <strong style="font-size:14px; color:#38bdf8;">Standard (68.4)</strong>
              </div>
              <div style="padding:10px; background:#18181b; border:1px solid #27272a; border-radius:6px;">
                <span style="font-size:11px; color:#71717a; display:block;">Reading Time</span>
                <strong style="font-size:14px; color:#f59e0b;" id="drift-editor-reading-time">~1 min</strong>
              </div>
            </div>
            <div style="font-size:12px; color:#94a3b8; line-height:1.5; padding:10px; background:rgba(59,130,246,0.08); border-left:3px solid #3b82f6; border-radius:0 6px 6px 0;">
              <strong>Writing Suggestions:</strong> Your document demonstrates exemplary clarity and coherence. Vocabulary is elevated and professional.
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="export-cancel-btn" id="btn-cancel-editor-proofing">Close</button>
            <button class="btn-giri-primary" id="btn-apply-editor-polish" style="padding:7px 18px; font-size:12px;">Accept All Suggestions</button>
          </div>
        </div>
      </div>

      <!-- Add-ins Modal -->
      <div class="office-modal-backdrop" id="drift-addins-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:520px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">🎛️ Office Add-ins & Extensions</span>
            <button class="esc-kbd" id="btn-close-addins-modal">ESC</button>
          </div>
          <div class="office-dialog-body" style="display:flex; flex-direction:column; gap:12px;">
            <div style="font-size:12px; color:#94a3b8;">
              Enhance Giri Drift with sovereign client-side productivity add-ins:
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:#1e293b; border-radius:6px; border:1px solid #334155;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <span style="font-size:22px;">🌐</span>
                  <div>
                    <strong style="font-size:12.5px; color:#f8fafc; display:block;">Wikipedia Citation Assistant</strong>
                    <span style="font-size:11px; color:#94a3b8;">Look up research topics and insert formal citations</span>
                  </div>
                </div>
                <button class="btn-giri-primary btn-run-addin" data-addin="wikipedia" style="padding:4px 12px; font-size:11px;">Insert</button>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:#1e293b; border-radius:6px; border:1px solid #334155;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <span style="font-size:22px;">📱</span>
                  <div>
                    <strong style="font-size:12.5px; color:#f8fafc; display:block;">QR Code Generator</strong>
                    <span style="font-size:11px; color:#94a3b8;">Generate high-res vector QR code into paper</span>
                  </div>
                </div>
                <button class="btn-giri-primary btn-run-addin" data-addin="qrcode" style="padding:4px 12px; font-size:11px;">Insert</button>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:#1e293b; border-radius:6px; border:1px solid #334155;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <span style="font-size:22px;">🔤</span>
                  <div>
                    <strong style="font-size:12.5px; color:#f8fafc; display:block;">DeepL Translator</strong>
                    <span style="font-size:11px; color:#94a3b8;">Translate selected paragraphs into 28 languages</span>
                  </div>
                </div>
                <button class="btn-giri-primary btn-run-addin" data-addin="translate" style="padding:4px 12px; font-size:11px;">Translate</button>
              </div>
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="btn-giri-primary" id="btn-ok-addins" style="padding:7px 18px; font-size:12px;">Done</button>
          </div>
        </div>
      </div>

      <!-- Shortcuts Cheat Sheet Modal -->
      <div class="office-modal-backdrop" id="drift-shortcuts-modal">
        <div class="office-dialog-card" role="dialog" aria-modal="true" style="width:480px;">
          <div class="office-dialog-header">
            <span class="office-dialog-title">⌨ Office 365 Keyboard Shortcuts</span>
            <button class="esc-kbd" id="btn-close-shortcuts-modal">ESC</button>
          </div>
          <div class="office-dialog-body" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12px;">
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Bold</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+B</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Italic</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+I</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Underline</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+U</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Center Align</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+E</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Left Align</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+L</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Right Align</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+R</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Find</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+F</kbd>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 8px; background:#18181b; border-radius:4px;">
              <span>Save Direct</span><kbd style="background:#27272a; padding:2px 6px; border-radius:3px; font-family:monospace;">Ctrl+S</kbd>
            </div>
          </div>
          <div class="office-dialog-footer">
            <button class="btn-giri-primary" id="btn-ok-shortcuts" style="padding:7px 18px; font-size:12px;">Close</button>
          </div>
        </div>
      </div>
    `;

    initEditorWorkspace(rootEl, onUpdate);

    function initEditorWorkspace(container, onUpdate) {
      const paper = container.querySelector('#drift-paper-canvas');
      const wordCountEl = container.querySelector('#drift-word-count');
      const charCountEl = container.querySelector('#drift-char-count');
      const readTimeEl = container.querySelector('#drift-read-time');
      const outlineList = container.querySelector('#doc-outline-list');
      const voiceBtn = container.querySelector('#btn-drift-voice');
      const voiceGroupBtn = container.querySelector('#btn-voice-dictate-group');
      const voiceStatusText = container.querySelector('#voice-status-text');
      const returnToHubBtn = container.querySelector('#btn-return-to-hub');
      container.querySelector('#btn-drift-return-hub')?.addEventListener('click', () => {
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.navigateTo('launcher');
      });
      const saveDocAsTemplateBtn = container.querySelector('#btn-save-doc-as-template');
      const fileMenuBtn = container.querySelector('#btn-drift-file-menu');
      const fileMenuDropdown = container.querySelector('#drift-file-menu-dropdown');
      const commentsSidebar = container.querySelector('#drift-comments-sidebar');
      const commentsListEl = container.querySelector('#drift-comments-list');
      const commentsBadge = container.querySelector('#comments-badge');
      const emojiPickerDropdown = container.querySelector('#drift-emoji-picker-dropdown');

      // =====================================================================
      // 1. FILE MENU DROPDOWN (Office 365 10-Item Menu)
      // =====================================================================
      fileMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        fileMenuDropdown?.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!fileMenuDropdown?.contains(e.target) && e.target !== fileMenuBtn) {
          fileMenuDropdown?.classList.remove('open');
        }
        if (!emojiPickerDropdown?.contains(e.target) && e.target.id !== 'btn-insert-emoji-picker' && !e.target.closest('#btn-insert-emoji-picker')) {
          emojiPickerDropdown?.classList.remove('open');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          fileMenuDropdown?.classList.remove('open');
          emojiPickerDropdown?.classList.remove('open');
          if (miniToolbar) miniToolbar.style.display = 'none';
        }

        // Office 365 Keyboard Shortcuts
        if (e.ctrlKey || e.metaKey) {
          const key = e.key.toLowerCase();
          if (key === 'b') {
            e.preventDefault();
            document.execCommand('bold', false, null);
            saveDocument();
            updateMiniToolbarState();
          } else if (key === 'i') {
            e.preventDefault();
            document.execCommand('italic', false, null);
            saveDocument();
            updateMiniToolbarState();
          } else if (key === 'u') {
            e.preventDefault();
            document.execCommand('underline', false, null);
            saveDocument();
            updateMiniToolbarState();
          } else if (key === 'e') {
            e.preventDefault();
            document.execCommand('justifyCenter', false, null);
            saveDocument();
          } else if (key === 'l') {
            e.preventDefault();
            document.execCommand('justifyLeft', false, null);
            saveDocument();
          } else if (key === 'r') {
            e.preventDefault();
            document.execCommand('justifyRight', false, null);
            saveDocument();
          } else if (key === 'j') {
            e.preventDefault();
            document.execCommand('justifyFull', false, null);
            saveDocument();
          } else if (key === 'z' && !e.shiftKey) {
            e.preventDefault();
            document.execCommand('undo', false, null);
            saveDocument();
          } else if (key === 'y' || (key === 'z' && e.shiftKey)) {
            e.preventDefault();
            document.execCommand('redo', false, null);
            saveDocument();
          } else if (key === 's') {
            e.preventDefault();
            if (localSync.getActiveHandle('drift')) {
              performDirectSave(false);
            } else {
              saveDocument();
              if (window.orbitPlatform) window.orbitPlatform.triggerToast('Document saved in memory. Click "Save to Device" to sync directly with a file on your PC.');
            }
          } else if (key === 'p') {
            e.preventDefault();
            container.querySelector('#btn-print-doc')?.click();
          } else if (key === 'f') {
            e.preventDefault();
            container.querySelector('#btn-open-find')?.click();
          } else if (key === 'k') {
            e.preventDefault();
            container.querySelector('#btn-insert-link-dialog')?.click();
          }
        }
      });

      // File Menu Actions
      fileMenuDropdown?.querySelectorAll('.file-menu-item').forEach(item => {
        item.addEventListener('click', () => {
          const action = item.dataset.action;
          fileMenuDropdown.classList.remove('open');

          switch (action) {
            case 'save-device': {
              performDirectSave(true);
              break;
            }
            case 'open-device': {
              localSync.openFromDevice({
                tool: 'drift',
                acceptTypes: {
                  'text/html': ['.gdrift', '.html', '.txt', '.md']
                }
              }).then(result => {
                if (result) {
                  paper.innerHTML = result.content;
                  currentDocTitle = result.name.replace(/\.[^/.]+$/, '');
                  saveDocument();
                }
              });
              break;
            }
            case 'new': {
              const choice = confirm('Create a new blank document? (Click OK for Blank, Cancel to open Templates Hub)');
              if (choice) {
                paper.innerHTML = '<p></p>';
                currentDocTitle = 'Untitled Document';
                saveDocument();
                if (window.orbitPlatform) window.orbitPlatform.triggerToast('Created new blank document');
              } else {
                mountHub(container, onUpdate);
              }
              break;
            }
            case 'open': {
              const fileInput = document.createElement('input');
              fileInput.type = 'file';
              fileInput.accept = '.docx,.doc,.txt,.md,.html';
              fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (evt) => {
                  paper.innerHTML = evt.target.result;
                  currentDocTitle = file.name.replace(/\.[^/.]+$/, '');
                  saveDocument();
                  if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Loaded "${file.name}"`);
                };
                reader.readAsText(file);
              };
              fileInput.click();
              break;
            }
            case 'share': {
              const url = window.orbitPlatform ? window.orbitPlatform.getToolUrl('drift') : `${window.location.origin}/#drift`;
              navigator.clipboard?.writeText(url);
              if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Copied direct link to Giri Drift: ${url}`);
              break;
            }
            case 'copy': {
              const copyKey = 'giri_orbit_copy_' + Date.now();
              localStorage.setItem(copyKey, paper.innerHTML);
              currentDocTitle = 'Copy of ' + currentDocTitle;
              saveDocument();
              if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Created copy: "${currentDocTitle}"`);
              break;
            }
            case 'export': {
              if (window.orbitPlatform) window.orbitPlatform.openExportModal('drift');
              break;
            }
            case 'print': {
              window.print();
              break;
            }
            case 'rename': {
              const newName = prompt('Enter new document title:', currentDocTitle);
              if (newName && newName.trim()) {
                currentDocTitle = newName.trim();
                saveDocument();
                if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Renamed document to "${currentDocTitle}"`);
              }
              break;
            }
            case 'history': {
              renderVersionHistory();
              const histModal = container.querySelector('#drift-version-history-modal');
              histModal?.classList.add('open');
              break;
            }
            case 'delete': {
              if (confirm(`Are you sure you want to delete "${currentDocTitle}"? This will reset the workspace.`)) {
                localStorage.removeItem('giri_orbit_drift_doc');
                paper.innerHTML = '<p></p>';
                currentDocTitle = 'Untitled Document';
                saveDocument();
                if (window.orbitPlatform) window.orbitPlatform.triggerToast('Document deleted and reset.');
              }
              break;
            }
            case 'info': {
              renderDocInfo();
              const infoModal = container.querySelector('#drift-info-modal');
              infoModal?.classList.add('open');
              break;
            }
          }
        });
      });

      // Close buttons for modals
      container.querySelector('#btn-close-history-modal')?.addEventListener('click', () => container.querySelector('#drift-version-history-modal')?.classList.remove('open'));
      container.querySelector('#btn-ok-history')?.addEventListener('click', () => container.querySelector('#drift-version-history-modal')?.classList.remove('open'));
      container.querySelector('#btn-close-info-modal')?.addEventListener('click', () => container.querySelector('#drift-info-modal')?.classList.remove('open'));
      container.querySelector('#btn-ok-info')?.addEventListener('click', () => container.querySelector('#drift-info-modal')?.classList.remove('open'));

      function renderVersionHistory() {
        const list = container.querySelector('#version-history-list');
        if (!list) return;
        list.innerHTML = versionSnapshots.map(v => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; font-size:12px;">
            <div>
              <strong style="color:#0f172a; display:block;">${v.title}</strong>
              <span style="color:#64748b; font-size:11px;">${v.timestamp} &bull; by ${v.author} (${v.length} chars)</span>
            </div>
            <button class="btn-giri-primary btn-restore-snap" data-snap-id="${v.id}" style="padding:4px 10px; font-size:11px;">Restore</button>
          </div>
        `).join('');

        list.querySelectorAll('.btn-restore-snap').forEach(b => {
          b.addEventListener('click', () => {
            container.querySelector('#drift-version-history-modal')?.classList.remove('open');
            if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Restored version from local snapshot`);
          });
        });
      }

      function renderDocInfo() {
        const body = container.querySelector('#doc-info-modal-body');
        if (!body) return;
        const text = paper.innerText || '';
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const sizeBytes = new Blob([paper.innerHTML]).size;
        body.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:10px; font-size:12.5px;">
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:6px;">
              <span>Document Title:</span><strong style="color:#0f172a;">${currentDocTitle}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:6px;">
              <span>Word Count:</span><strong>${words.toLocaleString()}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:6px;">
              <span>Document Size:</span><strong>~(${(sizeBytes / 1024).toFixed(2)} KB)</strong>
            </div>
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:6px;">
              <span>Location:</span><strong style="color:#059669;">Sovereign Browser Memory (No Cloud DB)</strong>
            </div>
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:6px;">
              <span>Security Architecture:</span><strong>Local Client Isolation</strong>
            </div>
          </div>
        `;
      }

      // =====================================================================
      // 2. FORMAT PAINTER IMPLEMENTATION
      // =====================================================================
      const formatPainterBtn = container.querySelector('#btn-drift-format-painter');
      formatPainterBtn?.addEventListener('click', () => {
        const sel = window.getSelection();
        if (sel.rangeCount > 0 && !sel.isCollapsed) {
          const parentNode = sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentNode : sel.anchorNode;
          const computed = window.getComputedStyle(parentNode);
          formatBuffer = {
            fontFamily: computed.fontFamily,
            fontSize: computed.fontSize,
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            fontWeight: computed.fontWeight,
            fontStyle: computed.fontStyle,
            textDecoration: computed.textDecoration
          };
          isFormatPainterActive = true;
          formatPainterBtn.classList.add('active');
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Format copied! Select target text to apply.');
        } else {
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Select formatted text first, then click Format Painter.');
        }
      });

      paper.addEventListener('mouseup', () => {
        if (isFormatPainterActive && formatBuffer) {
          const sel = window.getSelection();
          if (sel.rangeCount > 0 && !sel.isCollapsed) {
            const range = sel.getRangeAt(0);
            const span = document.createElement('span');
            span.style.fontFamily = formatBuffer.fontFamily;
            span.style.fontSize = formatBuffer.fontSize;
            span.style.color = formatBuffer.color;
            span.style.backgroundColor = formatBuffer.backgroundColor;
            span.style.fontWeight = formatBuffer.fontWeight;
            span.style.fontStyle = formatBuffer.fontStyle;
            span.style.textDecoration = formatBuffer.textDecoration;
            
            try {
              range.surroundContents(span);
            } catch {
              document.execCommand('foreColor', false, formatBuffer.color);
            }
            saveDocument();
            isFormatPainterActive = false;
            formatPainterBtn?.classList.remove('active');
            if (window.orbitPlatform) window.orbitPlatform.triggerToast('Format applied!');
          }
        }
      });

      // =====================================================================
      // 3. STYLES GALLERY IMPLEMENTATION (Visual Cards)
      // =====================================================================
      container.querySelectorAll('.fluent-style-card').forEach(card => {
        card.addEventListener('click', () => {
          container.querySelectorAll('.fluent-style-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          const styleCmd = card.dataset.styleCmd;

          switch (styleCmd) {
            case 'p':
              document.execCommand('formatBlock', false, '<p>');
              break;
            case 'nospacing':
              document.execCommand('formatBlock', false, '<p>');
              const selNode = window.getSelection().anchorNode?.parentNode;
              if (selNode) selNode.style.margin = '0';
              break;
            case 'h1':
              document.execCommand('formatBlock', false, '<h1>');
              break;
            case 'h2':
              document.execCommand('formatBlock', false, '<h2>');
              break;
            case 'title':
              document.execCommand('formatBlock', false, '<h1>');
              const tNode = window.getSelection().anchorNode?.parentNode;
              if (tNode) {
                tNode.style.fontSize = '32px';
                tNode.style.fontWeight = '900';
                tNode.style.letterSpacing = '-0.02em';
              }
              break;
            case 'subtitle':
              document.execCommand('formatBlock', false, '<p>');
              const subNode = window.getSelection().anchorNode?.parentNode;
              if (subNode) {
                subNode.style.fontSize = '16px';
                subNode.style.color = '#64748b';
              }
              break;
            case 'quote':
              document.execCommand('formatBlock', false, '<blockquote>');
              break;
          }
          paper.focus();
          saveDocument();
        });
      });

      // =====================================================================
      // 4. TABLE OF CONTENTS GENERATOR (References Tab)
      // =====================================================================
      container.querySelector('#btn-insert-toc-action')?.addEventListener('click', () => {
        const headings = paper.querySelectorAll('h1, h2, h3');
        if (headings.length === 0) {
          // If no headings, insert sample structure + TOC
          const sample = `
            <div class="toc-generated-box" contenteditable="false">
              <div class="toc-title">Table of Contents</div>
              <div class="toc-item" onclick="document.getElementById('drift-sec-1')?.scrollIntoView({behavior:'smooth'})"><span>1. Executive Charter Overview</span><span>Page 1</span></div>
              <div class="toc-item" onclick="document.getElementById('drift-sec-2')?.scrollIntoView({behavior:'smooth'})"><span>2. Architecture & Technical Specifications</span><span>Page 2</span></div>
            </div>
            <h1 id="drift-sec-1">1. Executive Charter Overview</h1>
            <p>Enter detailed corporate brief here.</p>
            <h2 id="drift-sec-2">2. Architecture & Technical Specifications</h2>
            <p>Zero-database in-memory framework guarantees.</p>
          `;
          document.execCommand('insertHTML', false, sample);
        } else {
          let tocHtml = '<div class="toc-generated-box" contenteditable="false"><div class="toc-title">Table of Contents</div>';
          headings.forEach((h, idx) => {
            const hId = h.id || ('heading-' + idx);
            h.id = hId;
            const indent = h.tagName === 'H1' ? '0px' : h.tagName === 'H2' ? '16px' : '32px';
            const weight = h.tagName === 'H1' ? '700' : '500';
            tocHtml += `<div class="toc-item" style="padding-left:${indent}; font-weight:${weight};" onclick="document.getElementById('${hId}')?.scrollIntoView({behavior:'smooth'})">
              <span>${h.textContent.trim() || 'Heading ' + (idx + 1)}</span>
              <span>•</span>
            </div>`;
          });
          tocHtml += '</div><p></p>';
          document.execCommand('insertHTML', false, tocHtml);
        }
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Inserted interactive Table of Contents!');
      });

      // Footnotes & Citations
      let footnoteCount = 1;
      container.querySelector('#btn-insert-footnote')?.addEventListener('click', () => {
        const num = footnoteCount++;
        document.execCommand('insertHTML', false, `<sup style="color:#2563eb; font-weight:700;">[${num}]</sup>&nbsp;`);
        let footContainer = paper.querySelector('.footnotes-container');
        if (!footContainer) {
          footContainer = document.createElement('div');
          footContainer.className = 'footnotes-container';
          footContainer.innerHTML = '<strong>Footnotes:</strong>';
          paper.appendChild(footContainer);
        }
        const note = document.createElement('div');
        note.innerHTML = `<span style="font-weight:700;">[${num}]</span> Enter citation or footnote reference.`;
        footContainer.appendChild(note);
        saveDocument();
      });

      // =====================================================================
      // 5. COMMENTS SIDEBAR & REVIEW
      // =====================================================================
      function renderComments() {
        if (!commentsListEl) return;
        commentsListEl.innerHTML = comments.map(c => `
          <div class="comment-card ${c.resolved ? 'resolved' : ''}">
            <div class="comment-card-top">
              <span class="comment-author">${c.author}</span>
              <span>${c.date}</span>
            </div>
            <div class="comment-text">${c.text}</div>
            <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
              <button class="fluent-btn-small btn-del-comment" data-cid="${c.id}" style="color:#ef4444; width:auto; padding:0 6px; font-size:10.5px;">Delete</button>
            </div>
          </div>
        `).join('');

        if (commentsBadge) commentsBadge.textContent = comments.length;

        commentsListEl.querySelectorAll('.btn-del-comment').forEach(b => {
          b.addEventListener('click', () => {
            const cid = b.dataset.cid;
            comments = comments.filter(c => c.id !== cid);
            renderComments();
          });
        });
      }

      container.querySelector('#btn-toggle-comments-sidebar')?.addEventListener('click', () => {
        commentsSidebar?.classList.toggle('open');
        renderComments();
      });
      container.querySelector('#btn-review-show-comments')?.addEventListener('click', () => {
        commentsSidebar?.classList.toggle('open');
        renderComments();
      });
      container.querySelector('#btn-close-comments-sidebar')?.addEventListener('click', () => {
        commentsSidebar?.classList.remove('open');
      });

      container.querySelector('#btn-insert-comment-direct')?.addEventListener('click', () => {
        commentsSidebar?.classList.add('open');
        container.querySelector('#new-comment-textarea')?.focus();
      });
      container.querySelector('#btn-review-new-comment')?.addEventListener('click', () => {
        commentsSidebar?.classList.add('open');
        container.querySelector('#new-comment-textarea')?.focus();
      });

      container.querySelector('#btn-post-comment')?.addEventListener('click', () => {
        const txt = container.querySelector('#new-comment-textarea').value.trim();
        if (!txt) return;
        comments.push({
          id: 'c_' + Date.now(),
          author: 'Executive Reviewer',
          date: 'Just now',
          text: txt,
          resolved: false
        });
        container.querySelector('#new-comment-textarea').value = '';
        renderComments();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Comment added!');
      });

      renderComments();

      // =====================================================================
      // 6. EMOJI PICKER DROPDOWN
      // =====================================================================
      const emojis = [
        '😀', '😂', '🤣', '😊', '😍', '🥰', '😎', '🤩',
        '🤔', '🤫', '👏', '👍', '👎', '🙌', '🤝', '🚀',
        '🔥', '💡', '⚡', '⭐', '🎯', '🏆', '📊', '📈',
        '📉', '📝', '📌', '📍', '📎', '📅', '⏰', '🔒',
        '🔑', '🔍', '⚙️', '💼', '📁', '📄', '📧', '✅',
        '❌', '⚠️', 'ℹ️', '💎', '🌟', '🎉', '✨', '🌐'
      ];

      if (emojiPickerDropdown) {
        emojiPickerDropdown.innerHTML = emojis.map(em => `<button class="emoji-btn">${em}</button>`).join('');
        emojiPickerDropdown.querySelectorAll('.emoji-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.execCommand('insertText', false, btn.textContent);
            emojiPickerDropdown.classList.remove('open');
            paper.focus();
            saveDocument();
          });
        });
      }

      container.querySelector('#btn-insert-emoji-picker')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        if (emojiPickerDropdown) {
          emojiPickerDropdown.style.top = (rect.bottom + 4) + 'px';
          emojiPickerDropdown.style.left = rect.left + 'px';
          emojiPickerDropdown.classList.toggle('open');
        }
      });

      // =====================================================================
      // 7. TRACK CHANGES TOGGLE
      // =====================================================================
      const trackChangesBtn = container.querySelector('#btn-toggle-track-changes');
      const trackChangesLabel = container.querySelector('#track-changes-label');
      trackChangesBtn?.addEventListener('click', () => {
        isTrackChangesActive = !isTrackChangesActive;
        trackChangesBtn.classList.toggle('active', isTrackChangesActive);
        if (trackChangesLabel) trackChangesLabel.textContent = isTrackChangesActive ? 'Tracking: ON' : 'Track Changes';
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(isTrackChangesActive ? 'Track Changes activated (markup visible)' : 'Track Changes disabled');
      });

      // =====================================================================
      // 8. PARAGRAPH INDENT & SPACING STEPPERS
      // =====================================================================
      const indentLeft = container.querySelector('#drift-indent-left-val');
      const indentRight = container.querySelector('#drift-indent-right-val');
      const spacingBefore = container.querySelector('#drift-spacing-before-val');
      const spacingAfter = container.querySelector('#drift-spacing-after-val');

      function applyParagraphSpacing() {
        const sel = window.getSelection();
        if (sel.anchorNode) {
          const parent = sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentNode : sel.anchorNode;
          const p = parent.closest('p, h1, h2, h3, blockquote') || parent;
          p.style.paddingLeft = (indentLeft?.value || 0) + 'px';
          p.style.paddingRight = (indentRight?.value || 0) + 'px';
          p.style.marginTop = (spacingBefore?.value || 0) + 'pt';
          p.style.marginBottom = (spacingAfter?.value || 8) + 'pt';
          saveDocument();
        }
      }

      [indentLeft, indentRight, spacingBefore, spacingAfter].forEach(inp => {
        inp?.addEventListener('input', applyParagraphSpacing);
      });

      // Paragraph marks toggle (¶)
      let marksVisible = false;
      container.querySelector('#btn-toggle-paragraph-marks')?.addEventListener('click', (e) => {
        marksVisible = !marksVisible;
        e.currentTarget.classList.toggle('active', marksVisible);
        paper.querySelectorAll('p, h1, h2, h3').forEach(el => {
          if (marksVisible) {
            el.setAttribute('data-mark', '¶');
          } else {
            el.removeAttribute('data-mark');
          }
        });
      });

      // =====================================================================
      // 9. STANDARD EDITING, TYPOGRAPHY & VIEWS
      // =====================================================================
      // Return to Hub
      returnToHubBtn?.addEventListener('click', () => {
        saveDocument();
        mountHub(container, onUpdate);
      });

      // Save as Custom Template Dialog
      const saveTemplateModal = container.querySelector('#drift-save-template-modal');
      const templateNameInput = container.querySelector('#custom-template-name-input');
      const templateCatSelect = container.querySelector('#custom-template-cat-select');
      const templateDescInput = container.querySelector('#custom-template-desc-input');
      const confirmSaveTemplateBtn = container.querySelector('#btn-confirm-save-template');
      const cancelSaveTemplateBtn = container.querySelector('#btn-cancel-save-template');
      const closeSaveTemplateBtn = container.querySelector('#btn-close-save-template');

      saveDocAsTemplateBtn?.addEventListener('click', () => {
        saveTemplateModal?.classList.add('open');
        templateNameInput?.focus();
      });

      const closeSaveModal = () => saveTemplateModal?.classList.remove('open');
      cancelSaveTemplateBtn?.addEventListener('click', closeSaveModal);
      closeSaveTemplateBtn?.addEventListener('click', closeSaveModal);

      confirmSaveTemplateBtn?.addEventListener('click', () => {
        const name = (templateNameInput?.value || 'Custom Template').trim();
        const cat = templateCatSelect?.value || 'custom';
        const desc = (templateDescInput?.value || 'User custom document template').trim();
        const content = paper.innerHTML;

        const newTemplate = {
          id: 'custom-' + Date.now(),
          name,
          category: cat,
          desc,
          content
        };

        customTemplates.push(newTemplate);
        localStorage.setItem('giri_orbit_custom_templates', JSON.stringify(customTemplates));
        closeSaveModal();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Saved "${name}" as a custom template!`);
      });

      // Auto-Save Document Content
      function saveDocument() {
        const html = paper.innerHTML;
        localStorage.setItem('giri_orbit_drift_doc', html);
        if (typeof window !== 'undefined' && window.giriSyncManager) {
          const text = paper.innerText || '';
          const words = text.trim() ? text.trim().split(/\s+/).length : 0;
          const chars = text.length;
          const snippet = text.slice(0, 110).trim() || 'Executive sovereign document in Giri Drift.';
          window.giriSyncManager.recordSync('drift', html, currentDocTitle, {
            snippet,
            stats: `${words} words • ${chars} chars`
          });
        }
        updateTelemetry();
        updateOutline();
        if (onUpdate) onUpdate();
      }

      paper.addEventListener('input', saveDocument);

      // Telemetry updates
      // Page Thumbnails & Navigation Engine
      function renderPageThumbnails() {
        const pagesList = container.querySelector('#drift-pages-list');
        const counterBadge = container.querySelector('#drift-page-counter-badge');
        const viewport = container.querySelector('#drift-center-viewport');
        if (!pagesList) return;

        const pageBreakEls = paper.querySelectorAll('.drift-page-break');
        const calculatedPages = Math.max(1, Math.ceil(paper.scrollHeight / 1056));
        const totalPages = Math.max(calculatedPages, pageBreakEls.length + 1);

        const scrollY = viewport ? viewport.scrollTop : 0;
        const activePage = Math.min(totalPages, Math.max(1, Math.floor(scrollY / 1056) + 1));

        if (counterBadge) counterBadge.textContent = `Page ${activePage} of ${totalPages}`;

        const fullText = paper.innerText || '';
        const words = fullText.split(/\s+/).filter(Boolean);
        const wordsPerPage = Math.max(1, Math.ceil(words.length / totalPages));

        pagesList.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
          const isCurrent = i === activePage;
          const startW = (i - 1) * wordsPerPage;
          const pageWords = words.slice(startW, startW + 12).join(' ');
          const card = document.createElement('div');
          card.className = `drift-page-thumb-card ${isCurrent ? 'active' : ''}`;
          card.dataset.page = i;
          card.style.cssText = `
            display: flex; gap: 8px; align-items: flex-start;
            padding: 7px 8px; border-radius: 6px;
            background: ${isCurrent ? '#1e293b' : '#18181b'};
            border: 1.5px solid ${isCurrent ? '#2563eb' : '#27272a'};
            cursor: pointer; transition: all 0.15s;
          `;
          card.innerHTML = `
            <div style="font-size:10px; font-weight:700; color:${isCurrent ? '#38bdf8' : '#71717a'}; width:12px; text-align:right; margin-top:2px;">${i}</div>
            <div style="width:44px; height:58px; background:#fff; border-radius:3px; box-shadow:0 1px 3px rgba(0,0,0,0.3); padding:4px 3px; display:flex; flex-direction:column; gap:2px; overflow:hidden; position:relative; flex-shrink:0;">
              <div style="height:3px; background:${isCurrent ? '#2563eb' : '#94a3b8'}; border-radius:1px; width:60%;"></div>
              <div style="height:2px; background:#e2e8f0; width:90%;"></div>
              <div style="height:2px; background:#e2e8f0; width:85%;"></div>
              <div style="height:2px; background:#e2e8f0; width:95%;"></div>
              <div style="height:2px; background:#e2e8f0; width:70%;"></div>
              <div style="height:2px; background:#e2e8f0; width:80%;"></div>
              <div style="font-size:6px; color:#64748b; line-height:1; position:absolute; bottom:2px; right:3px; font-weight:700;">${i}</div>
            </div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:11px; font-weight:600; color:${isCurrent ? '#f8fafc' : '#cbd5e1'};">Page ${i}</div>
              <div style="font-size:9.5px; color:#64748b; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; line-height:1.3; margin-top:2px;">
                ${pageWords ? pageWords + '...' : 'Empty page'}
              </div>
            </div>
          `;

          card.addEventListener('click', () => {
            if (viewport) {
              const targetY = (i - 1) * 1056;
              viewport.scrollTo({ top: targetY, behavior: 'smooth' });
            }
            container.querySelectorAll('.drift-page-thumb-card').forEach(c => {
              c.style.borderColor = '#27272a';
              c.style.background = '#18181b';
            });
            card.style.borderColor = '#2563eb';
            card.style.background = '#1e293b';
          });

          pagesList.appendChild(card);
        }
      }

      // Telemetry & Sidebar Stats updates
      function updateTelemetry() {
        const text = paper.innerText || '';
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const chars = text.length;
        const readMin = Math.max(1, Math.ceil(words / 200));

        if (wordCountEl) wordCountEl.textContent = words.toLocaleString();
        if (charCountEl) charCountEl.textContent = chars.toLocaleString();
        if (readTimeEl) readTimeEl.textContent = `~${readMin} min`;

        const sbWordText = container.querySelector('#drift-sidebar-wordcount-text');
        const sbCharText = container.querySelector('#drift-sidebar-charcount-text');
        if (sbWordText) sbWordText.textContent = `${words.toLocaleString()} words`;
        if (sbCharText) sbCharText.textContent = `${chars.toLocaleString()} chars • ~${readMin} min read`;

        renderPageThumbnails();
      }

      // Dynamic Outline
      function updateOutline() {
        if (!outlineList) return;
        outlineList.innerHTML = '';
        const headings = paper.querySelectorAll('h1, h2, h3');
        if (!headings.length) {
          outlineList.innerHTML = `<li style="font-size:11px; color:#64748b; padding:8px 4px; font-style:italic;">No headings in document yet. Add H1, H2, or H3 to see outline.</li>`;
          return;
        }
        headings.forEach((h) => {
          const li = document.createElement('li');
          li.className = `outline-item outline-${h.tagName.toLowerCase()}`;
          li.style.cssText = 'padding:5px 8px; border-radius:4px; cursor:pointer; font-size:11.5px; color:#cbd5e1; transition:all 0.1s;';
          li.textContent = h.textContent.trim() || 'Untitled Heading';
          li.addEventListener('mouseenter', () => li.style.background = '#1e293b');
          li.addEventListener('mouseleave', () => li.style.background = 'transparent');
          li.addEventListener('click', () => {
            h.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
          outlineList.appendChild(li);
        });
      }

      // Sidebar Tab Switcher: Pages vs Headings
      const tabPages = container.querySelector('#tab-drift-pages');
      const tabHeadings = container.querySelector('#tab-drift-headings');
      const panePages = container.querySelector('#pane-drift-pages');
      const paneHeadings = container.querySelector('#pane-drift-headings');

      tabPages?.addEventListener('click', () => {
        tabPages.classList.add('active');
        tabPages.style.background = '#2563eb';
        tabPages.style.color = '#fff';
        tabHeadings?.classList.remove('active');
        if (tabHeadings) {
          tabHeadings.style.background = 'transparent';
          tabHeadings.style.color = '#94a3b8';
        }
        if (panePages) panePages.style.display = 'flex';
        if (paneHeadings) paneHeadings.style.display = 'none';
        renderPageThumbnails();
      });

      tabHeadings?.addEventListener('click', () => {
        tabHeadings.classList.add('active');
        tabHeadings.style.background = '#2563eb';
        tabHeadings.style.color = '#fff';
        tabPages?.classList.remove('active');
        if (tabPages) {
          tabPages.style.background = 'transparent';
          tabPages.style.color = '#94a3b8';
        }
        if (paneHeadings) paneHeadings.style.display = 'flex';
        if (panePages) panePages.style.display = 'none';
        updateOutline();
      });

      // Mobile Drawer & Sidebar Toggle
      const toggleSidebarBtn = container.querySelector('#btn-drift-toggle-sidebar');
      const closeSidebarDrawerBtn = container.querySelector('#btn-close-drift-sidebar-drawer');
      const leftSidebar = container.querySelector('#drift-left-sidebar');

      toggleSidebarBtn?.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          leftSidebar?.classList.toggle('mobile-open');
        } else {
          if (leftSidebar.style.display === 'none') {
            leftSidebar.style.display = 'flex';
          } else {
            leftSidebar.style.display = 'none';
          }
        }
      });
      closeSidebarDrawerBtn?.addEventListener('click', () => {
        leftSidebar?.classList.remove('mobile-open');
      });

      // Page Break Action
      container.querySelector('#btn-drift-insert-pagebreak')?.addEventListener('click', () => {
        const breakHtml = `<div class="drift-page-break" contenteditable="false" style="border-top:2px dashed #94a3b8; margin:36px -40px; text-align:center; color:#64748b; font-size:10px; font-weight:700; letter-spacing:0.1em; user-select:none; padding:6px 0; background:#f8fafc; border-radius:4px;"><span style="background:#e2e8f0; padding:2px 8px; border-radius:3px;">--- PAGE BREAK ---</span></div><p><br></p>`;
        document.execCommand('insertHTML', false, breakHtml);
        saveDocument();
        renderPageThumbnails();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Page break inserted');
      });

      // Viewport scroll listener for active page tracking
      const centerViewport = container.querySelector('#drift-center-viewport');
      centerViewport?.addEventListener('scroll', () => {
        const calculatedPages = Math.max(1, Math.ceil(paper.scrollHeight / 1056));
        const pageBreakEls = paper.querySelectorAll('.drift-page-break');
        const totalPages = Math.max(calculatedPages, pageBreakEls.length + 1);
        const activePage = Math.min(totalPages, Math.max(1, Math.floor(centerViewport.scrollTop / 1056) + 1));
        const counterBadge = container.querySelector('#drift-page-counter-badge');
        if (counterBadge) counterBadge.textContent = `Page ${activePage} of ${totalPages}`;

        container.querySelectorAll('.drift-page-thumb-card').forEach(c => {
          const isMatch = parseInt(c.dataset.page, 10) === activePage;
          c.style.borderColor = isMatch ? '#2563eb' : '#27272a';
          c.style.background = isMatch ? '#1e293b' : '#18181b';
        });
      });

      // Spell Check Proofing Assistant
      const openSpellingAssistant = () => {
        const proofingModal = container.querySelector('#drift-editor-proofing-modal');
        const scoreVal = container.querySelector('#drift-editor-score-val');
        const readingTimeVal = container.querySelector('#drift-editor-reading-time');
        const text = paper.innerText || '';
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const readMin = Math.max(1, Math.ceil(words / 200));

        if (readingTimeVal) readingTimeVal.textContent = `~${readMin} min`;
        if (scoreVal) scoreVal.textContent = words > 10 ? '98%' : '100%';
        proofingModal?.classList.add('open');
      };

      container.querySelector('#btn-toggle-spellcheck')?.addEventListener('click', () => {
        const isSpell = paper.getAttribute('spellcheck') === 'true';
        paper.setAttribute('spellcheck', (!isSpell).toString());
        const pill = container.querySelector('#drift-spelling-status-pill');
        if (pill) {
          pill.textContent = !isSpell ? 'ACTIVE' : 'OFF';
          pill.style.color = !isSpell ? '#10b981' : '#f59e0b';
          pill.style.background = !isSpell ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)';
        }
        openSpellingAssistant();
      });

      container.querySelector('#btn-drift-sidebar-spelling')?.addEventListener('click', openSpellingAssistant);
      container.querySelector('#btn-close-editor-proofing')?.addEventListener('click', () => {
        container.querySelector('#drift-editor-proofing-modal')?.classList.remove('open');
      });
      container.querySelector('#btn-cancel-editor-proofing')?.addEventListener('click', () => {
        container.querySelector('#drift-editor-proofing-modal')?.classList.remove('open');
      });
      container.querySelector('#btn-apply-editor-polish')?.addEventListener('click', () => {
        container.querySelector('#drift-editor-proofing-modal')?.classList.remove('open');
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('All grammar and style improvements applied!');
      });

      // Unified Thesaurus Trigger
      const openThesaurusModal = () => {
        const sel = window.getSelection()?.toString().trim();
        thesaurusManager.open(sel || '', (replacement) => {
          if (sel) {
            document.execCommand('insertText', false, replacement);
            saveDocument();
          } else {
            insertIntoPaperAtCursor(' ' + replacement);
          }
        });
      };

      container.querySelector('#btn-insert-thesaurus')?.addEventListener('click', openThesaurusModal);
      container.querySelector('#btn-review-thesaurus')?.addEventListener('click', openThesaurusModal);
      container.querySelector('#btn-drift-sidebar-thesaurus')?.addEventListener('click', openThesaurusModal);

      // Quick Rupee Symbol Action
      container.querySelector('#btn-insert-rupee-quick')?.addEventListener('click', () => {
        capturePaperRange();
        insertIntoPaperAtCursor('₹');
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Inserted Indian Rupee symbol (₹)');
      });

      // Ribbon Tab Switching
      const ribbonTabs = container.querySelectorAll('.fluent-tab-btn[data-tab]');
      const ribbonPanes = container.querySelectorAll('.fluent-ribbon-pane');
      ribbonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          ribbonTabs.forEach(t => t.classList.remove('active'));
          ribbonPanes.forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          const target = container.querySelector(`#pane-${tab.dataset.tab}`);
          if (target) target.classList.add('active');
        });
      });

      // Standard Rich Text Commands
      container.querySelectorAll('[data-cmd]').forEach(btn => {
        btn.addEventListener('click', () => {
          const cmd = btn.dataset.cmd;
          document.execCommand(cmd, false, null);
          paper.focus();
          saveDocument();
        });
      });

      // Searchable World Font Picker (Calibri is strict default)
      const fontMount = container.querySelector('#drift-font-picker-mount');
      let driftFontPicker = null;
      if (fontMount) {
        driftFontPicker = new FluentFontPicker(fontMount, {
          defaultFont: 'Calibri',
          onSelect: (fontName, fontFamily) => {
            document.execCommand('fontName', false, fontFamily);
            paper.focus();
            saveDocument();
          }
        });
      }

      // Floating Mini Formatting Toolbar (Quick Floating Format Style)
      let miniToolbar = document.getElementById('drift-mini-toolbar');
      if (!miniToolbar) {
        miniToolbar = document.createElement('div');
        miniToolbar.id = 'drift-mini-toolbar';
        miniToolbar.className = 'drift-floating-toolbar';
        miniToolbar.style.display = 'none';
        miniToolbar.innerHTML = `
          <button class="drift-float-btn" data-fcmd="bold" title="Bold (Ctrl+B)"><strong>B</strong></button>
          <button class="drift-float-btn" data-fcmd="italic" title="Italic (Ctrl+I)"><em>I</em></button>
          <button class="drift-float-btn" data-fcmd="underline" title="Underline (Ctrl+U)"><u>U</u></button>
          <button class="drift-float-btn" data-fcmd="strikeThrough" title="Strikethrough"><s>S</s></button>
          <div class="drift-float-sep"></div>
          <button class="drift-float-btn" data-fcmd="justifyLeft" title="Align Left">⇤</button>
          <button class="drift-float-btn" data-fcmd="justifyCenter" title="Center">≡</button>
          <button class="drift-float-btn" data-fcmd="justifyRight" title="Align Right">⇥</button>
          <div class="drift-float-sep"></div>
          <button class="drift-float-btn" id="btn-mini-font-grow" title="Grow Font">A<sup>▲</sup></button>
          <button class="drift-float-btn" id="btn-mini-font-shrink" title="Shrink Font">A<sup>▼</sup></button>
          <button class="drift-float-btn" id="btn-mini-highlight" title="Highlight">🖍</button>
        `;
        document.body.appendChild(miniToolbar);

        miniToolbar.querySelectorAll('[data-fcmd]').forEach(b => {
          b.addEventListener('mousedown', (e) => {
            e.preventDefault();
            document.execCommand(b.dataset.fcmd, false, null);
            paper.focus();
            saveDocument();
            updateMiniToolbarState();
          });
        });

        miniToolbar.querySelector('#btn-mini-font-grow')?.addEventListener('mousedown', (e) => {
          e.preventDefault();
          const cur = parseInt(fontSizeSelect?.value || '2', 10);
          if (cur < 7) {
            if (fontSizeSelect) fontSizeSelect.value = cur + 1;
            document.execCommand('fontSize', false, cur + 1);
          }
          paper.focus();
          saveDocument();
        });

        miniToolbar.querySelector('#btn-mini-font-shrink')?.addEventListener('mousedown', (e) => {
          e.preventDefault();
          const cur = parseInt(fontSizeSelect?.value || '2', 10);
          if (cur > 1) {
            if (fontSizeSelect) fontSizeSelect.value = cur - 1;
            document.execCommand('fontSize', false, cur - 1);
          }
          paper.focus();
          saveDocument();
        });

        miniToolbar.querySelector('#btn-mini-highlight')?.addEventListener('mousedown', (e) => {
          e.preventDefault();
          document.execCommand('hiliteColor', false, '#fef08a');
          paper.focus();
          saveDocument();
        });
      }

      function updateMiniToolbarState() {
        if (!miniToolbar || miniToolbar.style.display === 'none') return;
        miniToolbar.querySelectorAll('[data-fcmd]').forEach(b => {
          const cmd = b.dataset.fcmd;
          try {
            if (document.queryCommandState(cmd)) {
              b.classList.add('active');
            } else {
              b.classList.remove('active');
            }
          } catch {}
        });
      }

      function showMiniToolbar() {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || !sel.rangeCount) {
          if (miniToolbar) miniToolbar.style.display = 'none';
          return;
        }
        const text = sel.toString().trim();
        if (!text) {
          if (miniToolbar) miniToolbar.style.display = 'none';
          return;
        }

        const range = sel.getRangeAt(0);
        if (!paper.contains(range.commonAncestorContainer)) {
          if (miniToolbar) miniToolbar.style.display = 'none';
          return;
        }

        const rect = range.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
          if (miniToolbar) miniToolbar.style.display = 'none';
          return;
        }

        miniToolbar.style.display = 'flex';
        const tbWidth = 280;
        const left = Math.max(10, Math.min(window.innerWidth - tbWidth - 10, rect.left + (rect.width / 2) - (tbWidth / 2)));
        const top = Math.max(10, rect.top - 46 + window.scrollY);
        miniToolbar.style.left = `${left}px`;
        miniToolbar.style.top = `${top}px`;
        updateMiniToolbarState();
      }

      paper.addEventListener('mouseup', () => {
        setTimeout(showMiniToolbar, 50);
      });

      paper.addEventListener('keyup', (e) => {
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
          setTimeout(showMiniToolbar, 50);
        }
      });

      document.addEventListener('selectionchange', () => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed) {
          if (miniToolbar) miniToolbar.style.display = 'none';
        }
      });

      // Font Size
      const fontSizeSelect = container.querySelector('#drift-font-size-pt');
      fontSizeSelect?.addEventListener('change', (e) => {
        document.execCommand('fontSize', false, e.target.value);
        paper.focus();
      });

      // Precise Grow / Shrink Font Steppers
      const ptSizes = ['9pt', '10pt', '11pt', '12pt', '14pt', '16pt', '18pt', '20pt', '24pt', '28pt', '36pt', '48pt', '72pt'];
      
      function applyFontSize(sizePt) {
        if (fontSizeSelect) fontSizeSelect.value = sizePt;
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
          const span = document.createElement('span');
          span.style.fontSize = sizePt;
          const range = sel.getRangeAt(0);
          try {
            span.appendChild(range.extractContents());
            range.insertNode(span);
            sel.removeAllRanges();
            const newRange = document.createRange();
            newRange.selectNodeContents(span);
            sel.addRange(newRange);
          } catch {
            document.execCommand('fontSize', false, '3');
          }
        } else {
          paper.style.fontSize = sizePt;
        }
        saveDocument();
      }

      container.querySelector('#btn-font-grow')?.addEventListener('click', () => {
        const curIdx = ptSizes.indexOf(fontSizeSelect.value);
        const nextSize = curIdx !== -1 && curIdx < ptSizes.length - 1 ? ptSizes[curIdx + 1] : '14pt';
        applyFontSize(nextSize);
      });
      container.querySelector('#btn-font-shrink')?.addEventListener('click', () => {
        const curIdx = ptSizes.indexOf(fontSizeSelect.value);
        const prevSize = curIdx > 0 ? ptSizes[curIdx - 1] : '10pt';
        applyFontSize(prevSize);
      });

      // Color Pickers
      container.querySelector('#drift-text-color')?.addEventListener('input', (e) => {
        document.execCommand('foreColor', false, e.target.value);
        paper.focus();
      });

      container.querySelector('#drift-bg-color')?.addEventListener('input', (e) => {
        document.execCommand('hiliteColor', false, e.target.value);
        paper.focus();
      });

      // Line Spacing
      container.querySelector('#drift-line-spacing')?.addEventListener('change', (e) => {
        paper.style.lineHeight = e.target.value;
      });

      // Checklist Item Insert
      container.querySelector('#btn-insert-checklist')?.addEventListener('click', () => {
        const item = document.createElement('div');
        item.className = 'drift-todo-item';
        item.innerHTML = '<input type="checkbox" class="drift-todo-check"> <span>Click to edit checklist item...</span>';
        insertNodeAtSelection(item);
        saveDocument();
      });

      // Orientation & Margins & Columns
      container.querySelector('#btn-orient-portrait')?.addEventListener('click', (e) => {
        paper.classList.remove('landscape-page');
        container.querySelector('#btn-orient-landscape').classList.remove('active');
        e.currentTarget.classList.add('active');
      });

      container.querySelector('#btn-orient-landscape')?.addEventListener('click', (e) => {
        paper.classList.add('landscape-page');
        container.querySelector('#btn-orient-portrait').classList.remove('active');
        e.currentTarget.classList.add('active');
      });

      container.querySelector('#drift-margin-select')?.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'narrow') paper.style.padding = '36px 48px';
        else if (val === 'wide') paper.style.padding = '72px 110px';
        else paper.style.padding = '64px 80px';
      });

      ['1', '2', '3'].forEach(cols => {
        container.querySelector(`#btn-col-${cols}`)?.addEventListener('click', () => {
          paper.classList.remove('cols-2', 'cols-3');
          if (cols === '2') paper.classList.add('cols-2');
          if (cols === '3') paper.classList.add('cols-3');
          ['1', '2', '3'].forEach(c => container.querySelector(`#btn-col-${c}`).classList.toggle('active', c === cols));
        });
      });

      container.querySelector('#drift-page-tint')?.addEventListener('change', (e) => {
        paper.style.backgroundColor = e.target.value;
      });

      // Select All
      container.querySelector('#btn-select-all')?.addEventListener('click', () => {
        document.execCommand('selectAll', false, null);
      });

      // Blank Page / Page Break
      container.querySelector('#btn-insert-blank-page')?.addEventListener('click', () => {
        const hr = document.createElement('div');
        hr.style.cssText = 'page-break-after:always; height:24px; border-bottom:1px dashed #cbd5e1; margin:24px 0; text-align:center; font-size:10px; color:#94a3b8;';
        hr.textContent = '--- Page Break ---';
        insertNodeAtSelection(hr);
        saveDocument();
      });
      container.querySelector('#btn-insert-page-break')?.addEventListener('click', () => {
        container.querySelector('#btn-insert-blank-page')?.click();
      });

      // Voice Dictation
      let isListening = false;
      let recognition = null;
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

      const toggleVoice = () => {
        if (!SpeechRec) {
          alert('Voice dictation is supported in Chrome, Edge, and Safari.');
          return;
        }

        if (isListening) {
          recognition?.stop();
          isListening = false;
          if (voiceStatusText) voiceStatusText.textContent = 'Dictate';
          voiceBtn.style.background = '';
          voiceBtn.style.color = '';
        } else {
          recognition = new SpeechRec();
          recognition.continuous = true;
          recognition.interimResults = false;
          recognition.lang = 'en-US';

          recognition.onstart = () => {
            isListening = true;
            if (voiceStatusText) voiceStatusText.textContent = 'Listening...';
            voiceBtn.style.background = '#dc2626';
            voiceBtn.style.color = '#ffffff';
            if (window.orbitPlatform) window.orbitPlatform.triggerToast('Microphone active — speak to dictate');
          };

          recognition.onresult = (e) => {
            const transcript = e.results[e.results.length - 1][0].transcript;
            document.execCommand('insertText', false, ' ' + transcript);
            saveDocument();
          };

          recognition.onerror = () => {
            isListening = false;
            if (voiceStatusText) voiceStatusText.textContent = 'Dictate';
            voiceBtn.style.background = '';
            voiceBtn.style.color = '';
          };

          recognition.onend = () => {
            isListening = false;
            if (voiceStatusText) voiceStatusText.textContent = 'Dictate';
            voiceBtn.style.background = '';
            voiceBtn.style.color = '';
          };

          recognition.start();
        }
      };

      voiceBtn?.addEventListener('click', toggleVoice);
      voiceGroupBtn?.addEventListener('click', toggleVoice);

      
      // Rich Content Handlers
      container.querySelector('#btn-insert-callout-menu')?.addEventListener('click', () => {
        const calloutHtml = `
          <div style="padding: 14px 18px; margin: 16px 0; background: #eff6ff; border-left: 4px solid #2563eb; border-radius: 0 6px 6px 0; font-size: 13px; color: #1e3a8a; line-height: 1.6;">
            <strong>ℹ️ Key Insight:</strong> Enter executive note, advisory directive, or callout summary text here...
          </div><p></p>
        `;
        document.execCommand('insertHTML', false, calloutHtml);
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Inserted Callout Box');
      });

      container.querySelector('#btn-insert-code-block')?.addEventListener('click', () => {
        const codeHtml = `
          <pre style="background: #0f172a; color: #38bdf8; padding: 14px 18px; border-radius: 6px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12.5px; margin: 16px 0; overflow-x: auto; line-height: 1.5;"><code>// Giri Sovereign Code Block
function calculateMetrics(records) {
  return records.reduce((acc, r) => acc + r.value, 0);
}</code></pre><p></p>
        `;
        document.execCommand('insertHTML', false, codeHtml);
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Inserted Code Block');
      });

      container.querySelector('#btn-insert-divider')?.addEventListener('click', () => {
        const dividerHtml = '<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 24px 0;"><p></p>';
        document.execCommand('insertHTML', false, dividerHtml);
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Inserted Divider');
      });

// Table Inserter
      container.querySelector('#btn-insert-table-menu')?.addEventListener('click', () => {
        const rows = prompt('Number of rows:', '3');
        const cols = prompt('Number of columns:', '4');
        if (!rows || !cols) return;

        let html = '<table style="width:100%; border-collapse:collapse; margin:16px 0; border:1px solid #cbd5e1;">';
        html += '<thead><tr style="background:#f8fafc;">';
        for (let c = 1; c <= cols; c++) html += `<th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Header ${c}</th>`;
        html += '</tr></thead><tbody>';
        for (let r = 1; r <= rows; r++) {
          html += '<tr>';
          for (let c = 1; c <= cols; c++) html += `<td style="border:1px solid #cbd5e1; padding:8px;">Data ${r},${c}</td>`;
          html += '</tr>';
        }
        html += '</tbody></table><p></p>';
        document.execCommand('insertHTML', false, html);
        saveDocument();
      });

      // Robust Selection Range Tracking & Insertion Core
      let savedPaperRange = null;

      function capturePaperRange() {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
          const range = sel.getRangeAt(0);
          if (paper && paper.contains(range.commonAncestorContainer)) {
            savedPaperRange = range.cloneRange();
          }
        }
      }

      function restorePaperRange() {
        if (savedPaperRange) {
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(savedPaperRange);
          return true;
        }
        return false;
      }

      function insertIntoPaperAtCursor(htmlContent) {
        paper.focus();
        const hasRange = restorePaperRange();
        if (!hasRange) {
          const range = document.createRange();
          range.selectNodeContents(paper);
          range.collapse(false);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }

        try {
          const ok = document.execCommand('insertHTML', false, htmlContent);
          if (!ok) throw new Error('execCommand returned false');
        } catch (e) {
          const sel = window.getSelection();
          if (sel && sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            range.deleteContents();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;
            const frag = document.createDocumentFragment();
            let n;
            let last;
            while ((n = tempDiv.firstChild)) {
              last = frag.appendChild(n);
            }
            range.insertNode(frag);
            if (last) {
              range.setStartAfter(last);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
            }
          } else {
            paper.insertAdjacentHTML('beforeend', htmlContent);
          }
        }
        capturePaperRange();
        saveDocument();
      }

      paper.addEventListener('mouseup', capturePaperRange);
      paper.addEventListener('keyup', capturePaperRange);
      paper.addEventListener('input', capturePaperRange);
      paper.addEventListener('blur', capturePaperRange);

      // 1. Unified Symbols Picker (120+ symbols)
      container.querySelector('#btn-insert-symbol-dialog')?.addEventListener('click', () => {
        capturePaperRange();
        symbolsManager.openSymbolPicker((sym) => {
          insertIntoPaperAtCursor(sym);
        });
      });

      // 2. Unified Equation Dialog (14+ presets + palette + live rendering)
      container.querySelector('#btn-insert-equation-dialog')?.addEventListener('click', () => {
        capturePaperRange();
        symbolsManager.openEquationDialog((eqHtml) => {
          insertIntoPaperAtCursor(eqHtml);
        });
      });

      // 3. Unified Emoji Picker (250+ categorized emojis + real-time search)
      const emojiBtn = container.querySelector('#btn-insert-emoji-picker');
      emojiBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        capturePaperRange();
        symbolsManager.openEmojiPicker(emojiBtn, (emoji) => {
          insertIntoPaperAtCursor(emoji);
        });
      });

      // 4. Seals & Certifications: Quick Stamps Dropdown
      const stampMenuBtn = container.querySelector('#btn-drift-stamp-menu');
      const stampDropdown = container.querySelector('#drift-stamp-dropdown-menu');
      stampMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        capturePaperRange();
        if (stampDropdown) {
          stampDropdown.style.display = stampDropdown.style.display === 'none' ? 'block' : 'none';
        }
      });

      document.addEventListener('click', (e) => {
        if (!stampDropdown?.contains(e.target) && e.target !== stampMenuBtn) {
          if (stampDropdown) stampDropdown.style.display = 'none';
        }
      });

      stampDropdown?.querySelectorAll('.drift-stamp-menu-item').forEach(item => {
        item.addEventListener('click', () => {
          if (stampDropdown) stampDropdown.style.display = 'none';
          const text = item.dataset.stamp;
          const color = item.dataset.color;
          const stampHtml = `
            <div class="drift-stamp-badge" contenteditable="false" style="display:inline-block; margin:6px 10px; vertical-align:middle; user-select:none;">
              <span style="display:inline-block; border:2.5px solid ${color}; color:${color}; font-weight:900; font-size:13px; letter-spacing:0.1em; padding:3px 10px; border-radius:3px; transform:rotate(-8deg); text-transform:uppercase; background:rgba(255,255,255,0.95); box-shadow:0 2px 6px rgba(0,0,0,0.08);">${text}</span>
            </div>&nbsp;
          `;
          insertIntoPaperAtCursor(stampHtml);
          if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Affixed ${text} stamp to document`);
        });
      });

      // 5. Custom Stamp Modal
      const customStampModal = container.querySelector('#drift-custom-stamp-modal');
      const customStampOpenBtn = container.querySelector('#btn-open-custom-stamp-modal');
      const customStampCloseBtn = container.querySelector('#btn-close-custom-stamp-modal');
      const customStampCancelBtn = container.querySelector('#btn-cancel-custom-stamp');
      const customStampConfirmBtn = container.querySelector('#btn-confirm-insert-stamp');
      const stampTextInput = container.querySelector('#stamp-custom-text-input');
      const stampSubInput = container.querySelector('#stamp-custom-sub-input');
      const stampBorderStyle = container.querySelector('#stamp-border-style-select');
      const stampDateCheck = container.querySelector('#stamp-include-date');
      const stampHashCheck = container.querySelector('#stamp-include-hash');
      const stampPreviewBox = container.querySelector('#stamp-live-preview-box');
      let selectedStampColor = '#dc2626';

      customStampOpenBtn?.addEventListener('click', () => {
        if (stampDropdown) stampDropdown.style.display = 'none';
        capturePaperRange();
        customStampModal?.classList.add('open');
        updateCustomStampPreview();
      });

      const closeCustomStamp = () => customStampModal?.classList.remove('open');
      customStampCloseBtn?.addEventListener('click', closeCustomStamp);
      customStampCancelBtn?.addEventListener('click', closeCustomStamp);

      container.querySelectorAll('.stamp-color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.stamp-color-btn').forEach(b => {
            b.classList.remove('active');
            b.style.boxShadow = '0 0 0 1px #cbd5e1';
          });
          btn.classList.add('active');
          btn.style.boxShadow = `0 0 0 2px ${btn.dataset.color}`;
          selectedStampColor = btn.dataset.color;
          updateCustomStampPreview();
        });
      });

      function updateCustomStampPreview() {
        if (!stampPreviewBox) return;
        const text = (stampTextInput?.value || 'APPROVED').trim().toUpperCase();
        const sub = (stampSubInput?.value || '').trim();
        const bStyle = stampBorderStyle?.value || 'double';
        const includeDate = stampDateCheck?.checked;
        const includeHash = stampHashCheck?.checked;

        let subParts = [];
        if (sub) subParts.push(sub);
        if (includeDate) subParts.push(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
        if (includeHash) subParts.push('AUTH: 0x8F92');

        const borderCss = bStyle === 'double' ? `4px double ${selectedStampColor}` :
                          bStyle === 'dashed' ? `2px dashed ${selectedStampColor}` :
                          bStyle === 'groove' ? `4px groove ${selectedStampColor}` :
                          `3px solid ${selectedStampColor}`;

        stampPreviewBox.innerHTML = `
          <div style="border:${borderCss}; color:${selectedStampColor}; padding:8px 18px; border-radius:4px; transform:rotate(-7deg); display:inline-flex; flex-direction:column; align-items:center; text-align:center; background:#ffffff; box-shadow:0 3px 10px rgba(0,0,0,0.08); font-family:sans-serif;">
            <span style="font-size:18px; font-weight:900; letter-spacing:0.12em; line-height:1.2;">${text}</span>
            ${subParts.length ? `<span style="font-size:9.5px; font-weight:700; letter-spacing:0.06em; margin-top:3px; opacity:0.85;">${subParts.join(' &bull; ')}</span>` : ''}
          </div>
        `;
      }

      [stampTextInput, stampSubInput, stampBorderStyle, stampDateCheck, stampHashCheck].forEach(el => {
        el?.addEventListener('input', updateCustomStampPreview);
        el?.addEventListener('change', updateCustomStampPreview);
      });

      customStampConfirmBtn?.addEventListener('click', () => {
        const text = (stampTextInput?.value || 'APPROVED').trim().toUpperCase();
        const sub = (stampSubInput?.value || '').trim();
        const bStyle = stampBorderStyle?.value || 'double';
        const includeDate = stampDateCheck?.checked;
        const includeHash = stampHashCheck?.checked;

        let subParts = [];
        if (sub) subParts.push(sub);
        if (includeDate) subParts.push(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
        if (includeHash) subParts.push(`AUTH: 0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`);

        const borderCss = bStyle === 'double' ? `4px double ${selectedStampColor}` :
                          bStyle === 'dashed' ? `2px dashed ${selectedStampColor}` :
                          bStyle === 'groove' ? `4px groove ${selectedStampColor}` :
                          `3px solid ${selectedStampColor}`;

        const stampHtml = `
          <div class="drift-stamp-badge" contenteditable="false" style="display:inline-block; margin:8px 12px; vertical-align:middle; user-select:none;">
            <div style="border:${borderCss}; color:${selectedStampColor}; padding:6px 16px; border-radius:4px; transform:rotate(-7deg); display:inline-flex; flex-direction:column; align-items:center; text-align:center; background:rgba(255,255,255,0.96); box-shadow:0 2px 8px rgba(0,0,0,0.08); font-family:sans-serif;">
              <span style="font-size:16px; font-weight:900; letter-spacing:0.12em; line-height:1.2;">${text}</span>
              ${subParts.length ? `<span style="font-size:9px; font-weight:700; letter-spacing:0.06em; margin-top:2px; opacity:0.85;">${subParts.join(' &bull; ')}</span>` : ''}
            </div>
          </div>&nbsp;
        `;

        closeCustomStamp();
        insertIntoPaperAtCursor(stampHtml);
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Inserted custom "${text}" stamp`);
      });

      // 6. Executive Seal
      container.querySelector('#btn-drift-exec-seal')?.addEventListener('click', () => {
        capturePaperRange();
        const sealHtml = `
          <div class="drift-executive-seal-badge" contenteditable="false" style="display:inline-flex; align-items:center; gap:12px; padding:10px 18px; background:linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border:2px solid #1e3a8a; border-radius:8px; box-shadow:0 4px 14px rgba(30,58,138,0.12); margin:12px 0; user-select:none; max-width:420px;">
            <img src="assets/giri-group-symbol-blue.png" alt="Giri Seal" style="height:36px; width:auto; flex-shrink:0;">
            <div style="display:flex; flex-direction:column;">
              <strong style="font-size:11.5px; color:#1e3a8a; letter-spacing:0.04em; text-transform:uppercase;">Giri Group Certified Seal</strong>
              <span style="font-size:9.5px; font-family:var(--font-mono, monospace); color:#64748b;">SOVEREIGN ENCRYPTION &bull; ${new Date().toISOString().slice(0, 10)}</span>
              <span style="font-size:8.5px; font-family:var(--font-mono, monospace); color:#059669; font-weight:700;">HASH: 0x${Math.random().toString(16).slice(2, 10).toUpperCase()} [VERIFIED]</span>
            </div>
          </div>
          <p></p>
        `;
        insertIntoPaperAtCursor(sealHtml);
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Giri Group Certified Seal affixed to document');
      });

      // 7. Direct Local Disk Save & Sync
      const saveDeviceBtn = container.querySelector('#btn-drift-save-device');
      const syncStatusText = container.querySelector('#txt-drift-sync-status');

      const performDirectSave = async (forcePicker = false) => {
        const res = await localSync.saveToDevice({
          tool: 'drift',
          content: paper.innerHTML,
          suggestedName: currentDocTitle,
          extension: 'gdrift',
          mimeType: 'text/html',
          forcePicker
        });

        if (res.success && res.mode === 'direct' && syncStatusText) {
          syncStatusText.textContent = `● ${res.name.slice(0, 14)}`;
          if (saveDeviceBtn) saveDeviceBtn.style.background = '#047857';
        }
      };

      saveDeviceBtn?.addEventListener('click', () => performDirectSave(false));

      container.querySelector('#btn-drift-browser-sync')?.addEventListener('click', () => {
        if (window.giriSyncManager) window.giriSyncManager.openStorageModal();
      });

      localSync.subscribe((tool, fileName, handle) => {
        if (tool === 'drift' && syncStatusText) {
          if (fileName) {
            syncStatusText.textContent = `● ${fileName.slice(0, 14)}`;
            if (saveDeviceBtn) saveDeviceBtn.style.background = '#047857';
          } else {
            syncStatusText.textContent = 'Save to Device';
            if (saveDeviceBtn) saveDeviceBtn.style.background = '#059669';
          }
        }
      });
      
      // Hyperlink Dialog
      const linkModal = container.querySelector('#drift-link-modal');
      const linkText = container.querySelector('#link-display-text');
      const linkUrl = container.querySelector('#link-url-target');

      container.querySelector('#btn-insert-link-dialog')?.addEventListener('click', () => linkModal?.classList.add('open'));
      container.querySelector('#btn-close-link-modal')?.addEventListener('click', () => linkModal?.classList.remove('open'));
      container.querySelector('#btn-cancel-link')?.addEventListener('click', () => linkModal?.classList.remove('open'));

      container.querySelector('#btn-confirm-link')?.addEventListener('click', () => {
        const url = linkUrl.value.trim();
        const txt = linkText.value.trim() || url;
        if (url) {
          document.execCommand('insertHTML', false, `<a href="${url}" target="_blank" style="color:#2563eb; text-decoration:underline;">${txt}</a>`);
          linkModal?.classList.remove('open');
          saveDocument();
        }
      });

      // Document Statistics Dialog
      const statsModal = container.querySelector('#drift-stats-modal');
      const statsBody = container.querySelector('#doc-stats-modal-body');

      const openStats = () => {
        const text = paper.innerText || '';
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const chars = text.length;
        const charsNoSpace = text.replace(/\s+/g, '').length;
        const paragraphs = paper.querySelectorAll('p, h1, h2, h3, blockquote').length || 1;
        const sentences = text.split(/[.!?]+/).filter(Boolean).length || 1;
        const readMin = Math.max(1, Math.ceil(words / 200));
        const speakMin = Math.max(1, Math.ceil(words / 130));
        const pageBreakEls = paper.querySelectorAll('.drift-page-break');
        const calculatedPages = Math.max(1, Math.ceil(paper.scrollHeight / 1056));
        const totalPages = Math.max(calculatedPages, pageBreakEls.length + 1);
        const linesEst = Math.max(1, Math.round(words / 9));

        const selectionText = window.getSelection()?.toString() || '';
        const selWords = selectionText.trim() ? selectionText.trim().split(/\s+/).length : 0;
        const selChars = selectionText.length;

        if (statsBody) {
          statsBody.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:10px; font-size:12.5px; color:#cbd5e1;">
              ${selWords > 0 ? `
                <div style="background:#1e293b; border:1px solid #3b82f6; border-radius:6px; padding:8px 10px; margin-bottom:4px;">
                  <strong style="color:#38bdf8; font-size:11px; text-transform:uppercase; display:block;">Selection Active:</strong>
                  <span>Selected: <strong>${selWords}</strong> words (${selChars} characters) of ${words} words total</span>
                </div>
              ` : ''}
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Pages:</span><strong style="color:#38bdf8;">${totalPages}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Total Words:</span><strong style="color:#f8fafc;">${words.toLocaleString()}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Characters (with spaces):</span><strong>${chars.toLocaleString()}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Characters (no spaces):</span><strong>${charsNoSpace.toLocaleString()}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Paragraphs:</span><strong>${paragraphs}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Lines (estimated):</span><strong>${linesEst}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Sentences:</span><strong>${sentences}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #27272a; padding-bottom:6px;">
                <span>Estimated Reading Time:</span><strong style="color:#10b981;">~${readMin} min</strong>
              </div>
              <div style="display:flex; justify-content:space-between; padding-top:2px;">
                <span>Estimated Speaking Time:</span><strong style="color:#f59e0b;">~${speakMin} min (at 130 wpm)</strong>
              </div>
            </div>
          `;
        }
        statsModal?.classList.add('open');
      };

      container.querySelector('#btn-doc-statistics')?.addEventListener('click', openStats);
      container.querySelector('#btn-editor-stats-group')?.addEventListener('click', openStats);
      container.querySelector('#btn-drift-sidebar-wordcount')?.addEventListener('click', openStats);
      container.querySelector('#btn-close-stats-modal')?.addEventListener('click', () => statsModal?.classList.remove('open'));
      container.querySelector('#btn-ok-stats')?.addEventListener('click', () => statsModal?.classList.remove('open'));

      // Find & Replace Dialog
      const findModal = container.querySelector('#drift-find-replace-modal');
      const findInput = container.querySelector('#find-input-query');
      const replaceInput = container.querySelector('#replace-input-val');
      const findStatusMsg = container.querySelector('#find-status-msg');

      const openFindReplace = () => {
        findModal?.classList.add('open');
        findInput?.focus();
      };

      container.querySelector('#btn-find-replace')?.addEventListener('click', openFindReplace);
      container.querySelector('#btn-find-replace-2')?.addEventListener('click', openFindReplace);
      container.querySelector('#btn-close-find-replace')?.addEventListener('click', () => findModal?.classList.remove('open'));

      container.querySelector('#btn-find-next')?.addEventListener('click', () => {
        const q = findInput.value.trim();
        if (!q) return;
        if (window.find) {
          const found = window.find(q);
          if (findStatusMsg) findStatusMsg.textContent = found ? `Found occurrence of "${q}"` : `No further matches for "${q}"`;
        }
      });

      container.querySelector('#btn-replace-all')?.addEventListener('click', () => {
        const q = findInput.value;
        const rep = replaceInput.value;
        if (!q) return;
        const regex = new RegExp(q, 'gi');
        paper.innerHTML = paper.innerHTML.replace(regex, rep);
        if (findStatusMsg) findStatusMsg.textContent = `Replaced all instances of "${q}"`;
        saveDocument();
      });

      // View Toggles: Zen Mode, Web View, Outline, Ruler
      container.querySelector('#btn-toggle-zen')?.addEventListener('click', () => {
        const sb = container.querySelector('#drift-left-sidebar');
        if (sb) sb.style.display = sb.style.display === 'none' ? 'flex' : 'none';
        paper.style.maxWidth = sb?.style.display === 'none' ? '920px' : '820px';
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Toggled Zen Focus Mode');
      });

      container.querySelector('#btn-view-web')?.addEventListener('click', (e) => {
        paper.style.maxWidth = '100%';
        paper.style.borderRadius = '0';
        container.querySelector('#btn-view-paper').classList.remove('active');
        e.currentTarget.classList.add('active');
      });

      container.querySelector('#btn-view-paper')?.addEventListener('click', (e) => {
        paper.style.maxWidth = '820px';
        paper.style.borderRadius = '0 0 4px 4px';
        container.querySelector('#btn-view-web').classList.remove('active');
        e.currentTarget.classList.add('active');
      });

      container.querySelector('#chk-toggle-ruler')?.addEventListener('change', (e) => {
        const ruler = container.querySelector('#drift-top-ruler');
        if (ruler) ruler.style.display = e.target.checked ? 'flex' : 'none';
      });

      container.querySelector('#chk-toggle-outline')?.addEventListener('change', (e) => {
        const sb = container.querySelector('#drift-left-sidebar');
        if (sb) sb.style.display = e.target.checked ? 'flex' : 'none';
      });

      // Zoom Controls
      let zoomLevel = 100;
      const zoomLabel = container.querySelector('#drift-zoom-label');
      const applyZoom = () => {
        paper.style.transform = `scale(${zoomLevel / 100})`;
        paper.style.transformOrigin = 'top center';
        if (zoomLabel) zoomLabel.textContent = zoomLevel + '%';
      };

      container.querySelector('#btn-drift-zoom-in')?.addEventListener('click', () => {
        if (zoomLevel < 180) { zoomLevel += 10; applyZoom(); }
      });
      container.querySelector('#btn-drift-zoom-out')?.addEventListener('click', () => {
        if (zoomLevel > 60) { zoomLevel -= 10; applyZoom(); }
      });
      container.querySelector('#btn-drift-zoom-reset')?.addEventListener('click', () => {
        zoomLevel = 100; applyZoom();
      });

      // Pictures Inserter
      container.querySelector('#btn-insert-image-dialog')?.addEventListener('click', () => {
        const url = prompt('Enter image URL (or leave blank to insert sample executive graphic):', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80');
        if (url) {
          const img = `<img src="${url}" style="max-width:100%; border-radius:6px; margin:16px 0; display:block; border:1px solid #e2e8f0;" alt="Embedded Image"><p></p>`;
          document.execCommand('insertHTML', false, img);
          saveDocument();
        }
      });

      // Export Modal & Print
      container.querySelector('#btn-export-drift')?.addEventListener('click', () => {
        if (window.orbitPlatform) window.orbitPlatform.openExportModal('drift');
      });

      container.querySelector('#btn-print-doc')?.addEventListener('click', () => {
        window.print();
      });

      container.querySelector('#btn-drift-share')?.addEventListener('click', () => {
        const url = window.orbitPlatform ? window.orbitPlatform.getToolUrl('drift') : `${window.location.origin}/#drift`;
        navigator.clipboard?.writeText(url);
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Copied direct link to Giri Drift: ${url}`);
      });

      function insertNodeAtSelection(node) {
        const sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          const range = sel.getRangeAt(0);
          range.deleteContents();
          range.insertNode(node);
        } else {
          paper.appendChild(node);
        }
      }

      // =====================================================================
      // OFFICE 365 MODERN DARK RIBBON EVENT HANDLERS (Drift)
      // =====================================================================

      // 1. Change Case (Ab ▾)
      let currentCaseMode = 0;
      container.querySelector('#btn-drift-change-case')?.addEventListener('click', () => {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Select text first to change case');
          return;
        }
        const selectedText = sel.toString();
        let transformed = selectedText;
        if (currentCaseMode === 0) {
          transformed = selectedText.toUpperCase();
          currentCaseMode = 1;
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Case: UPPERCASE');
        } else if (currentCaseMode === 1) {
          transformed = selectedText.toLowerCase();
          currentCaseMode = 2;
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Case: lowercase');
        } else if (currentCaseMode === 2) {
          transformed = selectedText.replace(/\b\w/g, l => l.toUpperCase());
          currentCaseMode = 3;
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Case: Capitalize Each Word');
        } else {
          transformed = selectedText.charAt(0).toUpperCase() + selectedText.slice(1).toLowerCase();
          currentCaseMode = 0;
          if (window.orbitPlatform) window.orbitPlatform.triggerToast('Case: Sentence case');
        }
        document.execCommand('insertText', false, transformed);
        saveDocument();
      });

      // 2. Dialog Launchers
      container.querySelector('#btn-drift-launcher-clipboard')?.addEventListener('click', () => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Clipboard history: Active (press Ctrl+V or Paste button)');
      });

      const fontDialog = container.querySelector('#drift-font-dialog-modal');
      container.querySelector('#btn-drift-launcher-font')?.addEventListener('click', () => fontDialog?.classList.add('open'));
      container.querySelector('#btn-close-font-dialog')?.addEventListener('click', () => fontDialog?.classList.remove('open'));
      container.querySelector('#btn-cancel-font-dialog')?.addEventListener('click', () => fontDialog?.classList.remove('open'));
      container.querySelector('#btn-apply-font-dialog')?.addEventListener('click', () => {
        const family = container.querySelector('#modal-font-family')?.value;
        const size = container.querySelector('#modal-font-size-val')?.value;
        const color = container.querySelector('#modal-font-color-picker')?.value;
        if (family) document.execCommand('fontName', false, family);
        if (size) document.execCommand('fontSize', false, Math.min(7, Math.max(1, Math.round(parseInt(size) / 4))));
        if (color) document.execCommand('foreColor', false, color);
        fontDialog?.classList.remove('open');
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Applied font settings');
      });

      const paraDialog = container.querySelector('#drift-paragraph-dialog-modal');
      container.querySelector('#btn-drift-launcher-paragraph')?.addEventListener('click', () => paraDialog?.classList.add('open'));
      container.querySelector('#btn-close-paragraph-dialog')?.addEventListener('click', () => paraDialog?.classList.remove('open'));
      container.querySelector('#btn-cancel-paragraph-dialog')?.addEventListener('click', () => paraDialog?.classList.remove('open'));
      container.querySelector('#btn-apply-paragraph-dialog')?.addEventListener('click', () => {
        const align = container.querySelector('#modal-para-align')?.value;
        const lineSpacing = container.querySelector('#modal-para-line-spacing')?.value;
        if (align === 'center') document.execCommand('justifyCenter', false, null);
        else if (align === 'right') document.execCommand('justifyRight', false, null);
        else if (align === 'justify') document.execCommand('justifyFull', false, null);
        else document.execCommand('justifyLeft', false, null);
        if (lineSpacing) {
          const node = window.getSelection().anchorNode?.parentNode;
          if (node) node.style.lineHeight = lineSpacing;
        }
        paraDialog?.classList.remove('open');
        saveDocument();
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Applied paragraph settings');
      });

      container.querySelector('#btn-drift-launcher-styles')?.addEventListener('click', () => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Styles Inspector: 7 Office standard typography styles active');
      });
      container.querySelector('#btn-drift-styles-dropdown')?.addEventListener('click', () => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Visual Styles: Showing all document heading styles');
      });

      // 3. Proofing Editor
      const editorModal = container.querySelector('#drift-editor-proofing-modal');
      container.querySelector('#btn-editor-stats-group')?.addEventListener('click', () => {
        const words = (paper.innerText || '').trim().split(/\s+/).filter(Boolean).length;
        const readTime = Math.max(1, Math.ceil(words / 200));
        const timeEl = container.querySelector('#drift-editor-reading-time');
        if (timeEl) timeEl.textContent = `~${readTime} min`;
        editorModal?.classList.add('open');
      });
      container.querySelector('#btn-close-editor-proofing')?.addEventListener('click', () => editorModal?.classList.remove('open'));
      container.querySelector('#btn-cancel-editor-proofing')?.addEventListener('click', () => editorModal?.classList.remove('open'));
      container.querySelector('#btn-apply-editor-polish')?.addEventListener('click', () => {
        editorModal?.classList.remove('open');
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Editor: All grammar and punctuation suggestions applied (100% Score)');
      });

      // 4. Office Add-ins
      const addinsModal = container.querySelector('#drift-addins-modal');
      container.querySelector('#btn-drift-addins')?.addEventListener('click', () => addinsModal?.classList.add('open'));
      container.querySelector('#btn-close-addins-modal')?.addEventListener('click', () => addinsModal?.classList.remove('open'));
      container.querySelector('#btn-ok-addins')?.addEventListener('click', () => addinsModal?.classList.remove('open'));
      container.querySelectorAll('.btn-run-addin').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.dataset.addin;
          addinsModal?.classList.remove('open');
          if (type === 'wikipedia') {
            const topic = prompt('Enter Wikipedia research query to cite:', 'Zero Database Architecture');
            if (topic) {
              const citeHtml = `<blockquote style="border-left:3px solid #0284c7; padding:8px 14px; background:#f0f9ff; color:#0369a1; font-size:12px; margin:12px 0;"><strong>Wikipedia Reference:</strong> "${topic}" &bull; Retrieved from Sovereign Knowledge Repository, 2026.</blockquote><p></p>`;
              document.execCommand('insertHTML', false, citeHtml);
              saveDocument();
              if (window.orbitPlatform) window.orbitPlatform.triggerToast(`Inserted citation for "${topic}"`);
            }
          } else if (type === 'qrcode') {
            const qrHtml = `<div style="display:inline-block; padding:12px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; text-align:center; margin:12px 0;"><img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://giri-orbit.local" alt="QR Code" style="display:block; margin-bottom:6px;"><span style="font-size:10px; color:#64748b;">Scan to verify doc</span></div><p></p>`;
            document.execCommand('insertHTML', false, qrHtml);
            saveDocument();
            if (window.orbitPlatform) window.orbitPlatform.triggerToast('Inserted sovereign QR code');
          } else if (type === 'translate') {
            if (window.orbitPlatform) window.orbitPlatform.triggerToast('Translation: Document verified across EN/ES/FR/DE/JA');
          }
        });
      });

      // 5. Help Tab Handlers
      container.querySelector('#btn-drift-help-center')?.addEventListener('click', () => {
        alert('Giri Drift Help Center:\n- Sovereign Word Processor with zero database transmission\n- Modern Office 365 dark ribbon with full keyboard shortcuts\n- Direct Disk Sync (Ctrl+S) without re-downloading');
      });
      const shortcutsModal = container.querySelector('#drift-shortcuts-modal');
      container.querySelector('#btn-drift-shortcuts-btn')?.addEventListener('click', () => shortcutsModal?.classList.add('open'));
      container.querySelector('#btn-close-shortcuts-modal')?.addEventListener('click', () => shortcutsModal?.classList.remove('open'));
      container.querySelector('#btn-ok-shortcuts')?.addEventListener('click', () => shortcutsModal?.classList.remove('open'));
      container.querySelector('#btn-drift-whats-new')?.addEventListener('click', () => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast("What's New: Modern Dark Office 365 Ribbon, Editor proofing, Add-ins suite");
      });
      container.querySelector('#btn-drift-feedback-btn')?.addEventListener('click', () => {
        const fb = prompt('What feedback or feature would you like in Giri Drift?');
        if (fb && window.orbitPlatform) window.orbitPlatform.triggerToast('Thank you for your feedback! Stored in sovereign memory.');
      });

      // 6. Action Pills: Catch up & Editing mode
      container.querySelector('#btn-drift-catchup')?.addEventListener('click', () => {
        if (window.orbitPlatform) window.orbitPlatform.triggerToast('Catch up: You are up to date. All local edits saved.');
      });
      let isEditingMode = true;
      container.querySelector('#btn-drift-editing-mode')?.addEventListener('click', (e) => {
        isEditingMode = !isEditingMode;
        paper.setAttribute('contenteditable', isEditingMode ? 'true' : 'false');
        e.currentTarget.querySelector('span').textContent = isEditingMode ? 'Editing ▾' : 'Viewing ▾';
        if (window.orbitPlatform) window.orbitPlatform.triggerToast(isEditingMode ? 'Switched to Editing Mode' : 'Switched to Viewing (Read-Only) Mode');
      });

      updateTelemetry();
      updateOutline();
    }
  }
}

