import React from 'react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Palette, 
  EyeOff, 
  Sliders, 
  Clock, 
  Grid, 
  Zap, 
  Compass,
  CheckCircle2,
  Lock
} from 'lucide-react';

const featureList = [
  {
    icon: <Zap size={24} className="feature-icon text-beam" />,
    title: 'Spring-Based Motion Tokens',
    badge: 'Spatial Physics',
    description: 'Zero robotic linear transitions. Spatial springs carry subtle physical bounce (damping 0.82, stiffness 420), while opacity and color transitions never overshoot.',
    codeSnippet: 'MilkyMotion.fastSpatial = spring(0.8f, 800f)'
  },
  {
    icon: <Search size={24} className="feature-icon text-cyan" />,
    title: 'Multi-Tiered Smart Search',
    badge: 'Instant Ranking',
    description: 'Instant ranking across 4 tiers: Exact Prefix → Word Boundary → Initials Matching ("gps" finds Google Play Store) → Substring, with intelligent web search fallback.',
    codeSnippet: 'Rank: Prefix > Word > Initials > Substring'
  },
  {
    icon: <Layers size={24} className="feature-icon text-purple" />,
    title: 'Adaptive Circle Masking',
    badge: 'Harmonious Grid',
    description: 'Every app icon is masked into a uniform circle with subtle specular rims, turning chaotic manufacturer icons into a singular, calm visual system.',
    codeSnippet: 'Standard appfilter.xml + Dynamic Masking'
  },
  {
    icon: <Clock size={24} className="feature-icon text-amber" />,
    title: 'Modular Native Widget Engine',
    badge: '10+ Widgets',
    description: 'Built-in widgets without third-party overhead: Sun Tracker, Battery Bottle Spinner, Life Calendar, Analog/Digital Clocks, and Glass Music Controller.',
    codeSnippet: 'CustomWidgetHost with Compose StateFlow'
  },
  {
    icon: <ShieldCheck size={24} className="feature-icon text-emerald" />,
    title: 'Zero Package Query Permissions',
    badge: '100% Private',
    description: 'Uses the system LauncherApps framework instead of QUERY_ALL_PACKAGES. Work profiles display cleanly with native badges, and app updates sync with zero battery drain.',
    codeSnippet: 'android.permission.INTERNET = None'
  },
  {
    icon: <Palette size={24} className="feature-icon text-pink" />,
    title: 'Cosmic & Apple Glass Themes',
    badge: 'Design System',
    description: 'Switch between Cosmic Void, Pure Black AMOLED for OLED battery saving, Apple Glass frosted translucent acrylics, or Material You dynamic wallpaper colors.',
    codeSnippet: '4 Themes • 6 Accents • Monet Colors'
  },
  {
    icon: <Grid size={24} className="feature-icon text-blue" />,
    title: 'Expressive Grid & Layout Control',
    badge: 'Custom Sizing',
    description: 'Freely customize grid columns from 3 to 6, toggle text labels, adjust dock slot counts, and manage multi-page setups with fluid drag handlers.',
    codeSnippet: 'Columns: 3..6 • Rows: 4..8 • Dock Shelf'
  },
  {
    icon: <Lock size={24} className="feature-icon text-emerald" />,
    title: 'Biometric & Pattern App Lock',
    badge: 'On-Device Security',
    description: 'Protect sensitive banking, gallery, and messaging apps with biometric fingerprint authentication or a discreet pattern lock.',
    codeSnippet: 'Local KeyStore & BiometricPrompt API'
  }
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-header-block">
        <div className="badge-pill">
          <Sparkles size={14} className="text-beam" />
          <span>Core Engineering & Design</span>
        </div>
        <h2 className="section-title">Built for Calm, Speed, and Control</h2>
        <p className="section-subtitle">
          Milky Launcher is not a cluttered operating system clone. It is a focused frame around 
          your wallpaper and apps, engineered with modern Android architecture.
        </p>
      </div>

      <div className="features-grid">
        {featureList.map((f, idx) => (
          <div key={idx} className="feature-card glass-panel">
            <div className="feature-card-header">
              <div className="feature-icon-wrapper">
                {f.icon}
              </div>
              <span className="feature-card-badge">{f.badge}</span>
            </div>

            <h3 className="feature-card-title">{f.title}</h3>
            <p className="feature-card-desc">{f.description}</p>

            <div className="feature-code-footer">
              <code>{f.codeSnippet}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
