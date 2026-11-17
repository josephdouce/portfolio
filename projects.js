// Portfolio content. Add or edit projects here; the page renders from this file.
//
// Fields:
//   name, year, blurb            - required
//   tags                         - tech chips shown on the card
//   category                     - must match an id in CATEGORIES
//   repo                         - GitHub repo name (under josephdouce) or full URL
//   live                         - optional link to a running version
//   note                         - optional small label, e.g. "Contributor"
//   featured                     - true to show a larger card at the top of its section
//   details                      - optional link to a detail page (projects/*.html)
//   thumb                        - optional screenshot shown at the top of the card

const GITHUB_USER = "josephdouce";

const CATEGORIES = [
  { id: "power-platform", title: "Power Platform", intro: "Business apps and automation built on Microsoft Power Apps, Power Automate, Dataverse and Power BI." },
  { id: "web-apps", title: "Web Apps", intro: "Full-stack apps in daily use, self-hosted on a home server with tested, automatic deployment." },
  { id: "m365", title: "Microsoft 365 & Productivity", intro: "Tools that make day-to-day work across tenants and data less painful." },
  { id: "hardware", title: "Home Automation & Hardware", intro: "ESPHome firmware, reverse-engineered protocols and things that talk to physical devices." },
  { id: "tabletop", title: "Tabletop & Gaming Tools", intro: "Utilities for Warhammer 40k and EVE Online, several merged upstream into community projects." },
  { id: "marine", title: "Marine Engineering", intro: "Tools written while working at sea: tank soundings, valve registers and onboard reference apps." },
  { id: "audio", title: "Audio & Media", intro: "Mixer control, synth editing and media library housekeeping." },
  { id: "early", title: "Early Projects", intro: "Voice assistants and smart-home integrations from the early days." },
];

