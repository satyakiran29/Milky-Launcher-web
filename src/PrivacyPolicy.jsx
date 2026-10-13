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
  EyeOff,
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
  Mail
} from 'lucide-react';

const sections = [
  { id: 'summary', title: '1. Privacy at a Glance' },
  { id: 'zero-internet', title: '2. Zero Internet & Offline Philosophy' },
  { id: 'permissions', title: '3. Sensitive Device Permissions Declared' },
  { id: 'camera', title: '4. Camera Access & Intruder Selfie Policy' },
  { id: 'notifications', title: '5. Notification Listener Service Policy' },
  { id: 'installed-apps', title: '6. Installed Applications & Package Visibility' },
  { id: 'biometrics', title: '7. Biometric Authentication & App Lock' },
  { id: 'storage', title: '8. Storage, Wallpapers & Backups' },
  { id: 'third-parties', title: '9. Third-Party Services & SDKs' },
  { id: 'data-deletion', title: '10. Data Retention & Deletion Policy' },
  { id: 'children', title: '11. Children’s Privacy (COPPA & GDPR-K)' },
  { id: 'security', title: '12. Security Architecture' },
  { id: 'compliance', title: '13. Google Play & Global Regulations' },
  { id: 'contact', title: '14. Contact & Developer Information' },
];

const highlights = [
  {
    icon: <Radio size={22} className="highlight-icon text-emerald" />,
    title: 'Zero Internet Access',
    description: 'Milky Launcher does NOT request android.permission.INTERNET. No personal data can leave your device.',
    badge: '100% Offline'
  },
  {
    icon: <EyeOff size={22} className="highlight-icon text-cyan" />,
    title: 'Zero Trackers or SDKs',
    description: 'No Google Analytics, Firebase, Facebook SDK, or ad networks. Zero behavioral profiling or telemetry.',
    badge: '0 Trackers'
  },
  {
    icon: <HardDrive size={22} className="highlight-icon text-purple" />,
    title: '100% Local Storage',
    description: 'All settings, hidden app lists, and layouts remain strictly in private device-sandboxed Room & DataStore.',
    badge: 'On-Device Only'
  },
  {
    icon: <Trash2 size={22} className="highlight-icon text-amber" />,
    title: 'Full User Control',
    description: 'Clear intruder snapshots, reset preferences anytime, or uninstall to erase 100% of app data immediately.',
    badge: 'User Controlled'
  }
];

const permissionsList = [
  {
    name: 'android.permission.CAMERA',
    label: 'Camera Permission',
    icon: <Camera size={20} />,
    status: 'Optional (Runtime Consent Required)',
    purpose: 'Exclusively powers the optional "Intruder Selfie" security feature under App Lock.',
    dataAccess: 'Captures a still front-camera photo only when enabled by user AND after 3 consecutive failed unlock attempts.',
    storage: 'Saved strictly in private app-internal storage (context.filesDir/intruder_photos). Never uploaded or shared.',
    revocation: 'Can be revoked anytime in Android Settings > Apps > Milky Launcher > Permissions.'
  },
  {
    name: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
    label: 'Notification Listener Service',
    icon: <Bell size={20} />,
    status: 'Optional (Explicit System Settings Consent)',
    purpose: 'Enables numeric unread counts and notification dot badges on app icons, plus shortcut previews.',
    dataAccess: 'Reads incoming status bar notifications (package name, title, text snippet, count) purely in volatile memory.',
    storage: 'Processed entirely in RAM. NEVER saved to persistent disk databases, never logged, never transmitted remotely.',
    revocation: 'Can be toggled off inside Android Settings > Device & App Notifications.'
  },
  {
    name: 'LauncherApps & REQUEST_DELETE_PACKAGES',
    label: 'Installed Apps & Uninstallation',
    icon: <Layers size={20} />,
    status: 'Normal / System Managed',
    purpose: 'Discovers installed applications to display in the app drawer/dock and triggers Android system uninstallation dialog when requested by the user.',
    dataAccess: 'Enumerates installed package names and labels for home screen launching. Supports Android Work Profiles.',
    storage: 'Cached locally in Room database on device for instant rendering. Never sent to any external server or advertiser.',
    revocation: 'Core home launcher functionality.'
  },
  {
    name: 'android.permission.USE_BIOMETRIC',
    label: 'Biometric Authentication',
    icon: <Fingerprint size={20} />,
    status: 'Standard API',
    purpose: 'Allows unlocking locked/hidden apps and launcher settings with fingerprint or face recognition.',
    dataAccess: 'Delegates strictly to Android BiometricPrompt API. Milky Launcher NEVER has access to biometric data or biometric keys.',
    storage: 'Handled entirely within Android hardware-backed Secure Element / TEE.',
    revocation: 'Can be disabled anytime in Milky Launcher Settings > App Lock.'
  },
  {
    name: 'READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE',
    label: 'Storage & Media Access',
    icon: <HardDrive size={20} />,
    status: 'Optional (User Initiated)',
    purpose: 'Allows the user to select custom gallery wallpapers, load third-party icon pack assets, and export launcher backups.',
    dataAccess: 'Only accesses files explicitly picked by the user via the system document/image picker.',
    storage: 'No background scanning of personal photos or documents.',
    revocation: 'Manageable under system app permissions.'
  },
  {
    name: 'android.permission.BIND_APPWIDGET',
    label: 'App Widget Binding',
    icon: <Smartphone size={20} />,
    status: 'Normal (System Prompted)',
    purpose: 'Enables binding and displaying user-selected home screen widgets on the workspace canvas.',
    dataAccess: 'Interacts with Android AppWidgetManager on-device.',
    storage: 'Widget configurations stored locally.',
    revocation: 'Remove individual widgets from the home screen.'
  }
];

