import React from 'react';
import { 
  Send, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  Globe
} from 'lucide-react';

export default function Hero({ timeLeft }) {
  const devSiteUrl = 'https://skdev.psatyakiran.in/';
  const telegramUrl = 'https://t.me/milkylc';

  return (
    <section className="hero-section" id="hero">
      {/* Background radial cosmic glows */}
      <div className="hero-cosmic-glow glow-1" />
      <div className="hero-cosmic-glow glow-2" />

      <div className="hero-content-wrapper">
        <div className="hero-text-col">
          {/* Top Pill */}
          <div className="hero-badge-pill">
            <Sparkles size={14} className="text-beam animate-spin-slow" />
            <span className="badge-text">Native Jetpack Compose • Android 8.0+</span>
            <span className="badge-highlight">Zero Trackers</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-main-title">
            Dark, quiet, and <br />
            <span className="gradient-text-beam">out of the way.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            A wallpaper-backed Android canvas with fluid spring physics, adaptive circle icon masking, 
            instant multi-tier search, and modular desktop widgets. Built natively with Jetpack Compose 
            to feel like a natural extension of your phone.
          </p>

          {/* Target Launch Countdown Banner */}
          <div className="hero-launch-banner">
            <div className="launch-info">
              <span className="launch-tag">
                <Clock size={13} className="text-beam" />
                Target Launch: Nov 19, 2026
              </span>
              <span className="launch-sub">Coming Soon to Google Play Store</span>
            </div>
            <div className="launch-timer-digits">
              <div className="timer-chip">
                <span className="digit">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="label">Days</span>
              </div>
              <span className="digit-colon">:</span>
              <div className="timer-chip">
                <span className="digit">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="label">Hours</span>
              </div>
              <span className="digit-colon">:</span>
              <div className="timer-chip">
                <span className="digit">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="label">Mins</span>
              </div>
              <span className="digit-colon">:</span>
              <div className="timer-chip">
                <span className="digit">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="label">Secs</span>
              </div>
            </div>
          </div>

          {/* Clean Primary Community CTAs */}
          <div className="hero-cta-group">
            <a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
              id="hero-telegram-btn"
            >
              <Send size={18} />
              <div className="btn-text-block">
                <span className="btn-title">Join Official Telegram Channel</span>
                <span className="btn-meta">t.me/milkylc • Updates & Early Drops</span>
              </div>
              <ArrowRight size={16} className="arrow-hover" />
            </a>

            <a 
              href={devSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <Globe size={16} className="text-beam" />
              <span>skdev.psatyakiran.in</span>
            </a>
          </div>

          {/* Quick Pillars */}
          <div className="hero-specs-row">
            <div className="spec-item">
              <CheckCircle2 size={15} className="text-success" />
              <span>100% Offline (Zero Internet Permission)</span>
            </div>
            <div className="spec-item">
              <CheckCircle2 size={15} className="text-success" />
              <span>Spring-Based Motion Tokens</span>
            </div>
            <div className="spec-item">
              <CheckCircle2 size={15} className="text-success" />
              <span>Adaptive Circle Icon Engine</span>
            </div>
          </div>
        </div>

        {/* Clean Hero Android Phone Mockup (No clutter tabs) */}
        <div className="hero-device-col">
          <div className="device-showcase-container">
            {/* Ambient Backlight Glow behind phone */}
            <div className="device-ambient-glow" />

            {/* Device Hardware Frame */}
            <div className="phone-mockup-frame">
              {/* Speaker / Punch-hole Camera */}
              <div className="phone-camera-notch">
                <div className="camera-lens" />
              </div>

              {/* Screen Display */}
              <div className="phone-screen-viewport">
                <img 
                  src="/screenshots/home_screen.png" 
                  alt="Milky Launcher Home Screen Canvas" 
                  className="phone-screen-img"
                />

                {/* Ambient Status Pill */}
                <div className="screen-active-pill">
                  <span className="pill-dot" />
                  <span>Cosmic Canvas • Jetpack Compose</span>
                </div>
              </div>

              {/* Hardware buttons */}
              <div className="phone-hardware-power" />
              <div className="phone-hardware-volume-up" />
              <div className="phone-hardware-volume-down" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Summary Ribbon */}
      <div className="hero-metrics-ribbon">
        <div className="metric-box">
          <span className="metric-number">100%</span>
          <span className="metric-desc">Native Jetpack Compose UI</span>
        </div>
        <div className="metric-divider" />
        <div className="metric-box">
          <span className="metric-number">0</span>
          <span className="metric-desc">Package Query Permissions</span>
        </div>
        <div className="metric-divider" />
        <div className="metric-box">
          <span className="metric-number">0.82</span>
          <span className="metric-desc">Fluid Damped Spatial Springs</span>
        </div>
        <div className="metric-divider" />
        <div className="metric-box">
          <span className="metric-number">Nov 19</span>
          <span className="metric-desc">2026 Google Play Target</span>
        </div>
      </div>
    </section>
  );
}
