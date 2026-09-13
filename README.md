# Giri Orbit

**Complete Cloud-Free Office Suite** by [GIRI Corporation](https://github.com/giricorporationpvt-stack)

[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-blue?style=flat-square&logo=github)](https://giricorporationpvt-stack.github.io/giri-orbit)

---

## Features

| Tool | Description |
|------|-------------|
| **Giri Drift** | Word processor — rich text editing, 100+ templates, export to DOCX/PDF/HTML |
| **Giri Axis** | Spreadsheet — formulas, multi-sheet, charts, CSV/JSON import/export |
| **Giri Kinetic** | Presentation maker — MS Office-style ribbon, 3500+ templates, animations, presenter mode |
| **Giri Aegis** | PDF Studio — view, annotate, sign, redact, and export PDF documents |
| **File Converter** | Convert between 15+ formats including native Giri formats |
| **Browser Sync** | Auto-save everything to browser storage — no account required |

## Mobile Ready

Full responsive design for all devices:
- iPhone (iOS Safari), Android Chrome
- iPad, Android tablets
- Desktop: Chrome, Firefox, Edge, Safari

## Quick Start

### Option A: Open directly in browser
Double-click index.html — runs 100% offline, no server needed.

### Option B: Local server (for full module support)
`ash
python -m http.server 5000
# Visit http://localhost:5000
`

### Option C: Flask dev server
`ash
pip install flask
python server.py
# Visit http://127.0.0.1:5000
`

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+K | Command palette |
| Ctrl+J | AI Copilot |
| Ctrl+S | Save |
| Ctrl+Z | Undo |
| F5 | Present (Kinetic) |
| Ctrl+P | Print / Export PDF |

## Tech Stack

- **Frontend**: Vanilla JS (ES Modules), CSS3, HTML5
- **Storage**: Browser localStorage — zero backend, fully offline-capable
- **PWA**: Service Worker, Web App Manifest — installable on any device
- **Fonts**: Inter, Plus Jakarta Sans, JetBrains Mono (Google Fonts)

## Architecture

`
giri-orbit/
├── index.html            # Single-page app entry point
├── css/
│   ├── styles.css        # Core design system
│   ├── hub.css           # Tool hub pages
│   ├── mobile.css        # Mobile responsive (v10.0)
│   └── sync.css          # Sync & storage styles
├── js/
│   ├── app.js            # Platform orchestrator
│   ├── modules/          # Tool modules (drift, axis, kinetic, pdf)
│   ├── components/       # Shared components (fontPicker, syncManager...)
│   └── data/             # Template data
├── assets/               # Logos & icons
├── manifest.json         # PWA manifest
└── sw.js                 # Service worker (offline support)
`

## License

Proprietary © 2025 GIRI Corporation. All rights reserved.

---

> Built with ❤️ by [Abhinav Giri](https://www.instagram.com/abhinavgiri45/) | GIRI Corporation
