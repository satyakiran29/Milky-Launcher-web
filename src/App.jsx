import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Send, 
  ArrowRight, 
  Users, 
  Globe,
  Clock,
  ExternalLink
} from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function App() {
  const telegramUrl = 'https://t.me/milkylc';
  const devSiteUrl = 'https://skdev.psatyakiran.in/';

  // Target: November 19, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(2026, 10, 19, 0, 0, 0).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const developers = [
    {
      name: 'Krishna Vishwakarma',
      handle: 'Spyou',
      subtext: '@Spyou on GitHub',
      link: 'https://github.com/Spyou',
      icon: 'github',
      avatar: 'https://github.com/Spyou.png'
    },
    {
      name: 'Satyakiran',
      handle: 'skdev.psatyakiran.in',
      subtext: 'skdev.psatyakiran.in',
      link: 'https://skdev.psatyakiran.in/',
      icon: 'globe',
      avatar: 'https://github.com/satyakiran29.png'
    }
  ];

  return (
    <div className="coming-soon-wrapper">
      {/* Cosmic background glow */}
      <div className="cosmic-ambient-glow" />

      {/* Top Header */}
      <header className="coming-soon-header">
        <div className="header-brand">
          <img 
            src="/milky-icon-round.webp" 
            alt="Milky Launcher Icon" 
            className="brand-logo" 
          />
          <div className="brand-text-col">
            <span className="brand-name">Milky Launcher</span>
            <span className="brand-badge-mini">Google Play Coming Soon</span>
          </div>
        </div>

        <div className="header-actions">
          <a 
            href={devSiteUrl}
            target="_blank" 
            rel="noreferrer"
            className="header-dev-pill"
            title="Visit Developer Website"
          >
            <Globe size={14} className="globe-mini-icon" />
            <span>skdev.psatyakiran.in</span>
          </a>

          <a 
            href={telegramUrl}
            target="_blank" 
            rel="noreferrer"
            className="header-tg-pill"
            title="Join Official Telegram"
          >
            <Send size={14} className="tg-mini-icon" />
            <span>@milkylc</span>
          </a>
        </div>
      </header>

      {/* Main Content Area - Clean Centered Layout */}
      <main className="coming-soon-main">
        <div className="coming-soon-card glass-panel">
          {/* Play Store Tag */}
          <div className="playstore-exclusive-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3.6 1.8L14.7 12 3.6 22.2c-.4-.4-.6-1-.6-1.7V3.5c0-.7.2-1.3.6-1.7z" fill="#00C1A6"/>
              <path d="M18.4 8.5L5.3 1.1c-.5-.3-1.1-.3-1.7.7L14.7 12l3.7-3.5z" fill="#00D775"/>
              <path d="M18.4 15.5l-3.7-3.5L3.6 22.2c.6 1 1.2 1 1.7.7l13.1-7.4z" fill="#FF3A44"/>
              <path d="M22.7 10.9l-4.3-2.4-3.7 3.5 3.7 3.5 4.3-2.4c1.2-.7 1.2-1.5 0-2.2z" fill="#FFC800"/>
            </svg>
            <span>Coming Soon to Google Play</span>
          </div>

          {/* Large App Icon */}
          <div className="app-icon-display">
            <img 
              src="/milky-icon-round.webp" 
              alt="Milky Launcher App" 
              className="large-app-icon"
            />
            <div className="icon-pulse-ring" />
          </div>

          {/* Title & Tagline */}
          <h1 className="coming-soon-title">Milky Launcher</h1>
          <p className="coming-soon-subtitle">
            Dark, quiet, and out of the way. An Android home screen launcher built natively with Jetpack Compose.
          </p>

          {/* Target Release Countdown Timer */}
          <div className="countdown-card">
            <div className="countdown-header-row">
              <div className="countdown-tag-badge">
                <Clock size={14} className="accent-icon" />
                <span>Target Launch</span>
              </div>
              <span className="target-date-label">November 19, 2026</span>
            </div>

            <div className="countdown-grid">
              <div className="countdown-unit-box">
                <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="countdown-label">Days</span>
              </div>
              <span className="countdown-colon">:</span>
              <div className="countdown-unit-box">
                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <span className="countdown-colon">:</span>
              <div className="countdown-unit-box">
                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Mins</span>
              </div>
              <span className="countdown-colon">:</span>
              <div className="countdown-unit-box">
                <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Secs</span>
              </div>
            </div>

            <p className="countdown-disclaimer">
              * Plans to release on November 19 (may be postponed based on testing & Google Play review). Follow Telegram for updates.
            </p>
          </div>

          {/* Telegram Channel Primary Callout */}
          <div className="telegram-cta-block">
            <a 
              id="btn-telegram-channel"
              href={telegramUrl}
              target="_blank" 
              rel="noreferrer"
              className="btn-telegram"
            >
              <Send size={20} className="telegram-plane-icon" />
              <div className="telegram-btn-text">
                <span className="tg-primary-text">Join Official Telegram Channel</span>
                <span className="tg-handle-text">t.me/milkylc</span>
              </div>
              <ArrowRight size={18} className="tg-arrow" />
            </a>
            <span className="telegram-hint">
              Join our Telegram community for early beta test drops, progress reports, and direct developer chat.
            </span>
          </div>

          {/* Meet The 2 Developers */}
          <div className="developers-section">
            <div className="dev-section-title">
              <Users size={15} className="accent-icon" />
              <span>Developed by 2 Developers</span>
            </div>

            <div className="developers-grid">
              {developers.map((dev, idx) => (
                <a 
                  key={idx}
                  href={dev.link}
                  target="_blank"
                  rel="noreferrer"
                  className="dev-profile-card"
                  title={`Open ${dev.name}'s profile`}
                >
                  <img 
                    src={dev.avatar} 
                    alt={dev.name} 
                    className="dev-avatar-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="dev-info-col">
                    <span className="dev-real-name">{dev.name}</span>
                    <span className="dev-github-handle">
                      {dev.icon === 'globe' ? <Globe size={12} color="#3ddc97" /> : <GithubIcon size={12} />}
                      {dev.subtext}
                    </span>
                  </div>
                  <ExternalLink size={13} className="dev-ext-link" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="coming-soon-footer">
        <p>
          © {new Date().getFullYear()} Milky Launcher. Developed with passion by{' '}
          <a href="https://github.com/Spyou" target="_blank" rel="noreferrer" className="footer-dev-link">Krishna Vishwakarma</a>{' '}
          &{' '}
          <a href={devSiteUrl} target="_blank" rel="noreferrer" className="footer-dev-link">Satyakiran</a>.
        </p>
        <div className="footer-links">
          <a href={telegramUrl} target="_blank" rel="noreferrer">Telegram: @milkylc</a>
          <span className="sep">•</span>
          <a href={devSiteUrl} target="_blank" rel="noreferrer">skdev.psatyakiran.in</a>
          <span className="sep">•</span>
          <span>Google Play Exclusive</span>
        </div>
      </footer>
    </div>
  );
}
