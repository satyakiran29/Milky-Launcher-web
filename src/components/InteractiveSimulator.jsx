import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Globe, 
  ExternalLink, 
  Info, 
  Trash2, 
  Sparkles, 
  X, 
  Compass, 
  Camera, 
  Phone, 
  Mail, 
  Music, 
  Settings as SettingsIcon,
  Play,
  Calendar,
  MessageSquare,
  FileText,
  Clock,
  Shield,
  Layers
} from 'lucide-react';

const mockApps = [
  { id: 'camera', name: 'Camera', initials: 'c', category: 'Media', color: '#ff5c5c', shortcuts: ['Take Selfie', 'Record Video'] },
  { id: 'chrome', name: 'Google Chrome', initials: 'gc', category: 'Internet', color: '#4285f4', shortcuts: ['New Tab', 'New Incognito Tab'] },
  { id: 'clock', name: 'Clock', initials: 'c', category: 'Tools', color: '#00bcd4', shortcuts: ['New Alarm', 'Start Stopwatch'] },
  { id: 'contacts', name: 'Contacts', initials: 'c', category: 'Communication', color: '#3f51b5', shortcuts: ['Add Contact'] },
  { id: 'files', name: 'Files by Google', initials: 'fbg', category: 'Tools', color: '#34a853', shortcuts: ['Clean Space', 'Recent Downloads'] },
  { id: 'gallery', name: 'Gallery', initials: 'g', category: 'Media', color: '#9c27b0', shortcuts: ['Favorites', 'Screenshots'] },
  { id: 'gmail', name: 'Gmail', initials: 'gm', category: 'Communication', color: '#ea4335', shortcuts: ['Compose', 'Primary Inbox'] },
  { id: 'playstore', name: 'Google Play Store', initials: 'gps', category: 'System', color: '#01875f', shortcuts: ['My Apps', 'Check Updates'] },
  { id: 'instagram', name: 'Instagram', initials: 'ig', category: 'Social', color: '#e1306c', shortcuts: ['New Post', 'Direct Messages'] },
  { id: 'maps', name: 'Google Maps', initials: 'gm', category: 'Navigation', color: '#34a853', shortcuts: ['Take me Home', 'Search Petrol'] },
  { id: 'milky', name: 'Milky Settings', initials: 'ms', category: 'Personalization', color: '#9fc4ff', shortcuts: ['Theme Switcher', 'Custom Widgets', 'Backup Layout'] },
  { id: 'music', name: 'Music Player', initials: 'mp', category: 'Media', color: '#ff9800', shortcuts: ['Resume Playlist', 'Liked Songs'] },
  { id: 'notes', name: 'Keep Notes', initials: 'kn', category: 'Productivity', color: '#fbbc04', shortcuts: ['New Audio Note', 'New List'] },
  { id: 'phone', name: 'Phone', initials: 'p', category: 'Communication', color: '#4caf50', shortcuts: ['Favorites', 'Voicemail'] },
  { id: 'settings', name: 'Settings', initials: 's', category: 'System', color: '#607d8b', shortcuts: ['Battery', 'Wi-Fi & Networks'] },
  { id: 'spotify', name: 'Spotify', initials: 's', category: 'Media', color: '#1db954', shortcuts: ['Daily Mix 1', 'Search Artists'] },
  { id: 'telegram', name: 'Telegram', initials: 'tg', category: 'Communication', color: '#2aabee', shortcuts: ['Milky Launcher Official', 'Saved Messages'] },
  { id: 'youtube', name: 'YouTube', initials: 'yt', category: 'Media', color: '#ff0000', shortcuts: ['Subscriptions', 'Trending Videos'] },
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function InteractiveSimulator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('A');
  const [selectedApp, setSelectedApp] = useState(null);
  const [gridColumns, setGridColumns] = useState(4);
  const [showLabels, setShowLabels] = useState(true);

  // Implement Milky Launcher's multi-tier search algorithm:
  // 1. Prefix match
  // 2. Word boundary match
  // 3. Substring match
  // 4. Initials match (e.g. "gps" -> Google Play Store)
  const filteredApps = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return mockApps;

    const scored = mockApps.map(app => {
      const name = app.name.toLowerCase();
      const initials = app.initials.toLowerCase();
      let score = 999;

      if (name.startsWith(q)) {
        score = 1; // Highest rank: prefix
      } else {
        const words = name.split(/\s+/);
        if (words.some(w => w.startsWith(q))) {
          score = 2; // Word start
        } else if (initials === q || initials.startsWith(q)) {
          score = 3; // Initials match (gps -> Google Play Store)
        } else if (name.includes(q)) {
          score = 4; // Substring
        }
      }

      return { app, score };
    }).filter(item => item.score < 999);

    scored.sort((a, b) => a.score - b.score);
    return scored.map(item => item.app);
  }, [searchQuery]);

  const handleLetterClick = (letter) => {
    setActiveLetter(letter);
    setSearchQuery('');
    // Find first app starting with letter
    const target = mockApps.find(a => a.name.toUpperCase().startsWith(letter));
    if (target) {
      setSelectedApp(target);
    }
  };

  return (
    <section className="simulator-section" id="simulator">
      <div className="section-header-block">
        <div className="badge-pill">
          <Compass size={14} className="text-beam" />
          <span>Interactive Browser Sandbox</span>
        </div>
        <h2 className="section-title">Experience the Drawer in Real Time</h2>
        <p className="section-subtitle">
          Test the multi-tiered ranking search engine, spring-cushioned A–Z scrubber rail, 
          and circular icon masks right here.
        </p>
      </div>

      <div className="simulator-wrapper glass-panel">
        {/* Controls Toolbar */}
        <div className="simulator-toolbar">
          <div className="toolbar-left">
            <span className="toolbar-label">Columns:</span>
            {[3, 4, 5].map(cols => (
              <button 
                key={cols}
                onClick={() => setGridColumns(cols)}
                className={`col-toggle-btn ${gridColumns === cols ? 'active' : ''}`}
                aria-label={`${cols} columns`}
              >
                {cols}
              </button>
            ))}
          </div>

          <div className="toolbar-right">
            <button 
              onClick={() => setShowLabels(!showLabels)}
              className={`label-toggle-btn ${showLabels ? 'active' : ''}`}
            >
              Labels: {showLabels ? 'ON' : 'OFF'}
            </button>
            <div className="query-hint-tag">
              Try searching: <strong>"gps"</strong>, <strong>"yt"</strong>, <strong>"c"</strong>
            </div>
          </div>
        </div>

        {/* Live Phone Screen Frame */}
        <div className="sim-phone-canvas">
          {/* Top Search Pill */}
          <div className="sim-search-bar-wrapper">
            <Search size={16} className="sim-search-icon" />
            <input 
              type="text"
              id="sim-app-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps, web, or shortcuts..."
              className="sim-search-input"
              aria-label="Search apps in drawer"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="sim-clear-btn"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Search Result Stats */}
          {searchQuery && (
            <div className="sim-search-stats">
              <span>Found {filteredApps.length} match{filteredApps.length === 1 ? '' : 'es'} for "<strong>{searchQuery}</strong>"</span>
              <span className="ranking-badge">Ranked by Prefix & Initials</span>
            </div>
          )}

          {/* Drawer Grid + A-Z Rail */}
          <div className="sim-drawer-body">
            {/* Apps Grid */}
            <div 
              className={`sim-apps-grid grid-cols-${gridColumns}`}
              style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` }}
            >
              {filteredApps.length > 0 ? (
                filteredApps.map(app => (
                  <div 
                    key={app.id} 
                    className={`sim-app-tile ${selectedApp?.id === app.id ? 'app-selected' : ''}`}
                    onClick={() => setSelectedApp(selectedApp?.id === app.id ? null : app)}
                    title={`Click to open shortcuts for ${app.name}`}
                  >
                    <div 
                      className="sim-app-icon-circle"
                      style={{ 
                        background: `linear-gradient(135deg, ${app.color}dd, ${app.color}77)`,
                        boxShadow: `0 4px 14px ${app.color}33`
                      }}
                    >
                      <span className="sim-icon-letter">{app.name.charAt(0)}</span>
                    </div>
                    {showLabels && (
                      <span className="sim-app-label">{app.name}</span>
                    )}
                  </div>
                ))
              ) : (
                /* Milky's Intelligent Web Search Fallback */
                <div className="sim-no-results-card">
                  <p className="no-result-text">No apps matching "<strong>{searchQuery}</strong>"</p>
                  <a 
                    href={`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sim-web-fallback-btn"
                  >
                    <Globe size={16} />
                    <span>Search the web for "{searchQuery}"</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>

            {/* A–Z Rail with Fisheye Magnification */}
            <div className="sim-az-rail" aria-label="Alphabetical quick rail">
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className={`rail-letter ${activeLetter === letter ? 'rail-active' : ''}`}
                  aria-label={`Jump to ${letter}`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Long-Press App Shortcut Popover Overlay */}
          {selectedApp && (
            <div className="sim-app-shortcuts-dialog">
              <div className="shortcut-dialog-header">
                <div className="header-app-meta">
                  <div 
                    className="dialog-icon-circle"
                    style={{ background: selectedApp.color }}
                  >
                    {selectedApp.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="dialog-app-name">{selectedApp.name}</h4>
                    <span className="dialog-app-cat">{selectedApp.category} • Initials: {selectedApp.initials.toUpperCase()}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="dialog-close-btn"
                  aria-label="Close shortcuts"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="shortcut-actions-list">
                {selectedApp.shortcuts.map((sc, i) => (
                  <div key={i} className="shortcut-item">
                    <Sparkles size={14} className="text-beam" />
                    <span>{sc}</span>
                  </div>
                ))}
                <div className="shortcut-divider" />
                <div className="shortcut-system-row">
                  <button className="shortcut-pill-btn">
                    <Info size={13} />
                    <span>App Info</span>
                  </button>
                  <button className="shortcut-pill-btn text-danger">
                    <Trash2 size={13} />
                    <span>Uninstall</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Feature Explainer Chips */}
        <div className="simulator-footer-notes">
          <div className="note-card">
            <strong>Initials Search:</strong> Type "gps" to match Google Play Store, or "kn" for Keep Notes.
          </div>
          <div className="note-card">
            <strong>Spring Dynamics:</strong> Spatial springs with 800f stiffness provide instant, organic touch feedback.
          </div>
          <div className="note-card">
            <strong>Uniform Masking:</strong> Any app shape is mathematically clipped to a smooth circle.
          </div>
        </div>
      </div>
    </section>
  );
}
