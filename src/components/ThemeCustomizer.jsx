import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Moon, 
  Sun, 
  Smartphone, 
  Check, 
  Eye, 
  Sliders,
  Bell,
  Search,
  Music,
  Battery
} from 'lucide-react';

const themeModes = [
  {
    id: 'cosmic',
    name: 'Cosmic Void',
    sub: 'Deep indigo & starlight ground',
    bg: '#070a14',
    surface: '#0e1426',
    border: 'rgba(159, 196, 255, 0.2)',
    text: '#e8edff',
    icon: <Moon size={16} />
  },
  {
    id: 'pureblack',
    name: 'Pure Black AMOLED',
    sub: 'Pitch black #000000 for zero OLED power draw',
    bg: '#000000',
    surface: '#101012',
    border: '#242428',
    text: '#f2f2f7',
    icon: <Moon size={16} />
  },
  {
    id: 'appleglass',
    name: 'Apple Glass UI',
    sub: 'Smoky acrylic blur with specular rim reflections',
    bg: '#0c0e16',
    surface: 'rgba(30, 34, 53, 0.45)',
    border: 'rgba(255, 255, 255, 0.22)',
    text: '#ffffff',
    backdropFilter: 'blur(16px)',
    icon: <Sparkles size={16} />
  },
  {
    id: 'daylight',
    name: 'Day Ground (Light)',
    sub: 'Crisp minimal porcelain canvas',
    bg: '#f7f8fc',
    surface: '#ffffff',
    border: '#d0d5e4',
    text: '#131722',
    icon: <Sun size={16} />
  }
];

const accents = [
  { id: 'beam', name: 'Cosmic Beam', hex: '#9fc4ff', glow: 'rgba(159, 196, 255, 0.4)' },
  { id: 'red', name: 'Anify Red', hex: '#ff453a', glow: 'rgba(255, 69, 58, 0.4)' },
  { id: 'blue', name: 'Electric Blue', hex: '#0a84ff', glow: 'rgba(10, 132, 255, 0.4)' },
  { id: 'violet', name: 'Royal Violet', hex: '#af52de', glow: 'rgba(175, 82, 222, 0.4)' },
  { id: 'emerald', name: 'Emerald Glow', hex: '#34c759', glow: 'rgba(52, 199, 89, 0.4)' },
  { id: 'indigo', name: 'Deep Indigo', hex: '#4361ee', glow: 'rgba(67, 97, 238, 0.4)' },
];

