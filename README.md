# Milky Launcher — Official Web Experience

<div align="center">

[![Live Website](https://img.shields.io/badge/Live_Website-milky--launcher.vercel.app-7928CA?style=for-the-badge&logo=vercel&logoColor=white)](https://milky-launcher.vercel.app/)
[![Privacy Policy](https://img.shields.io/badge/Privacy_Policy-Google_Play_Compliant-01875F?style=for-the-badge&logo=googleplay&logoColor=white)](https://milky-launcher.vercel.app/privacy)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Android App](https://img.shields.io/badge/Android_Target-API_36_%2F_Android_15-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://github.com/Spyou)

<p align="center">
  <strong>Dark, quiet, and out of the way.</strong><br>
  Official product showcase and Google Play compliance hub for <strong>Milky Launcher</strong> — an ultra-fluid Android home screen launcher built 100% natively with Jetpack Compose.
</p>

[**Explore Live Website**](https://milky-launcher.vercel.app/) • [**Read Privacy Policy**](https://milky-launcher.vercel.app/privacy) • [**Telegram Community**](https://t.me/milkylc)

</div>

---

## 🌌 Overview

**Milky Launcher Web** is the official responsive web application and product portal for [Milky Launcher](https://milky-launcher.vercel.app/). Designed with a cosmic, deep-space glassmorphism aesthetic, it showcases the launcher's features, previews native Compose widgets, counts down to the Google Play target launch, and hosts the official Google Play Privacy Policy.

- 🌐 **Live Website**: [https://milky-launcher.vercel.app/](https://milky-launcher.vercel.app/)
- 🛡️ **Privacy Policy**: [https://milky-launcher.vercel.app/privacy](https://milky-launcher.vercel.app/privacy)
- 🚀 **Target Google Play Launch**: November 19, 2026

---

## ✨ Features

- **Cosmic Glass Design System**: Deep indigo void tones (`#070A14`), nebula glassmorphism panels, specular rim highlights, and ambient cosmic glow effects.
- **Launch Countdown**: Live countdown timer ticking down to the target Google Play release date.
- **Interactive Feature Showcase**:
  - Multi-Page Workspaces with custom page management
  - OmniSearch command palette (fuzzy scoring, inline math calculator, quick toggles, secret vault codes)
  - 22 native Jetpack Compose custom widgets (Music Player, Celestial Sun Tracker, Progress Clocks, Dot Matrix Battery)
  - Privacy Vault (App Lock, Intruder Selfie, Hidden Apps Vault)
  - Apple Glass UI, AMOLED Pure Black, and Material You dynamic color
- **Google Play Compliant Privacy Hub**:
  - Interactive React SPA privacy policy with real-time permission search filter.
  - Complete, transparent disclosures for all declared Android permissions (`INTERNET`, `BILLING`, `CAMERA`, `USE_BIOMETRIC`, `POST_NOTIFICATIONS`, `BIND_NOTIFICATION_LISTENER_SERVICE`, etc.).
  - Detailed third-party SDK transparency covering AdMob (`ca-app-pub-8300386079649281~5905394290`), OneSignal, Firebase BoM 33.10.0, and Google Play Billing 8.0.0.
  - Local-first data architecture details and user data deletion guides.
- **Mobile Responsive Engineering**:
  - Optimized for devices down to 320px width.
  - Zero horizontal overflow, word-wrapping for long permission strings, compact mobile header, and touch-scrolling data tables.
  - Dedicated mobile quick-jump table of contents.
- **Vercel SPA Routing**: Zero-config client-side routing fallback via `vercel.json` ensuring deep links and page refreshes on `/privacy` never return 404.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite 8](https://vite.dev/) |
| **Styling** | Vanilla CSS Design System (Custom Cosmic Tokens & Spring Motion) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)) |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
Milky-Launcher-web/
├── public/
│   ├── favicon.svg              # Browser favicon
│   ├── logo.svg                 # Milky Launcher SVG brand mark
│   ├── milky-icon-round.webp    # High-res adaptive round icon
│   ├── privacy.html             # Standalone static HTML privacy policy fallback
│   ├── robots.txt               # Search engine crawler rules
│   └── sitemap.xml              # SEO sitemap with / and /privacy
├── src/
│   ├── components/
│   │   ├── Architecture.jsx     # Compose architecture highlights
│   │   ├── Developers.jsx       # Team profiles and studio links
│   │   ├── DownloadLaunch.jsx   # Google Play countdown & launch section
│   │   ├── Features.jsx         # Launcher capability showcase
│   │   ├── Footer.jsx           # Cosmic footer with quick links
│   │   ├── Hero.jsx             # Hero section with primary CTA
│   │   ├── InteractiveSimulator.jsx # Interactive device preview
│   │   └── Navbar.jsx           # Glass navigation bar
│   ├── App.css                  # Landing page animations and layout styles
│   ├── App.jsx                  # Main application with client-side SPA routing
│   ├── index.css                # Global design tokens, themes & resets
│   ├── main.jsx                 # React entry point
│   ├── PrivacyPolicy.css        # Responsive privacy policy stylesheet
│   └── PrivacyPolicy.jsx        # Google Play Privacy Policy React component
├── index.html                   # HTML entry point with Open Graph & JSON-LD metadata
├── vercel.json                  # Vercel SPA rewrites configuration (routes to /index.html)
└── vite.config.js               # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `pnpm`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/satyakiran29/Milky-Launcher-web.git
cd Milky-Launcher-web
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173/
```

To view the privacy policy directly:
```
http://localhost:5173/privacy
```

### Building for Production

Create an optimized production build in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment on Vercel

This project is configured for deployment on [Vercel](https://vercel.com/).

Because Milky Launcher is a client-side Single Page Application (SPA), [`vercel.json`](./vercel.json) ensures that direct navigation or browser refreshes on routes like `/privacy` route to `/index.html`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Whenever commits are pushed to the `main` branch, Vercel automatically builds and redeploys the site at [https://milky-launcher.vercel.app/](https://milky-launcher.vercel.app/).

---

## 👥 Developers & Credits

Milky Launcher and its web experience are designed and developed with care by:

- **Krishna Vishwakarma** — Android Architecture & Jetpack Compose Lead • [GitHub](https://github.com/Spyou)
- **Satyakiran** — Product Design, Cosmic Tokens, Web & Core Systems at **skdevs** • [GitHub](https://github.com/satyakiran29) • [Studio Website](https://skdev.psatyakiran.in/)

### Join the Community

- **Official Telegram Group**: [@milkylc](https://t.me/milkylc)
- **Support & Privacy Inquiries**: [satyakiran296@gmail.com](mailto:satyakiran296@gmail.com)

---

<div align="center">
  <sub>© 2026 Milky Launcher. Developed by Krishna Vishwakarma &amp; Satyakiran (skdevs). Target Google Play Launch: November 19, 2026.</sub>
</div>
