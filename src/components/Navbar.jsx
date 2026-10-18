import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Shield
} from 'lucide-react';

export default function Navbar({ onNavigatePrivacy, onNavigateHome, currentView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`milky-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
        <button 
          onClick={onNavigateHome} 
          className="navbar-brand"
          aria-label="Milky Launcher Home"
        >
          <div className="logo-glow-wrapper">
            <img 
              src="/logo.svg" 
              alt="Milky Launcher Logo" 
              className="navbar-logo"
            />
            <div className="logo-ambient-dot" />
          </div>
          <div className="brand-titles">
            <span className="brand-text">Milky Launcher</span>
          </div>
        </button>

        {/* Clean Right Actions */}
        <div className="navbar-actions">
          <button 
            onClick={onNavigatePrivacy}
            className={`header-action-pill ${currentView === 'privacy' ? 'active' : ''}`}
            title="Google Play Privacy Policy"
            aria-label="Privacy Policy"
          >
            <Shield size={14} className="privacy-mini-icon" />
            <span className="pill-text-desktop">Privacy</span>
          </button>

          <a 
            href="https://t.me/milkylc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-action-pill tg-pill"
            title="Join Official Telegram @milkylc"
            aria-label="Join Telegram Channel"
          >
            <Send size={14} className="tg-mini-icon" />
            <span className="pill-text-desktop">Telegram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
