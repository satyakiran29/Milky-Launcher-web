import React, { useState, useMemo } from 'react';
import './PrivacyPolicy.css';
import {
  Shield,
  ShieldCheck,
  Camera,
  Bell,
  HardDrive,
  Fingerprint,
  Trash2,
  CheckCircle2,
  ExternalLink,
  ArrowLeft,
  Search,
  Printer,
  Copy,
  Check,
  Send,
  FileText,
  Smartphone,
  Layers,
  Radio,
  Mail,
  Wifi,
  CreditCard,
  Lock,
  Globe,
  Activity,
  FolderLock,
  Share2
} from 'lucide-react';

const sections = [
  { id: 'summary', title: '1. Privacy at a Glance & Scope' },
  { id: 'data-handling', title: '2. Local-First Architecture & Network Scope' },
  { id: 'permissions', title: '3. Complete Permissions Declared' },
  { id: 'camera', title: '4. Camera Access & Intruder Selfie Policy' },
  { id: 'notifications', title: '5. Notification Listener Service Policy' },
  { id: 'installed-apps', title: '6. Installed Applications & Package Visibility' },
  { id: 'biometrics', title: '7. Biometric Authentication & App Lock' },
  { id: 'storage', title: '8. Storage, Wallpapers & Local Backups' },
  { id: 'third-parties', title: '9. Third-Party SDKs & Advertising Disclosures' },
  { id: 'data-deletion', title: '10. Data Retention & Autonomous Erasure' },
  { id: 'children', title: '11. Children’s Privacy (COPPA & GDPR-K)' },
  { id: 'security', title: '12. Security Architecture & Sandboxing' },
  { id: 'compliance', title: '13. Google Play & Global Compliance' },
  { id: 'contact', title: '14. Contact & Developer Information' },
];

const highlights = [
  {
    icon: <HardDrive size={22} className="highlight-icon text-cyan" />,
    title: '100% Local-First Storage',
    description: 'Home grids, custom folders, enlarged tiles, dock setups, and hidden apps reside solely on your device in private Room & DataStore.',
    badge: 'On-Device Storage'
  },
  {
    icon: <Lock size={22} className="highlight-icon text-purple" />,
    title: 'Hardware Biometrics & Vault',
    description: 'App Lock and Hidden Apps Vault utilize Android hardware-backed BiometricPrompt. No biometric data ever reaches Milky Launcher.',
    badge: 'Hardware Security'
  },
  {
    icon: <ShieldCheck size={22} className="highlight-icon text-emerald" />,
    title: 'Transparent SDK Disclosures',
    description: 'AdMob, Firebase, OneSignal, and Google Play Billing are declared with exact justifications and zero personal data selling.',
    badge: 'Play Store Compliant'
  },
  {
    icon: <Trash2 size={22} className="highlight-icon text-amber" />,
    title: 'Autonomous Data Erasure',
    description: 'Delete intruder photos anytime, reset launcher preferences, export local backups, or uninstall to wipe 100% of data instantly.',
    badge: 'User Controlled'
  }
];

