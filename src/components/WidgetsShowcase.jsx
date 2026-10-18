import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Battery, 
  Sun, 
  Music, 
  Calendar, 
  CheckSquare, 
  Quote, 
  TrendingUp, 
  Sparkles,
  Play,
  Pause,
  RotateCw,
  Check
} from 'lucide-react';

export default function WidgetsShowcase() {
  const [activeWidgetTab, setActiveWidgetTab] = useState('sun');
  const [isPlaying, setIsPlaying] = useState(true);
  const [bottleAngle, setBottleAngle] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(84);
  const [todos, setTodos] = useState([
    { id: 1, text: 'Ship Milky Launcher beta', done: true },
    { id: 2, text: 'Review Compose 1.4 spring tokens', done: true },
    { id: 3, text: 'Add A-Z rail fisheye magnification', done: false },
    { id: 4, text: 'Verify Zero Internet permission spec', done: true },
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const spinBottle = () => {
    setBottleAngle(prev => prev + 360 + Math.floor(Math.random() * 360));
  };

  // Clock state
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const widgetTabs = [
    { id: 'sun', name: 'Sun Tracker', icon: <Sun size={15} />, badge: 'Astronomical Arc' },
    { id: 'battery', name: 'Bottle & Battery', icon: <Battery size={15} />, badge: 'Playful Spinner' },
    { id: 'clock', name: 'Digital & Analog Clocks', icon: <Clock size={15} />, badge: 'Precision Compose' },
    { id: 'music', name: 'Acrylic Music Card', icon: <Music size={15} />, badge: 'Media Host' },
    { id: 'calendar', name: 'Life & Year Progress', icon: <Calendar size={15} />, badge: 'Day Tracker' },
    { id: 'todo', name: 'Cosmic Notes & Todo', icon: <CheckSquare size={15} />, badge: 'Quick Capture' },
  ];

  return (
    <section className="widgets-section" id="widgets">
      <div className="section-header-block">
        <div className="badge-pill">
          <Sparkles size={14} className="text-beam" />
          <span>Native Desktop Components</span>
        </div>
        <h2 className="section-title">A Curated Suite of Native Widgets</h2>
        <p className="section-subtitle">
          Designed specifically for Milky Launcher using Jetpack Compose Canvas and StateFlow. 
          Zero bloat, zero background battery drain, and fully styled in the cosmic palette.
        </p>
      </div>

      <div className="widgets-container glass-panel">
        {/* Widget Selector Pills */}
        <div className="widget-tab-nav" role="tablist">
          {widgetTabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeWidgetTab === tab.id}
              onClick={() => setActiveWidgetTab(tab.id)}
              className={`widget-tab-pill ${activeWidgetTab === tab.id ? 'active' : ''}`}
            >
              {tab.icon}
              <span className="tab-pill-label">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Live Widget Showcase Stage */}
        <div className="widget-stage-area">
          {/* Sun Tracker */}
          {activeWidgetTab === 'sun' && (
            <div className="widget-preview-card sun-tracker-card fade-in-scale">
              <div className="widget-card-top">
                <span className="card-tag">SunTrackerWidget.kt</span>
                <span className="card-badge-pill">Celestial Path</span>
              </div>
              <div className="sun-arc-display">
                <svg viewBox="0 0 300 130" className="sun-arc-svg">
                  {/* Sky Arc Path */}
                  <path 
                    d="M 20 120 A 130 130 0 0 1 280 120" 
                    fill="none" 
                    stroke="rgba(159, 196, 255, 0.2)" 
                    strokeWidth="3" 
                    strokeDasharray="6 6"
                  />
                  {/* Progress Glow Path */}
                  <path 
                    d="M 20 120 A 130 130 0 0 1 180 30" 
                    fill="none" 
                    stroke="#9fc4ff" 
                    strokeWidth="3"
                  />
                  {/* Sun Icon along Arc */}
                  <circle cx="180" cy="30" r="10" fill="#ffd166" className="sun-pulsing-orb" />
                  <circle cx="180" cy="30" r="18" fill="rgba(255, 209, 102, 0.25)" />
                  {/* Ground Horizon line */}
                  <line x1="10" y1="120" x2="290" y2="120" stroke="rgba(138, 147, 178, 0.4)" strokeWidth="1" />
                </svg>
                <div className="sun-stats-row">
                  <div className="stat-col">
                    <span className="stat-label">Sunrise</span>
                    <span className="stat-time">06:12 AM</span>
                  </div>
                  <div className="stat-col center">
                    <span className="stat-label">Solar Noon</span>
                    <span className="stat-time">12:35 PM</span>
                  </div>
                  <div className="stat-col right">
                    <span className="stat-label">Sunset</span>
                    <span className="stat-time">06:48 PM</span>
                  </div>
                </div>
              </div>
              <p className="widget-explainer">
                Plots the celestial solar transit on a custom Compose Canvas with real-time solar elevation and daylight remaining.
              </p>
            </div>
          )}

          {/* Bottle Spinner & Battery */}
          {activeWidgetTab === 'battery' && (
            <div className="widget-preview-card battery-card fade-in-scale">
              <div className="widget-card-top">
                <span className="card-tag">BottleSpinnerWidget.kt & BatteryWidget.kt</span>
                <button onClick={spinBottle} className="btn-spin-action">
                  <RotateCw size={14} />
                  <span>Spin Bottle!</span>
                </button>
              </div>

              <div className="bottle-spinner-stage">
                <div 
                  className="interactive-bottle"
                  style={{ 
                    transform: `rotate(${bottleAngle}deg)`,
                    transition: 'transform 1.2s cubic-bezier(0.15, 1, 0.3, 1)' 
                  }}
                  onClick={spinBottle}
                  title="Click to spin the bottle"
                >
                  <div className="bottle-neck" />
                  <div className="bottle-body">
                    <div 
                      className="bottle-fluid" 
                      style={{ height: `${batteryLevel}%` }}
                    />
                    <span className="bottle-label">{batteryLevel}%</span>
                  </div>
                </div>

                <div className="battery-metrics-col">
                  <div className="battery-spec-item">
                    <span className="spec-label">Battery Level</span>
                    <span className="spec-val">{batteryLevel}% Capacity</span>
                  </div>
                  <div className="battery-spec-item">
                    <span className="spec-label">Charging State</span>
                    <span className="spec-val text-success">Discharging (~22h left)</span>
                  </div>
                  <div className="battery-spec-item">
                    <span className="spec-label">Interactive Mode</span>
                    <span className="spec-val">Spins with physics spring</span>
                  </div>
                </div>
              </div>
              <p className="widget-explainer">
                A fun, tactile desktop widget. Tap the bottle to give it a spin with damped angular friction, or monitor device battery at a glance.
              </p>
            </div>
          )}

          {/* Digital & Analog Clocks */}
          {activeWidgetTab === 'clock' && (
            <div className="widget-preview-card clocks-card fade-in-scale">
              <div className="widget-card-top">
                <span className="card-tag">DigitalProgressClockWidget.kt & GlassClockWidget.kt</span>
                <span className="card-badge-pill">Live Seconds</span>
              </div>

              <div className="clocks-duo-stage">
                {/* Modern Digital Clock with Progress Ring */}
                <div className="digital-clock-panel">
                  <div className="time-large">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </div>
                  <div className="date-sub">
                    {time.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
                  </div>
                  <div className="second-progress-bar">
                    <div 
                      className="second-fill" 
                      style={{ width: `${(time.getSeconds() / 60) * 100}%` }} 
                    />
                  </div>
                </div>

                {/* Minimalist Analog Clock */}
                <div className="analog-clock-dial">
                  <div className="dial-center-dot" />
                  <div 
                    className="dial-hour-hand"
                    style={{ transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)` }}
                  />
                  <div 
                    className="dial-minute-hand"
                    style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
                  />
                  <div 
                    className="dial-second-hand"
                    style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
                  />
                </div>
              </div>
              <p className="widget-explainer">
                Multiple clock styles with customizable hour indices, second rings, and ambient font weights.
              </p>
            </div>
          )}

          {/* Acrylic Music Player Card */}
          {activeWidgetTab === 'music' && (
            <div className="widget-preview-card music-card fade-in-scale">
              <div className="widget-card-top">
                <span className="card-tag">MusicWidget.kt</span>
                <span className="card-badge-pill">Now Playing</span>
              </div>

              <div className="music-player-mockup">
                <div className="music-album-cover">
                  <Sparkles size={28} className="text-beam" />
                </div>
                <div className="music-details-col">
                  <h4 className="track-title">Cosmic Orbit (Compose Edition)</h4>
                  <p className="track-artist">Milky Soundscapes • 120 BPM</p>
                  <div className="track-scrubber">
                    <div className="scrubber-track">
                      <div className="scrubber-progress" style={{ width: '45%' }} />
                    </div>
                    <div className="scrubber-times">
                      <span>1:42</span>
                      <span>3:50</span>
                    </div>
                  </div>
                  <div className="music-ctrl-buttons">
                    <button className="ctrl-btn" aria-label="Previous Track">⏮</button>
                    <button 
                      className="ctrl-btn-play"
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                    <button className="ctrl-btn" aria-label="Next Track">⏭</button>
                  </div>
                </div>
              </div>
              <p className="widget-explainer">
                Controls Spotify, YouTube Music, and system media players seamlessly with frosted acrylic glassmorphism.
              </p>
            </div>
          )}

          {/* Life Calendar & Year Progress */}
          {activeWidgetTab === 'calendar' && (
            <div className="widget-preview-card calendar-card fade-in-scale">
              <div className="widget-card-top">
                <span className="card-tag">YearProgressWidget.kt & LifeCalendarWidget.kt</span>
                <span className="card-badge-pill">Memento Mori</span>
              </div>

              <div className="year-progress-stage">
                <div className="progress-headline-row">
                  <span className="progress-yr">2026 Calendar Year</span>
                  <span className="progress-pct-bold">79.8% Completed</span>
                </div>
                <div className="calendar-bar-outer">
                  <div className="calendar-bar-inner" style={{ width: '79.8%' }} />
                </div>
                <div className="dot-matrix-calendar">
                  {Array.from({ length: 52 }).map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`week-dot ${idx < 41 ? 'dot-filled' : 'dot-future'}`} 
                      title={`Week ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="calendar-subtext">52 weeks of the year. 41 weeks lived, 11 remaining.</span>
              </div>
              <p className="widget-explainer">
                Keep life in perspective with dynamic year completion percentages and visual week-dot matrices.
              </p>
            </div>
          )}

          {/* Quick Notes & Todo */}
          {activeWidgetTab === 'todo' && (
            <div className="widget-preview-card todo-card fade-in-scale">
              <div className="widget-card-top">
                <span className="card-tag">TodoWidget.kt & NoteWidget.kt</span>
                <span className="card-badge-pill">Interactive</span>
              </div>

              <div className="todo-list-stage">
                {todos.map(t => (
                  <div 
                    key={t.id} 
                    className={`todo-row ${t.done ? 'todo-done' : ''}`}
                    onClick={() => toggleTodo(t.id)}
                  >
                    <div className="todo-checkbox">
                      {t.done && <Check size={12} />}
                    </div>
                    <span className="todo-text">{t.text}</span>
                  </div>
                ))}
              </div>
              <p className="widget-explainer">
                Instant tap-to-complete scratchpad backed by device DataStore for zero-latency home screen notes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
