import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Lock, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Radio,
  FileCode,
  Sparkles
} from 'lucide-react';

const modules = [
  {
    name: ':app',
    tag: 'Root Orchestration',
    description: 'Application initialization, MainActivity lifecycle, and top-level navigation container with zero bloat.',
    files: ['LauncherRoot.kt', 'MainActivity.kt', 'MilkyApplication.kt']
  },
  {
    name: ':feature:home',
    tag: 'Home Canvas & Dock',
    description: 'Wallpaper-backed canvas, spring-cushioned dock shelf, and dynamic desktop widget hosting.',
    files: ['HomeScreen.kt', 'LauncherAppWidgetHost.kt', 'FolderDialog.kt']
  },
  {
    name: ':feature:drawer',
    tag: 'Smart Search & Drawer',
    description: 'Multi-tier search ranking (prefix, word start, substring, initials like "gps") and fisheye A–Z quick rail.',
    files: ['DrawerScreen.kt', 'DrawerViewModel.kt', 'RailFisheye.kt']
  },
  {
    name: ':feature:settings',
    tag: 'Personalization Engine',
    description: 'Grid column tuning (3-6), label toggling, icon pack loader, Apple Glass acrylics, and Pure Black AMOLED.',
    files: ['SettingsScreen.kt', 'CustomWidgetsSubScreen.kt', 'HiddenAppsScreen.kt']
  },
  {
    name: ':core:designsystem',
    tag: 'Design System & Widgets',
    description: 'MilkyTheme tokens, spring physics specs (800f/420f), BlurBox, and the entire native widget suite.',
    files: ['MilkyTheme.kt', 'Color.kt', 'AnalogClockWidget.kt', 'SunTrackerWidget.kt']
  },
  {
    name: ':core:data',
    tag: 'Local Persistence',
    description: 'Device sandboxed Room DB and Jetpack DataStore. Reactive callbacks for app installs without restarts.',
    files: ['LauncherAppsRepository.kt', 'SettingsDataStore.kt', 'AppFilterParser.kt']
  },
  {
    name: ':core:model',
    tag: 'Pure Kotlin Logic',
    description: 'Zero Android dependencies. Fast search scoring, ranking heuristics, and immutable screen state contracts.',
    files: ['AppModel.kt', 'SearchRanker.kt', 'ThemeConfig.kt']
  }
];

export default function Architecture({ onNavigatePrivacy }) {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <section className="architecture-section" id="architecture">
      <div className="section-header-block">
        <div className="badge-pill">
          <Cpu size={14} className="text-beam" />
          <span>Multi-Module Clean Architecture</span>
        </div>
        <h2 className="section-title">Engineered with Native Integrity</h2>
        <p className="section-subtitle">
          Built from the ground up in modern Kotlin and Jetpack Compose. Feature modules never depend 
          on each other, and screen UI is a pure function of immutable StateFlow.
        </p>
      </div>

      <div className="arch-interactive-wrapper glass-panel">
        {/* Module Explorer */}
        <div className="module-explorer-grid">
          <div className="modules-list-col">
            <h3 className="module-col-heading">Gradle Module Hierarchy</h3>
            <div className="module-buttons-group">
              {modules.map(mod => (
                <button
                  key={mod.name}
                  onClick={() => setActiveModule(mod)}
                  className={`module-nav-btn ${activeModule.name === mod.name ? 'active' : ''}`}
                >
                  <div className="mod-btn-top">
                    <span className="mod-name-code">{mod.name}</span>
                    <span className="mod-tag">{mod.tag}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="module-detail-col">
            <div className="detail-header-card">
              <div className="detail-tag-row">
                <FileCode size={18} className="text-beam" />
                <span className="detail-module-name">{activeModule.name}</span>
                <span className="detail-badge">{activeModule.tag}</span>
              </div>
              <p className="detail-module-desc">{activeModule.description}</p>
            </div>

            <div className="detail-files-card">
              <h4 className="files-card-title">Key Kotlin Files</h4>
              <div className="files-chips-row">
                {activeModule.files.map((file, i) => (
                  <span key={i} className="file-chip">
                    <span className="file-dot" />
                    {file}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Code Snippet */}
            <div className="terminal-code-block">
              <div className="terminal-bar">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
                <span className="terminal-title">Architecture Rules</span>
              </div>
              <pre className="terminal-code">
{`// Feature modules are strictly isolated
Feature -> Core (designsystem, data, model)
Feature !-> Feature  // Zero cross-feature coupling!

// UI is a pure function of an immutable state object:
@Composable
fun DrawerScreen(
    state: DrawerUiState,
    onSearchQueryChange: (String) -> Unit,
    onAppClick: (AppModel) -> Unit
)`}
              </pre>
            </div>
          </div>
        </div>

        {/* Privacy & Permissions Card */}
        <div className="arch-privacy-banner">
          <div className="banner-left">
            <div className="shield-circle-icon">
              <ShieldCheck size={28} className="text-emerald" />
            </div>
            <div>
              <h3 className="banner-title">Zero Network & Zero Trackers by Design</h3>
              <p className="banner-desc">
                Milky Launcher does NOT request <code>android.permission.INTERNET</code>. 
                It enumerates apps via system <code>LauncherApps</code> with zero <code>QUERY_ALL_PACKAGES</code> requirement.
                The only permission declared is <code>REQUEST_DELETE_PACKAGES</code> for native uninstall dialogs.
              </p>
            </div>
          </div>
          <button onClick={onNavigatePrivacy} className="btn-read-privacy">
            <span>Read Privacy Policy</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