const permissionsList = [
  {
    name: 'android.permission.INTERNET',
    label: 'Network Access',
    icon: <Wifi size={20} />,
    status: 'Standard Network Permission',
    purpose: 'Powers AdMob settings banner ads, OneSignal push alerts, Google Play Billing verification, and optional external search fallback in OmniSearch.',
    dataAccess: 'Transmits anonymous diagnostic requests and ad requests via Google Mobile Ads & Firebase. Never uploads user app lists or personal files.',
    storage: 'Network responses cached in standard application cache; zero personal profiling data stored remotely by Milky Launcher.',
    revocation: 'Standard Android permission.'
  },
  {
    name: 'com.android.vending.BILLING',
    label: 'Google Play In-App Billing',
    icon: <CreditCard size={20} />,
    status: 'Google Play Service',
    purpose: 'Facilitates secure purchases for Milky Launcher Pro (unlocking advanced features) and voluntary developer support donations.',
    dataAccess: 'Purchase tokens and entitlement verification are handled entirely by the official Google Play Billing Library 8.0.0.',
    storage: 'Pro unlock state cached locally in encrypted DataStore preferences. Payment cards and banking details are never seen or stored by Milky Launcher.',
    revocation: 'Manage active subscriptions and purchases via Google Play Store > Subscriptions.'
  },
  {
    name: 'android.permission.POST_NOTIFICATIONS',
    label: 'Push Notifications (Android 13+)',
    icon: <Bell size={20} />,
    status: 'Runtime Permission (Opt-In)',
    purpose: 'Delivers launcher updates, major version releases, changelogs, and critical announcement notifications via OneSignal.',
    dataAccess: 'Generates an anonymous device push notification token with OneSignal. No personal messaging or device identity attached.',
    storage: 'Token stored on OneSignal cloud servers for message dispatch. Discarded upon app uninstallation.',
    revocation: 'Can be toggled off anytime in Android Settings > Apps > Milky Launcher > Notifications.'
  },
  {
    name: 'android.permission.REQUEST_DELETE_PACKAGES',
    label: 'App Uninstallation Intent',
    icon: <Layers size={20} />,
    status: 'Normal Protection Level',
    purpose: 'Enables launching Android’s official uninstallation confirmation prompt when you select "Uninstall" from an app icon’s long-press menu.',
    dataAccess: 'Hands off the target package name to Android PackageInstaller. Milky Launcher cannot uninstall apps silently without user confirmation.',
    storage: 'No data stored.',
    revocation: 'Built-in launcher action.'
  },
  {
    name: 'android.permission.USE_BIOMETRIC',
    label: 'Biometric Authentication',
    icon: <Fingerprint size={20} />,
    status: 'Hardware Enclave API',
    purpose: 'Allows unlocking locked applications, the Hidden Apps Vault, and launcher settings using fingerprint or face authentication.',
    dataAccess: 'Delegates strictly to Android native BiometricPrompt API. Milky Launcher NEVER sees or processes fingerprint scans or facial geometry.',
    storage: 'Biometric credentials stay safely in the device hardware Secure Element / Trusted Execution Environment (TEE).',
    revocation: 'Toggle off anytime in Milky Launcher Settings > App Lock.'
  },
  {
    name: 'android.permission.CAMERA',
    label: 'Camera Access (Intruder Selfie)',
    icon: <Camera size={20} />,
    status: 'Optional Runtime Permission',
    purpose: 'Exclusively powers the optional "Intruder Selfie" feature under App Lock, capturing a silent front-facing snapshot after 3 consecutive failed unlock attempts.',
    dataAccess: 'Captures a single front-camera snapshot via Camera2 API only when explicitly enabled by user in App Lock settings.',
    storage: 'Saved strictly in private app-internal storage (context.filesDir/intruder_photos). Never uploaded, never synced to cloud, user-deletable at any time.',
    revocation: 'Can be revoked anytime in Android Settings > Apps > Milky Launcher > Permissions.'
  },
  {
    name: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
    label: 'Notification Listener (MilkyNotificationListener)',
    icon: <Bell size={20} />,
    status: 'Special System Access',
    purpose: 'Computes unread notification counts for app icon badges/dots and provides live playback controls for the built-in Music Player Compose widget.',
    dataAccess: 'Reads active StatusBarNotification events (app package, title snippet, count) strictly in volatile in-memory Kotlin StateFlow.',
    storage: 'Processed entirely in RAM. NEVER written to disk, database, or transmitted remotely. Purged instantly when notification is dismissed.',
    revocation: 'Disable anytime in Android Settings > Apps > Special App Access > Notification Access.'
  },
  {
    name: 'READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE',
    label: 'Media & Wallpaper Access',
    icon: <HardDrive size={20} />,
    status: 'User-Initiated Media Picker',
    purpose: 'Allows selecting custom gallery wallpapers and loading third-party icon pack assets.',
    dataAccess: 'Accesses only the specific image or icon file selected by you through Android’s system document picker.',
    storage: 'Wallpaper bitmaps cached locally in app cache directory. No background scanning of device photos or files.',
    revocation: 'Manageable under system app permissions.'
  },
  {
    name: 'android.permission.MANAGE_EXTERNAL_STORAGE',
    label: 'Backup & Restore Management',
    icon: <FolderLock size={20} />,
    status: 'User-Prompted Storage Access',
    purpose: 'Allows exporting and importing full home screen layout backups (JSON format including grid positions, widgets, and dock slots) to device storage.',
    dataAccess: 'Reads and writes only Milky Launcher backup files created in your designated backup directory.',
    storage: 'Maintained 100% locally under user control.',
    revocation: 'Can be disabled in Android Settings > Special App Access > All Files Access.'
  },
  {
    name: 'android.permission.BIND_APPWIDGET',
    label: 'AppWidget Host Binding',
    icon: <Smartphone size={20} />,
    status: 'Standard Launcher Host API',
    purpose: 'Binds and displays third-party Android home screen widgets on your multi-page workspace pages using LauncherAppWidgetHost.',
    dataAccess: 'Exchanges standard widget layout measurements with Android AppWidgetManager.',
    storage: 'Widget provider identifiers and grid coordinates saved in local Room SQLite database.',
    revocation: 'Delete individual widgets from your home screen at any time.'
  },
  {
    name: 'android.permission.PACKAGE_USAGE_STATS',
    label: 'Usage Stats & Smart Categories',
    icon: <Activity size={20} />,
    status: 'Special App Access (Opt-In)',
    purpose: 'Powers smart automatic category sorting in the app drawer (Social, Games, Media, Tools) and detects foreground app transitions for the App Lock feature.',
    dataAccess: 'Queries Android UsageStatsManager locally on device to determine launch frequency and active foreground package.',
    storage: 'Aggregated frequency scores stored in local SQLite database. Never sent to any external server or advertiser.',
    revocation: 'Revoke anytime in Android Settings > Apps > Special App Access > Usage Access.'
  }
];