const PROJECTS = [
  // ---------- Power Platform ----------
  {
    category: "power-platform", name: "ISP · Integrated Service Platform", year: 2026, featured: true,
    blurb: "End-to-end field service platform: a 24-module Service Hub (a React Power Apps code app for office staff and technicians' phones), a React Power Pages customer portal, and AI-driven automation that processes supplier paperwork. Runs from customer request to signed report to invoice on one Dataverse model.",
    tags: ["Power Apps code app", "Power Pages", "React", "TypeScript", "Dataverse", "Power Automate", "Copilot Studio"],
    details: "projects/isp.html", thumb: "img/isp/thumb.webp", note: "Work app · source private",
  },

  // ---------- Web apps ----------
  {
    category: "web-apps", name: "Bookbag Buddy", year: 2026, featured: true,
    blurb: "Times tables, number bonds and spelling practice for primary schools. A pupil app with spaced repetition, a teacher app with results, set work, calendar and messages, and a parent app with push notifications. Multi-school, Node and PostgreSQL, deployed with CI/CD.",
    tags: ["Node.js", "PostgreSQL", "PWA", "Web Push", "GitHub Actions"],
    live: "https://bookbagbuddy.app", details: "projects/school-app.html", thumb: "img/school-app/21-class-results.webp",
  },
  {
    category: "web-apps", name: "House Board", year: 2026, featured: true,
    blurb: "Shared household app for chores, the kids' job rota and a barcode-scanning shopping list with Tesco price suggestions. Live updates on every phone, and separate households with invite links.",
    tags: ["Node.js", "PostgreSQL", "SSE", "PWA"],
    live: "https://houseboard.josephdouce.me", details: "projects/house-board.html", thumb: "img/house-board/thumb.webp",
  },

  // ---------- Microsoft 365 ----------
  {
    category: "m365", name: "Tenant Guard", year: 2026, featured: true,
    details: "projects/tenant-guard.html", thumb: "img/tenant-guard/blocked.webp",
    blurb: "Edge extension that colour-codes each browser profile by Microsoft 365 tenant and blocks sign-ins or guest visits to the wrong one. Spots the tenant from the sign-in page, SharePoint and OneDrive URLs and tenant IDs, and gives you a 'copy link for the other profile' button so CLI sign-ins such as pac finish in the right place.",
    tags: ["JavaScript", "Edge Extension", "Entra ID", "M365"], repo: "tenant-guard",
  },

  // ---------- Hardware ----------
  {
    category: "hardware", name: "Lezyne GPS Tools", year: 2026, featured: true,
    blurb: "Web app built by reverse-engineering Lezyne's GPS file formats. Downloads offline map tiles, converts TCX routes to Lezyne .LZR files, and adds climb markers with distance and elevation automatically.",
    tags: ["Python", "Java", "Reverse Engineering", "Web"], repo: "lezyne-gps-tools", live: "https://josephdouce.pythonanywhere.com/",
  },
  {
    category: "hardware", name: "Veritas R8 Alarm Bridge", year: 2026,
    blurb: "ESPHome firmware that connects a Veritas R8 intruder alarm panel to Home Assistant, with a separate bus logger for decoding the panel's traffic.",
    tags: ["ESPHome", "ESP32", "Home Assistant"], repo: "esphome-veritas-r8",
  },
  {
    category: "hardware", name: "Hob2Hood for Luxair", year: 2026,
    blurb: "ESPHome config that picks up a hob's Hob2Hood infrared signals and drives a Luxair cooker hood's fan and light automatically.",
    tags: ["ESPHome", "IR", "Home Assistant"], repo: "esp-home-hob2hood-luxair",
  },
  {
    category: "hardware", name: "WiFi Location", year: 2022,
    blurb: "Indoor positioning system that estimates where a device is using WiFi signal-strength trilateration.",
    tags: ["JavaScript", "Positioning"], repo: "wifi-location",
  },
  {
    category: "hardware", name: "Situation Board", year: 2021,
    blurb: "Desktop status board configured from a JSON file.",
    tags: ["Python", "Desktop"], repo: "situation-board",
  },

  // ---------- Tabletop & gaming ----------
  {
    category: "tabletop", name: "Yellowscribe Editor", year: 2026, featured: true,
    blurb: "Middleman tool that adds custom abilities to armies generated by Yellowscribe before they go into Tabletop Simulator.",
    tags: ["Python", "HTML", "Tabletop Simulator"], repo: "yellowscribe_editor",
  },
  {
    category: "tabletop", name: "40k Campaign Builder", year: 2026, note: "Contributor · 5 commits",
    blurb: "Campaign management app for Warhammer 40k. Contributed features through four pull requests.",
    tags: ["TypeScript"], repo: "https://github.com/JoshuaDouce/40k-campaign-builder",
  },
  {
    category: "tabletop", name: "Stratagem Card Generator", year: 2026, note: "Contributor · merged",
    blurb: "Generates printable Warhammer 40k 10th edition stratagem cards sized for MTG-style sleeves. Contributed upstream.",
    tags: ["Vue"], repo: "https://github.com/pguetschow/warhammer-40k-stratagem-card-generator", live: "https://stratagemprint40k.app",
  },
  {
    category: "tabletop", name: "Yellowscribe", year: 2026, note: "Contributor · 8 commits",
    blurb: "Converts army lists into Tabletop Simulator armies. Contributed features through merged pull requests.",
    tags: ["JavaScript", "Tabletop Simulator"], repo: "https://github.com/ThePants999/Yellowscribe",
  },
  {
    category: "tabletop", name: "EVE PI Templates", year: 2026,
    blurb: "Planetary Interaction layout templates for EVE Online, covering P0 through P3 production chains.",
    tags: ["Python", "EVE Online"], repo: "eve-pi-templates",
  },

  // ---------- Marine ----------
  {
    category: "marine", name: "Iona Toolbox", year: 2021, featured: true,
    blurb: "Offline-capable progressive web app for use on board, with encrypted valve and system data that crew can look up from a phone.",
    tags: ["PWA", "JavaScript", "Encryption"], repo: "iona-toolbox",
  },
  {
    category: "marine", name: "Sounding Tables", year: 2022,
    blurb: "Calculates tank contents from soundings. Drop in CSV calibration tables for ballast, fuel, diesel, sludge, bilge and water tanks and they load into the UI automatically.",
    tags: ["Python", "Desktop"], repo: "sounding-tables-iona",
  },
  {
    category: "marine", name: "QM2 Tools", year: 2019,
    blurb: "Earlier web-app version of the onboard toolbox, built for Queen Mary 2.",
    tags: ["PWA", "JavaScript"], repo: "qm2-tools-webapp",
  },
  {
    category: "marine", name: "Valve Register", year: 2019,
    blurb: "Searchable desktop register of shipboard valves backed by a CSV list.",
    tags: ["Python", "Desktop"], repo: "valve-register",
  },

  // ---------- Audio & media ----------
  {
    category: "audio", name: "X-Air Python", year: 2026, featured: true,
    blurb: "Open-source app for controlling Behringer X-Air and X32 digital mixers (XR12, XR16, XR18, X18) over OSC.",
    tags: ["Python", "OSC", "Audio"], repo: "x-air-python",
  },
  {
    category: "audio", name: "MOXF Editor", year: 2020,
    blurb: "Browser-based editor and librarian for the Yamaha MOXF synthesizer.",
    tags: ["JavaScript", "Web MIDI"], repo: "moxf-editor", live: "https://josephdouce.github.io/moxf-editor/",
  },
  {
    category: "audio", name: "FFmpeg Library Optimizer", year: 2022,
    blurb: "Scans a media library, reports codecs, moves the moov atom so files play quickly on the web, and transcodes anything that isn't H.264/AAC.",
    tags: ["Python", "FFmpeg", "CLI"], repo: "ffmpeg-library-optimizer",
  },

  // ---------- Early ----------
  {
    category: "early", name: "Alexa + IFTTT UK", year: 2017,
    blurb: "Connected Amazon Alexa to IFTTT for UK users before an official integration existed. Includes a write-up on Hackster.",
    tags: ["Python", "AWS Lambda", "Alexa"], repo: "alexa-ifttt-uk", live: "https://www.hackster.io/joseph-douce/alexa-aws-ifttt-uk-e4499b",
  },
  {
    category: "early", name: "Alexa Find Any Film", year: 2017,
    blurb: "Alexa skill that reads out UK cinema listings: \"Alexa, ask films what's playing in Leeds on Friday\".",
    tags: ["Python", "AWS Lambda", "Alexa"], repo: "alexa-find-any-film",
  },
  {
    category: "early", name: "British Gas Hive Gem", year: 2018,
    blurb: "Ruby gem for the British Gas Hive smart heating API, published on RubyGems.",
    tags: ["Ruby", "API"], repo: "rubygem-british-gas-hive", live: "https://rubygems.org/gems/BritishGasHive",
  },
];