export default function PrivacyPolicy({ onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const lastUpdated = 'October 13, 2026';
  const effectiveDate = 'October 13, 2026';
  const appVersion = '1.1.0';

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
              <span>Back to Home</span>
            </button>
            
            <div className="header-brand-divider" />

            <div className="header-brand-mini" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
              <img 
                src="/milky-icon-round.webp" 
                alt="Milky Launcher Icon" 
                className="brand-logo-mini" 
              />
              <div>
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
              <span>{copied ? 'Copied Link!' : 'Share Policy'}</span>
            </button>

            <button 
              onClick={handlePrint} 
              className="action-pill-btn print-hide"
              title="Print or Save PDF"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
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
              <span>Google Play Policy Compliant</span>
            </span>
            <span className="version-pill">v{appVersion} Production</span>
          </div>

          <h1 className="privacy-hero-title">Privacy Policy</h1>
          <p className="privacy-hero-subtitle">
            Milky Launcher is built with a zero-compromise privacy-by-design philosophy: 
            <strong> completely offline, 100% on-device processing, zero trackers, and zero remote data collection.</strong>
          </p>

          <div className="meta-info-grid">
            <div className="meta-item">
              <span className="meta-label">Application</span>
              <span className="meta-value">Milky Launcher</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Developers</span>
              <span className="meta-value">Krishna Vishwakarma & Satyakiran (skdevs)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Effective Date</span>
              <span className="meta-value">{effectiveDate}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Last Modified</span>
              <span className="meta-value">{lastUpdated}</span>
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
                <p className="sc-text">Questions about data protection in Milky Launcher?</p>
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
              <h2 className="section-title">1. Privacy at a Glance</h2>
              <p>
                Thank you for using <strong>Milky Launcher</strong> (“the App”), an Android home screen launcher 
                developed by <strong>Krishna Vishwakarma and Satyakiran (skdevs)</strong>.
              </p>
              <p>
                This Privacy Policy provides clear, transparent, and comprehensive information regarding how Milky Launcher 
                handles user information, device permissions, and system resources. 
                Our core philosophy is simple: <strong>your launcher is your personal sanctuary.</strong> 
                Milky Launcher was engineered from the ground up to never transmit, collect, monetize, or harvest any personal data.
              </p>

              <div className="callout callout-success">
                <CheckCircle2 size={20} className="callout-icon" />
                <div className="callout-content">
                  <strong>The Golden Rule:</strong> Milky Launcher does not transmit personal data, usage data, crash logs, 
                  or device identifiers to any server. We have no remote backend, no cloud database, and no telemetry system.
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="zero-internet" className="policy-section">
              <h2 className="section-title">2. Zero Internet & Offline Philosophy</h2>
              <p>
                Unlike many commercial Android launchers that bundle tracking SDKs, cloud ad feeds, or analytics agents, 
                Milky Launcher is built as an <strong>offline-first utility</strong>.
              </p>
              <ul>
                <li>
                  <strong>No Network Permission:</strong> Milky Launcher’s Android manifest does not declare or request the 
                  <code>android.permission.INTERNET</code> permission. Android OS strictly prohibits applications without this 
                  permission from making outbound TCP/UDP network connections.
                </li>
                <li>
                  <strong>No Cloud Servers:</strong> The developers maintain zero servers to collect, receive, or store your launcher information.
                </li>
                <li>
                  <strong>Web Search Delegation:</strong> When you perform a search in the app drawer that does not match any installed app, 
                  you may optionally tap the web search shortcut. This action uses an Android standard intent 
                  (<code>Intent.ACTION_WEB_SEARCH</code>) to pass your query directly to your device’s default web browser 
                  (such as Google Chrome, Firefox, or Brave). Milky Launcher does not log, save, or intercept this query; 
                  the search is executed entirely within your external browser according to that browser's privacy policy.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="permissions" className="policy-section">
              <h2 className="section-title">3. Sensitive Device Permissions Declared</h2>
              <p>
                To provide standard launcher functionality and enhanced device security, Milky Launcher declares specific Android 
                permissions. In accordance with <strong>Google Play’s User Data & Permissions Policy</strong>, each permission, 
                its exact justification, and its on-device scope are detailed below:
              </p>

              {/* Search Filter for Permissions */}
              <div className="perm-search-box print-hide">
                <Search size={16} className="perm-search-icon" />
                <input 
                  type="text"
                  placeholder="Filter declared permissions (e.g., Camera, Notifications, Storage)..."
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
                        <span className="perm-field">Storage & Sharing:</span>
                        <span className="perm-value">{perm.storage}</span>
                      </div>
                      <div className="perm-row">
                        <span className="perm-field">Revocation:</span>
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
                Milky Launcher includes an optional, security-oriented feature called <strong>App Lock Intruder Selfie</strong>.
              </p>
              
              <div className="callout callout-info">
                <Camera size={20} className="callout-icon" />
                <div className="callout-content">
                  <strong>Prominent Disclosure:</strong> The camera is <em>only</em> accessed if you explicitly navigate to 
                  <code>Settings &gt; App Lock</code>, enable the <em>Intruder Selfie</em> toggle, and grant Android’s runtime 
                  Camera permission dialog.
                </div>
              </div>

              <h3>How the Intruder Selfie Feature Operates:</h3>
              <ol>
                <li>
                  <strong>Trigger Condition:</strong> When App Lock is active, if an incorrect PIN, password, or biometric pattern 
                  is entered <strong>3 consecutive times</strong>, the app activates the device's front-facing camera via Android’s 
                  hardware <code>Camera2 API</code> to take a single silent snapshot of the intruder.
                </li>
                <li>
                  <strong>Local Storage Only:</strong> The photo is saved exclusively into the application’s private internal storage directory 
                  (<code>context.filesDir/intruder_photos</code>). This sandbox directory is protected by Android's application isolation 
                  and cannot be read by other third-party apps without root access.
                </li>
                <li>
                  <strong>Zero Transmission:</strong> Captured images are <strong>never</strong> transmitted over the internet, never backed up to cloud servers, 
                  and never visible to anyone other than the device owner.
                </li>
                <li>
                  <strong>User Inspection & Deletion:</strong> You can view all captured intruder selfies inside Milky Launcher’s App Lock settings. 
                  You can delete any single photo or choose <em>"Clear All Intruder Photos"</em> at any time. Revoking Camera permission or uninstalling 
                  the app instantly erases all intruder photos.
                </li>
              </ol>
            </section>

            {/* Section 5 */}
            <section id="notifications" className="policy-section">
              <h2 className="section-title">5. Notification Listener Service Policy</h2>
              <p>
                Milky Launcher declares <code>MilkyNotificationListener</code>, an Android 
                <code>NotificationListenerService</code>, to support home screen notification indicators.
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
                  <strong>Unread Counts & Badges:</strong> The service receives active <code>StatusBarNotification</code> events to compute the number of unread 
                  notifications for each installed application and display notification dots or numeric badges over that app’s icon.
                </li>
                <li>
                  <strong>Quick Actions:</strong> If you long-press an app icon on your home screen or dock, Milky Launcher displays the title and summary 
                  of active notifications so you can quickly launch the relevant pending intent or dismiss the notification.
                </li>
                <li>
                  <strong>Volatile Memory Only:</strong> All notification metadata (title, text snippet, timestamp) is maintained strictly in volatile RAM 
                  (in-memory Kotlin <code>StateFlow</code>). It is <strong>never written to a Room database or permanent file storage</strong>.
                </li>
                <li>
                  <strong>Immediate Wiping:</strong> The moment a notification is dismissed by you or cancelled by the originating application, 
                  it is purged from Milky Launcher’s memory cache immediately.
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
                  <strong>LauncherApps Framework:</strong> Milky Launcher uses Android’s official <code>LauncherApps</code> system API 
                  (rather than broad package queries) to discover launchable applications, load their high-resolution adaptive icons, 
                  and support Android Work Profiles with enterprise badges.
                </li>
                <li>
                  <strong>Uninstall Requests (REQUEST_DELETE_PACKAGES):</strong> When you long-press an app and select <em>"Uninstall"</em>, 
                  Milky Launcher requests the Android system’s official uninstallation confirmation prompt. The operating system handles 
                  the removal; Milky Launcher cannot uninstall applications silently.
                </li>
                <li>
                  <strong>On-Device Database:</strong> Your installed app list, custom label overrides, hidden app flags, and dock ordering 
                  are stored in a local SQLite Room database located in your device's internal storage. They are never uploaded or aggregated.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="biometrics" className="policy-section">
              <h2 className="section-title">7. Biometric Authentication & App Lock</h2>
              <p>
                Milky Launcher allows you to protect specific applications, hidden app drawers, and launcher preferences with biometric security:
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
              <h2 className="section-title">8. Storage, Wallpapers & Backups</h2>
              <p>
                Milky Launcher interacts with device storage solely upon your direct initiative:
              </p>
              <ul>
                <li>
                  <strong>Wallpapers & Icons:</strong> When you select a custom wallpaper or apply a third-party icon pack, 
                  Milky Launcher reads only the selected assets chosen via the system document picker.
                </li>
                <li>
                  <strong>Backup & Restore:</strong> Milky Launcher offers a feature to export your home screen grid, shortcuts, 
                  and preferences to a local JSON backup file. This file is stored in your device's Downloads or user-designated folder. 
                  You maintain complete custody of this file; it is never automatically uploaded to any cloud service.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="third-parties" className="policy-section">
              <h2 className="section-title">9. Third-Party Services & SDKs</h2>
              <p>
                Milky Launcher takes pride in being completely tracker-free:
              </p>
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Third-Party Services Used</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Advertising SDKs</td>
                    <td>None (No AdMob, Unity, AppLovin, etc.)</td>
                    <td><span className="badge-pill badge-play">100% Ad-Free</span></td>
                  </tr>
                  <tr>
                    <td>Analytics & Telemetry</td>
                    <td>None (No Google Analytics, Firebase, Mixpanel)</td>
                    <td><span className="badge-pill badge-play">Zero Telemetry</span></td>
                  </tr>
                  <tr>
                    <td>Crash Reporting Services</td>
                    <td>None (No Crashlytics, Sentry, Bugsnag)</td>
                    <td><span className="badge-pill badge-play">Zero Remote Logs</span></td>
                  </tr>
                  <tr>
                    <td>Social & Tracking Trackers</td>
                    <td>None (No Facebook Graph, TikTok, Adjust)</td>
                    <td><span className="badge-pill badge-play">No User Tracking</span></td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 10 */}
            <section id="data-deletion" className="policy-section">
              <h2 className="section-title">10. Data Retention & Deletion Policy</h2>
              <p>
                Because all data generated by Milky Launcher is stored locally on your device, <strong>you have complete, autonomous control over its retention and deletion:</strong>
              </p>
              <div className="deletion-steps-card">
                <h3>How to Erase Your Data:</h3>
                <ul>
                  <li>
                    <strong>Clear Intruder Selfies:</strong> Open Milky Launcher <code>Settings &gt; App Lock &gt; Intruder Photos</code> and tap <em>"Clear All Photos"</em>.
                  </li>
                  <li>
                    <strong>Reset All Launcher Data:</strong> Go to Android <code>Settings &gt; Apps &gt; Milky Launcher &gt; Storage & Cache &gt; Clear Storage</code>. 
                    This permanently wipes all local SQLite databases, DataStore preferences, cached icons, and intruder photos.
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
                Milky Launcher does not knowingly collect, request, or store any personal information from children under the age of 13 
                (or under 16 within the European Economic Area). Because the application collects no personal data from any user whatsoever, 
                it is fully compliant with the <strong>Children’s Online Privacy Protection Act (COPPA)</strong> and <strong>Article 8 of the GDPR</strong>.
              </p>
            </section>

            {/* Section 12 */}
            <section id="security" className="policy-section">
              <h2 className="section-title">12. Security Architecture</h2>
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
                  <strong>Zero Network Attack Surface:</strong> With no network permissions, open sockets, or cloud synchronization endpoints, 
                  Milky Launcher presents zero external vector for data interception or unauthorized remote exfiltration.
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section id="compliance" className="policy-section">
              <h2 className="section-title">13. Google Play & Global Regulations</h2>
              <p>
                This privacy policy has been composed to satisfy and uphold:
              </p>
              <ul>
                <li><strong>Google Play Developer Distribution Agreement & User Data Policies</strong></li>
                <li><strong>European Union General Data Protection Regulation (GDPR)</strong></li>
                <li><strong>California Consumer Privacy Act (CCPA) / CPRA</strong></li>
                <li><strong>Children’s Online Privacy Protection Act (COPPA)</strong></li>
              </ul>
              <p>
                Under GDPR and CCPA, users have rights regarding data access, rectification, portability, and erasure. 
                Because all data is maintained exclusively on your physical device, you can exercise these rights directly at any time 
                via the device settings.
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
                  <span className="cb-label">Official Support & Privacy Email</span>
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
                  <span className="cb-label">Developer Website</span>
                  <strong className="cb-val">skdev.psatyakiran.in</strong>
                  <span className="cb-sub">Visit portfolio &amp; releases <ExternalLink size={12} /></span>
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
                <strong>Policy Revisions:</strong> We may update this Privacy Policy from time to time to reflect changes in legal requirements 
                or future enhancements to Milky Launcher. Any modifications will be posted here with an updated "Last Modified" date.
              </p>
              <div className="back-bottom-row">
                <button onClick={onNavigateHome} className="btn-cosmic">
                  <ArrowLeft size={16} />
                  <span>Return to Milky Launcher Homepage</span>
                </button>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="privacy-footer">
        <p>
          © 2026 Milky Launcher. Developed with passion by{' '}
          <a href="https://github.com/Spyou" target="_blank" rel="noopener noreferrer" className="footer-dev-link">Krishna Vishwakarma</a>{' '}
          &{' '}
          <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer" className="footer-dev-link">Satyakiran</a>.
        </p>
        <div className="footer-links">
          <button onClick={onNavigateHome} className="footer-text-btn">Home</button>
          <span className="sep">•</span>
          <a href="https://t.me/milkylc" target="_blank" rel="noopener noreferrer">Telegram: @milkylc</a>
          <span className="sep">•</span>
          <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer">skdev.psatyakiran.in</a>
          <span className="sep">•</span>
          <span>Google Play Store Compliant</span>
        </div>
      </footer>
    </div>
  );
}