export default function PrivacyPolicy({ onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const lastUpdated = 'October 22, 2026';
  const effectiveDate = 'October 22, 2026';
  const appVersion = '0.1.0';

  const copyPageUrl = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredPermissions = useMemo(() => {
    if (!searchQuery.trim()) return permissionsList;
    const q = searchQuery.toLowerCase();
    return permissionsList.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.label.toLowerCase().includes(q) ||
        p.purpose.toLowerCase().includes(q) ||
        p.dataAccess.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="privacy-page-wrapper">
      {/* Cosmic background glow */}
      <div className="cosmic-ambient-glow" />

      {/* Top Header */}
      <header className="privacy-header">
        <div className="header-inner">
          <div className="header-left">
            <button 
              onClick={onNavigateHome} 
              className="back-home-btn"
              title="Return to Milky Launcher Homepage"
              aria-label="Back to Homepage"
            >
              <ArrowLeft size={16} />
              <span className="btn-text-full">Back to Home</span>
              <span className="btn-text-short">Back</span>
            </button>
            
            <div className="header-brand-divider" />

            <div className="header-brand-mini" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
              <img 
                src="/logo.svg" 
                alt="Milky Launcher Icon" 
                className="brand-logo-mini" 
              />
              <div className="brand-text-col">
                <span className="brand-name-mini">Milky Launcher</span>
                <span className="brand-sub-mini">Privacy Policy</span>
              </div>
            </div>
          </div>

          <div className="header-actions">
            <button 
              onClick={copyPageUrl} 
              className="action-pill-btn"
              title="Copy URL to clipboard"
            >
              {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              <span className="btn-action-label">{copied ? 'Copied Link!' : 'Share Policy'}</span>
            </button>

            <button 
              onClick={handlePrint} 
              className="action-pill-btn print-hide"
              title="Print or Save PDF"
            >
              <Printer size={14} />
              <span className="btn-action-label">Print / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="privacy-main-container">
        {/* Hero Section */}
        <div className="privacy-hero glass-panel">
          <div className="hero-badge-row">
            <span className="compliance-badge">
              <ShieldCheck size={15} />
              <span>Google Play Compliant</span>
            </span>
            <span className="version-pill">v{appVersion} Production</span>
            <span className="package-pill">com.skdevs.milkylauncher</span>
          </div>

          <h1 className="privacy-hero-title">Privacy Policy</h1>
          <p className="privacy-hero-subtitle">
            Official Privacy & Data Protection Policy for <strong>Milky Launcher</strong> on Google Play. 
            Engineered with a local-first architecture, transparent permissions, hardware biometrics, and verified third-party disclosures.
          </p>

          <div className="meta-info-grid">
            <div className="meta-item">
              <span className="meta-label">Application</span>
              <span className="meta-value">Milky Launcher (v{appVersion})</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Package Name</span>
              <span className="meta-value code-snippet">com.skdevs.milkylauncher</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Developers</span>
              <span className="meta-value">Krishna Vishwakarma &amp; Satyakiran (skdevs)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Effective Date</span>
              <span className="meta-value">{effectiveDate}</span>
            </div>
          </div>
        </div>

        {/* Highlights Row */}
        <section className="highlights-section" aria-label="Privacy Highlights">
          <div className="highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card glass-panel">
                <div className="highlight-header">
                  {item.icon}
                  <span className="highlight-badge">{item.badge}</span>
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Quick Jump Table of Contents */}
        <div className="mobile-toc-container print-hide">
          <details className="mobile-toc-details glass-panel">
            <summary className="mobile-toc-summary">
              <span className="mts-title">
                <FileText size={15} />
                <span>Table of Contents</span>
              </span>
              <span className="mts-badge">14 Sections</span>
            </summary>
            <nav className="mobile-toc-nav" aria-label="Mobile table of contents">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="mobile-toc-link"
                  onClick={(e) => {
                    const details = e.currentTarget.closest('details');
                    if (details) details.removeAttribute('open');
                  }}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </details>
        </div>

        {/* Content Layout with Table of Contents */}
        <div className="privacy-content-layout">
          {/* Sidebar Navigation */}
          <aside className="privacy-sidebar print-hide">
            <div className="sidebar-sticky glass-panel">
              <h2 className="sidebar-title">
                <FileText size={15} />
                <span>Table of Contents</span>
              </h2>
              <nav className="toc-nav" aria-label="Table of contents">
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="toc-link">
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="sidebar-contact-box">
                <div className="sc-header">
                  <Shield size={14} className="text-emerald" />
                  <span>Privacy Inquiries</span>
                </div>
                <p className="sc-text">Questions regarding privacy or Google Play disclosures?</p>
                <a 
                  href="https://t.me/milkylc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sc-btn"
                >
                  <Send size={12} />
                  <span>Telegram @milkylc</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <article className="privacy-article glass-panel">

            {/* Section 1 */}
            <section id="summary" className="policy-section">
              <h2 className="section-title">1. Privacy at a Glance & Scope</h2>
              <p>
                Welcome to <strong>Milky Launcher</strong> (“the App”), an Android home screen launcher 
                developed by <strong>Krishna Vishwakarma and Satyakiran (skdevs)</strong>.
              </p>
              <p>
                This Privacy Policy establishes clear, legally binding, and complete disclosures regarding how Milky Launcher 
                accesses, handles, stores, and protects user data and device permissions. We believe your launcher is your daily digital sanctuary. 
                Our architectural principle is <strong>local-first processing</strong>: your customized home grids, custom folders, app layouts, 
                and settings reside on your device.
              </p>

              <div className="callout callout-success">
                <CheckCircle2 size={20} className="callout-icon" />
                <div className="callout-content">
                  <strong>Core Promise:</strong> Milky Launcher never sells, rents, or monetizes personal data. 
                  All personal customizations, hidden apps, and intruder photos remain in private device-sandboxed storage. 
                  Third-party services (AdMob, OneSignal, Firebase, and Google Play Billing) are strictly restricted to their designated utility functions.
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="data-handling" className="policy-section">
              <h2 className="section-title">2. Local-First Architecture & Network Scope</h2>
              <p>
                Milky Launcher is built with a modular clean architecture in Kotlin and Jetpack Compose. 
                Data generated by the launcher is partitioned between strictly local databases and verified external endpoints:
              </p>
              
              <h3>Local Device Storage</h3>
              <ul>
                <li>
                  <strong>SQLite Room Database (<code>MilkyDatabase</code>):</strong> Stores home screen page counts, mathematical grid coordinates, 
                  custom folder structures, 2x2 enlarged folder configurations, dock icon slots, and hidden application lists.
                </li>
                <li>
                  <strong>Jetpack DataStore Preferences:</strong> Persists appearance settings, AMOLED Pure Black toggles, 
                  Apple Glass acrylic styles, icon shapes, dock background opacity, and app lock preferences.
                </li>
                <li>
                  <strong>Zero Personal Data Cloud Upload:</strong> Milky Launcher maintains no proprietary cloud servers, user accounts, 
                  or external databases. Your device state remains in your device storage sandbox.
                </li>
              </ul>

              <h3>Network Access Scope (<code>android.permission.INTERNET</code>)</h3>
              <p>
                Network communication is invoked strictly for the following verified functions:
              </p>
              <ul>
                <li>
                  <strong>AdMob Banner Display:</strong> Serving non-intrusive banner advertisements inside launcher settings via Google Mobile Ads SDK.
                </li>
                <li>
                  <strong>Push Notification Service:</strong> Receiving release notes, changelogs, and version announcements via OneSignal SDK.
                </li>
                <li>
                  <strong>In-App Billing Validation:</strong> Verifying Milky Launcher Pro entitlement status and processing voluntary donations via Google Play Billing.
                </li>
                <li>
                  <strong>Anonymous Diagnostic Analytics:</strong> Firebase Analytics telemetry for aggregate crash detection and scroll performance monitoring.
                </li>
                <li>
                  <strong>Web Search Redirection:</strong> Optional user-tapped web search button in OmniSearch, which launches your external default web browser.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="permissions" className="policy-section">
              <h2 className="section-title">3. Complete Permissions Declared</h2>
              <p>
                To provide Android home screen replacement features and device security, Milky Launcher declares specific Android 
                permissions in its manifest (<code>app/src/main/AndroidManifest.xml</code>). In compliance with <strong>Google Play’s User Data &amp; Permissions Policy</strong>, 
                each permission, its exact justification, and its on-device scope are detailed below:
              </p>

              {/* Search Filter for Permissions */}
              <div className="perm-search-box print-hide">
                <Search size={16} className="perm-search-icon" />
                <input 
                  type="text"
                  placeholder="Filter permissions (e.g., Camera, Internet, Billing, Notifications)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="perm-search-input"
                  aria-label="Filter declared permissions"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="perm-clear-btn"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="permissions-cards-grid">
                {filteredPermissions.map((perm, idx) => (
                  <div key={idx} className="perm-card">
                    <div className="perm-card-header">
                      <div className="perm-icon-wrapper">
                        {perm.icon}
                      </div>
                      <div className="perm-card-title-col">
                        <span className="perm-label">{perm.label}</span>
                        <code className="perm-name">{perm.name}</code>
                      </div>
                      <span className="perm-status-tag">{perm.status}</span>
                    </div>

                    <div className="perm-details-grid">
                      <div className="perm-row">
                        <span className="perm-field">Purpose:</span>
                        <span className="perm-value">{perm.purpose}</span>
                      </div>
                      <div className="perm-row">
                        <span className="perm-field">Data Handled:</span>
                        <span className="perm-value">{perm.dataAccess}</span>
                      </div>
                      <div className="perm-row">
                        <span className="perm-field">Storage &amp; Scope:</span>
                        <span className="perm-value">{perm.storage}</span>
                      </div>
                      <div className="perm-row">
                        <span className="perm-field">Revocation / Control:</span>
                        <span className="perm-value">{perm.revocation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="camera" className="policy-section">
              <h2 className="section-title">4. Camera Access & Intruder Selfie Policy</h2>
              <p>
                Milky Launcher includes an optional, security-focused feature called <strong>App Lock Intruder Selfie</strong>.
              </p>
              
              <div className="callout callout-info">
                <Camera size={20} className="callout-icon" />
                <div className="callout-content">
                  <strong>Prominent Disclosure:</strong> The camera is <em>only</em> invoked if you navigate to 
                  <code>Settings &gt; App Lock</code>, enable the <em>Intruder Selfie</em> toggle, and grant Android’s runtime 
                  Camera permission prompt.
                </div>
              </div>

              <h3>How the Intruder Selfie Feature Operates:</h3>
              <ol>
                <li>
                  <strong>Trigger Condition:</strong> When App Lock is active, if an incorrect PIN, password, or pattern 
                  is entered <strong>3 consecutive times</strong>, the launcher activates the front-facing camera via Android’s 
                  <code>Camera2 API</code> to capture a single silent security snapshot of the unauthorized user.
                </li>
                <li>
                  <strong>Private App Storage Only:</strong> The photo is saved strictly into the application’s private internal storage directory 
                  (<code>context.filesDir/intruder_photos</code>). This directory is protected by Android OS application sandboxing and cannot 
                  be accessed by third-party applications without root access.
                </li>
                <li>
                  <strong>Zero Network Transmission:</strong> Captured images are <strong>never</strong> uploaded to cloud storage, never sent over the internet, 
                  and never visible to anyone other than the device owner.
                </li>
                <li>
                  <strong>User Inspection &amp; Deletion:</strong> You can review all captured photos inside Milky Launcher’s App Lock settings. 
                  You can delete individual photos or tap <em>"Clear All Intruder Photos"</em> at any time. Revoking Camera permissions or uninstalling 
                  the app instantly erases all stored photos.
                </li>
              </ol>
            </section>

            {/* Section 5 */}
            <section id="notifications" className="policy-section">
              <h2 className="section-title">5. Notification Listener Service Policy</h2>
              <p>
                Milky Launcher declares <code>MilkyNotificationListener</code>, an Android 
                <code>NotificationListenerService</code>, to support home screen notification badges and Compose widget integrations.
              </p>
              
              <div className="callout callout-info">
                <Bell size={20} className="callout-icon" />
                <div className="callout-content">
                  <strong>Prominent Disclosure:</strong> Android requires you to explicitly grant Notification Access in 
                  System Settings before this service can bind. Milky Launcher prompts you only if you turn on notification badges.
                </div>
              </div>

              <h3>Scope of Notification Data Usage:</h3>
              <ul>
                <li>
                  <strong>Unread Counts &amp; Badges:</strong> The service receives active <code>StatusBarNotification</code> events to compute unread 
                  counts for each installed application and display notification dots or numeric badges over that app’s icon.
                </li>
                <li>
                  <strong>Interactive Music Player Widget:</strong> Extracts playback status, track title, and artist name to provide live animated equalizer 
                  bars and playback controls on the home screen.
                </li>
                <li>
                  <strong>Volatile Memory Only (RAM):</strong> All notification metadata is maintained strictly in volatile RAM 
                  (in-memory Kotlin <code>StateFlow</code>). It is <strong>never written to a Room database or permanent file storage</strong>.
                </li>
                <li>
                  <strong>Immediate Wiping:</strong> The moment a notification is dismissed by you or cancelled by the originating application, 
                  it is purged from memory immediately.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="installed-apps" className="policy-section">
              <h2 className="section-title">6. Installed Applications & Package Visibility</h2>
              <p>
                As an Android home screen replacement, Milky Launcher interacts with installed packages on your device:
              </p>
              <ul>
                <li>
                  <strong>Official LauncherApps Framework:</strong> Milky Launcher uses Android’s official <code>LauncherApps</code> system API 
                  (rather than broad package queries) to discover launchable applications, load high-resolution adaptive icons, 
                  and support Android Work Profiles with enterprise badges.
                </li>
                <li>
                  <strong>Uninstall Requests (REQUEST_DELETE_PACKAGES):</strong> When you long-press an app and select <em>"Uninstall"</em>, 
                  Milky Launcher requests the Android system’s official uninstallation confirmation prompt. The operating system handles 
                  the removal; Milky Launcher cannot uninstall applications silently.
                </li>
                <li>
                  <strong>Smart App Categorization:</strong> Using <code>ApplicationInfo.category</code> and local usage statistics, apps are grouped into categories 
                  (Google, Social, Media, Games, Tools, Work). This classification is calculated 100% on-device.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="biometrics" className="policy-section">
              <h2 className="section-title">7. Biometric Authentication & App Lock</h2>
              <p>
                Milky Launcher allows you to protect individual applications, hidden app drawers, and launcher preferences with biometric security:
              </p>
              <ul>
                <li>
                  <strong>USE_BIOMETRIC Permission:</strong> Enables invoking Android’s native <code>BiometricPrompt</code> API (Fingerprint / Face Unlock).
                </li>
                <li>
                  <strong>No Biometric Data Access:</strong> Milky Launcher <strong>never receives, processes, or stores your biometric information</strong> 
                  (such as fingerprint scans or facial feature maps). Biometric verification is performed by Android’s hardware-level 
                  Trusted Execution Environment (TEE) / Secure Element. The OS solely provides Milky Launcher with a boolean authentication result 
                  (Success or Failure).
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="storage" className="policy-section">
              <h2 className="section-title">8. Storage, Wallpapers & Local Backups</h2>
              <p>
                Milky Launcher interacts with device storage solely upon your direct initiative:
              </p>
              <ul>
                <li>
                  <strong>Wallpapers &amp; Icons:</strong> When you select a custom wallpaper or apply a third-party icon pack, 
                  Milky Launcher reads only the selected assets chosen via the system document picker.
                </li>
                <li>
                  <strong>Local Backup &amp; Restore:</strong> Milky Launcher includes a feature to export your home screen grid, shortcuts, 
                  and preferences to a local JSON backup file. This file is saved in your device's Downloads or user-designated folder. 
                  You maintain complete custody of this file; it is never automatically uploaded to any cloud service.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="third-parties" className="policy-section">
              <h2 className="section-title">9. Third-Party SDKs & Advertising Disclosures</h2>
              <p>
                In strict compliance with <strong>Google Play’s Developer Program Policies on Third-Party SDKs and Monetization</strong>, 
                Milky Launcher uses the following verified third-party libraries:
              </p>
              
              <div className="table-responsive-wrapper">
                <table className="policy-table">
                  <thead>
                    <tr>
                      <th>Service / SDK</th>
                      <th>Identifier / Version</th>
                      <th>Purpose</th>
                      <th>Data Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Google Mobile Ads (AdMob)</strong></td>
                      <td><code>ca-app-pub-8300386079649281~5905394290</code> (SDK 23.6.0)</td>
                      <td>Displays non-intrusive banner ads in Settings</td>
                      <td>Advertising ID (if enabled), coarse device metrics, diagnostics</td>
                    </tr>
                    <tr>
                      <td><strong>OneSignal Push</strong></td>
                      <td><code>a991bcf0-7e69-456b-955a-1e90ae7e7847</code> (SDK 5.10.2)</td>
                      <td>Delivers feature updates, changelogs, and release alerts</td>
                      <td>Anonymous device push token, Android OS version</td>
                    </tr>
                    <tr>
                      <td><strong>Google Play Billing</strong></td>
                      <td>Google Play Billing Library 8.0.0</td>
                      <td>Processes Milky Launcher Pro upgrades and donations</td>
                      <td>Purchase tokens verified by Google Play; no credit card data</td>
                    </tr>
                    <tr>
                      <td><strong>Firebase Analytics</strong></td>
                      <td>Firebase BoM 33.10.0</td>
                      <td>Anonymous app stability and crash rate diagnostics</td>
                      <td>Aggregate performance telemetry, device model, crash stacks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="sub-policy-text">
                For more details on how these providers handle information, please consult 
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="inline-link"> Google’s Advertising Privacy Policy</a> and 
                <a href="https://onesignal.com/privacy_policy" target="_blank" rel="noopener noreferrer" className="inline-link"> OneSignal’s Privacy Policy</a>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="data-deletion" className="policy-section">
              <h2 className="section-title">10. Data Retention & Autonomous Erasure</h2>
              <p>
                Because all user preferences and configurations reside locally on your device, <strong>you possess full autonomy over data retention and permanent deletion:</strong>
              </p>
              <div className="deletion-steps-card">
                <h3>How to Erase Your Data:</h3>
                <ul>
                  <li>
                    <strong>Clear Intruder Selfies:</strong> Open Milky Launcher <code>Settings &gt; App Lock &gt; Intruder Photos</code> and tap <em>"Clear All Photos"</em>.
                  </li>
                  <li>
                    <strong>Reset All Launcher Data:</strong> Go to Android <code>Settings &gt; Apps &gt; Milky Launcher &gt; Storage &amp; Cache &gt; Clear Storage</code>. 
                    This permanently wipes all local SQLite databases, DataStore preferences, cached icons, and intruder photos.
                  </li>
                  <li>
                    <strong>Opt Out of Personalized Ads:</strong> In Android <code>Settings &gt; Google &gt; Ads</code>, tap <em>"Delete Advertising ID"</em> to prevent AdMob from delivering interest-based advertisements.
                  </li>
                  <li>
                    <strong>Uninstall the App:</strong> Drag Milky Launcher to <em>"Uninstall"</em> or remove it via Google Play. 
                    The Android operating system will immediately purge all internal application data directories, sandboxes, and databases.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section id="children" className="policy-section">
              <h2 className="section-title">11. Children’s Privacy (COPPA & GDPR-K Compliance)</h2>
              <p>
                Milky Launcher is a general audience personalization tool and is not directed to children under 13 years of age 
                (or under 16 in the European Economic Area). The app does not knowingly collect or solicit personal information from children. 
                We comply with the <strong>Children’s Online Privacy Protection Act (COPPA)</strong> and European GDPR-K guidelines.
              </p>
            </section>

            {/* Section 12 */}
            <section id="security" className="policy-section">
              <h2 className="section-title">12. Security Architecture & Sandboxing</h2>
              <p>
                We employ industry-standard architectural safeguards to keep your local data safe:
              </p>
              <ul>
                <li>
                  <strong>Android Application Sandboxing:</strong> All launcher settings, Room databases, and intruder selfies reside in 
                  private app directories inaccessible to other standard applications on your device.
                </li>
                <li>
                  <strong>Hardware-Backed Biometrics:</strong> Biometric operations rely exclusively on the device’s hardware security enclave.
                </li>
                <li>
                  <strong>ProGuard &amp; Code Hardening:</strong> Release builds are obfuscated with R8/ProGuard to prevent reverse-engineering of security controls.
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section id="compliance" className="policy-section">
              <h2 className="section-title">13. Google Play & Global Compliance</h2>
              <p>
                This privacy policy has been composed to satisfy and uphold:
              </p>
              <ul>
                <li><strong>Google Play Developer Distribution Agreement &amp; User Data Policies</strong></li>
                <li><strong>European Union General Data Protection Regulation (GDPR)</strong></li>
                <li><strong>California Consumer Privacy Act (CCPA) / CPRA</strong></li>
                <li><strong>Children’s Online Privacy Protection Act (COPPA)</strong></li>
              </ul>
              <p>
                Under GDPR and CCPA, users have rights regarding data access, rectification, portability, and erasure. 
                Because all data is maintained exclusively on your physical device, you can exercise these rights directly at any time 
                via your Android device settings.
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="policy-section">
              <h2 className="section-title">14. Contact & Developer Information</h2>
              <p>
                If you have any questions, feedback, or concerns regarding this Privacy Policy, your device privacy, 
                or Milky Launcher’s security practices, please reach out to the development team:
              </p>

              <div className="contact-card-grid">
                <a 
                  href="mailto:satyakiran296@gmail.com"
                  className="contact-box glass-panel contact-link-box contact-email-highlight"
                  title="Send email to satyakiran296@gmail.com"
                >
                  <span className="cb-label">Official Support &amp; Privacy Email</span>
                  <strong className="cb-val email-val">satyakiran296@gmail.com</strong>
                  <span className="cb-sub">Direct developer contact for inquiries <Mail size={12} /></span>
                </a>

                <div className="contact-box glass-panel">
                  <span className="cb-label">Development Team</span>
                  <strong className="cb-val">skdevs</strong>
                  <span className="cb-sub">Krishna Vishwakarma &amp; Satyakiran</span>
                </div>

                <a 
                  href="https://skdev.psatyakiran.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-box glass-panel contact-link-box"
                >
                  <span className="cb-label">Developer Studio</span>
                  <strong className="cb-val">skdev.psatyakiran.in</strong>
                  <span className="cb-sub">Visit studio portfolio &amp; apps <ExternalLink size={12} /></span>
                </a>

                <a 
                  href="https://t.me/milkylc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-box glass-panel contact-link-box"
                >
                  <span className="cb-label">Official Telegram Community</span>
                  <strong className="cb-val">t.me/milkylc</strong>
                  <span className="cb-sub">Join @milkylc for real-time support <ExternalLink size={12} /></span>
                </a>
              </div>
            </section>

            {/* Footer Notice */}
            <div className="policy-end-note">
              <p>
                © 2026 Milky Launcher. Developed by <strong>Krishna Vishwakarma &amp; Satyakiran (skdevs)</strong>. 
                All rights reserved. Target Google Play Launch: November 19, 2026.
              </p>
            </div>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="privacy-footer print-hide">
        <div className="footer-content">
          <div className="footer-links">
            <button onClick={onNavigateHome} className="footer-nav-link">
              Milky Launcher Home
            </button>
            <span className="sep">•</span>
            <a href="https://t.me/milkylc" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              Telegram Community
            </a>
            <span className="sep">•</span>
            <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              skdevs Studio
            </a>
            <span className="sep">•</span>
            <a href="mailto:satyakiran296@gmail.com" className="footer-nav-link">
              Contact Developers
            </a>
          </div>
          <p className="footer-copy">
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