export default function ThemeCustomizer() {
  const [activeThemeId, setActiveThemeId] = useState('cosmic');
  const [activeAccentId, setActiveAccentId] = useState('beam');

  const currentTheme = themeModes.find(t => t.id === activeThemeId);
  const currentAccent = accents.find(a => a.id === activeAccentId);

  return (
    <section className="themes-section" id="themes">
      <div className="section-header-block">
        <div className="badge-pill">
          <Palette size={14} className="text-beam" />
          <span>Dynamic Theme Engine</span>
        </div>
        <h2 className="section-title">Cosmic Palette & Apple Glass UI</h2>
        <p className="section-subtitle">
          Milky Launcher adapts to your lifestyle. Choose from cosmic starlight, pitch-black AMOLED, 
          frosted acrylic glass, or vibrant Material You dynamic wallpaper tones.
        </p>
      </div>

      <div className="theme-customizer-container glass-panel">
        {/* Controls Column */}
        <div className="theme-controls-col">
          <div className="control-group">
            <h3 className="control-group-title">
              <Moon size={16} className="text-beam" />
              <span>1. Select Theme Mode</span>
            </h3>

            <div className="theme-modes-grid">
              {themeModes.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveThemeId(t.id)}
                  className={`theme-mode-card ${activeThemeId === t.id ? 'active' : ''}`}
                >
                  <div className="mode-card-header">
                    <div className="mode-icon-circle" style={{ background: t.surface, color: t.text }}>
                      {t.icon}
                    </div>
                    <span className="mode-name">{t.name}</span>
                    {activeThemeId === t.id && <Check size={16} className="mode-check" />}
                  </div>
                  <p className="mode-sub">{t.sub}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <h3 className="control-group-title">
              <Palette size={16} className="text-beam" />
              <span>2. Choose Accent Highlight</span>
            </h3>

            <div className="accents-palette-row">
              {accents.map(a => (
                <button
                  key={a.id}
                  onClick={() => setActiveAccentId(a.id)}
                  className={`accent-swatch-btn ${activeAccentId === a.id ? 'active' : ''}`}
                  title={`${a.name} (${a.hex})`}
                  aria-label={a.name}
                >
                  <span 
                    className="swatch-color-circle" 
                    style={{ 
                      backgroundColor: a.hex,
                      boxShadow: activeAccentId === a.id ? `0 0 16px ${a.hex}` : 'none'
                    }} 
                  />
                  <span className="swatch-name">{a.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Tokens Inspector */}
          <div className="tokens-inspector-card">
            <h4 className="inspector-title">Active Compose Tokens</h4>
            <div className="tokens-list">
              <div className="token-row">
                <span className="token-key">background</span>
                <span className="token-val" style={{ color: currentAccent.hex }}>{currentTheme.bg}</span>
              </div>
              <div className="token-row">
                <span className="token-key">surfaceContainer</span>
                <span className="token-val" style={{ color: currentAccent.hex }}>{currentTheme.surface}</span>
              </div>
              <div className="token-row">
                <span className="token-key">primaryAccent</span>
                <span className="token-val" style={{ color: currentAccent.hex }}>{currentAccent.hex}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Theme Preview Sandbox */}
        <div className="theme-preview-col">
          <div 
            className="theme-sandbox-screen"
            style={{ 
              backgroundColor: currentTheme.bg,
              color: currentTheme.text,
              borderColor: currentTheme.border,
            }}
          >
            {/* Phone Top Notch */}
            <div className="sandbox-notch">
              <div className="sandbox-camera" />
            </div>

            {/* Sandbox Header / Status Bar */}
            <div className="sandbox-status-bar">
              <span className="sandbox-time">09:41</span>
              <div className="sandbox-status-icons">
                <Battery size={14} style={{ color: currentAccent.hex }} />
                <span className="battery-pct">88%</span>
              </div>
            </div>

            {/* Large Minimalist Clock */}
            <div className="sandbox-clock-widget">
              <div className="clock-time-display" style={{ color: currentTheme.text }}>
                09<span style={{ color: currentAccent.hex }}>:</span>41
              </div>
              <div className="clock-date-display" style={{ color: currentAccent.hex }}>
                Wednesday, October 18
              </div>
            </div>

            {/* Interactive Search Pill */}
            <div 
              className="sandbox-search-pill"
              style={{
                background: currentTheme.surface,
                borderColor: currentAccent.hex,
                backdropFilter: currentTheme.backdropFilter || 'none',
              }}
            >
              <Search size={14} style={{ color: currentAccent.hex }} />
              <span className="pill-placeholder">Search apps & shortcuts...</span>
              <div 
                className="pill-mic-indicator" 
                style={{ background: currentAccent.hex }}
              />
            </div>

            {/* Mock Widget Card */}
            <div 
              className="sandbox-widget-card"
              style={{
                background: currentTheme.surface,
                borderColor: currentTheme.border,
                backdropFilter: currentTheme.backdropFilter || 'none',
              }}
            >
              <div className="widget-header-row">
                <div className="widget-badge" style={{ color: currentAccent.hex, borderColor: currentAccent.hex }}>
                  <Music size={12} />
                  <span>Now Playing</span>
                </div>
                <span className="widget-time-tag">Spotify</span>
              </div>
              <div className="widget-body-row">
                <div 
                  className="widget-album-art"
                  style={{ background: `linear-gradient(135deg, ${currentAccent.hex}, #1a2238)` }}
                />
                <div className="widget-track-info">
                  <div className="track-name" style={{ color: currentTheme.text }}>Cosmic Starlight</div>
                  <div className="track-artist" style={{ color: currentAccent.hex }}>Milky Soundscape</div>
                </div>
              </div>
              <div className="widget-progress-track">
                <div className="progress-fill" style={{ width: '68%', background: currentAccent.hex }} />
              </div>
            </div>

            {/* Bottom Dock Shelf */}
            <div 
              className="sandbox-dock-shelf"
              style={{
                background: currentTheme.surface,
                borderColor: currentTheme.border,
                backdropFilter: currentTheme.backdropFilter || 'none',
              }}
            >
              {['Phone', 'Messages', 'Camera', 'Chrome'].map((name, i) => (
                <div key={i} className="dock-app-slot">
                  <div 
                    className="dock-icon-circle"
                    style={{ 
                      borderColor: i === 1 ? currentAccent.hex : 'transparent',
                      background: `linear-gradient(135deg, ${currentAccent.hex}22, ${currentTheme.surface})`
                    }}
                  >
                    <span style={{ color: currentTheme.text }}>{name.charAt(0)}</span>
                    {i === 1 && (
                      <span className="dock-badge" style={{ background: currentAccent.hex }}>
                        3
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
