import React from 'react';
import { 
  Send, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Globe
} from 'lucide-react';

export default function DownloadLaunch({ timeLeft }) {
  const telegramUrl = 'https://t.me/milkylc';
  const devSiteUrl = 'https://skdev.psatyakiran.in/';

  return (
    <section className="download-section" id="launch">
      <div className="section-header-block">
        <div className="badge-pill">
          <Clock size={14} className="text-beam" />
          <span>Launch Roadmap</span>
        </div>
        <h2 className="section-title">Coming Soon to Google Play</h2>
        <p className="section-subtitle">
          We are polishing the final animations and icon pack engines before publishing 
          the release build on the Google Play Store.
        </p>
      </div>

      <div className="launch-single-card-wrapper">
        <div className="download-card glass-panel launch-featured-card">
          <div className="card-top-row">
            <span className="card-type-tag">Official Store Release</span>
            <span className="card-status-badge text-emerald">Google Play</span>
          </div>

          <div className="card-body">
            <div className="play-logo-circle">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8L14.7 12 3.6 22.2c-.4-.4-.6-1-.6-1.7V3.5c0-.7.2-1.3.6-1.7z" fill="#00C1A6"/>
                <path d="M18.4 8.5L5.3 1.1c-.5-.3-1.1-.3-1.7.7L14.7 12l3.7-3.5z" fill="#00D775"/>
                <path d="M18.4 15.5l-3.7-3.5L3.6 22.2c.6 1 1.2 1 1.7.7l13.1-7.4z" fill="#FF3A44"/>
                <path d="M22.7 10.9l-4.3-2.4-3.7 3.5 3.7 3.5 4.3-2.4c1.2-.7 1.2-1.5 0-2.2z" fill="#FFC800"/>
              </svg>
            </div>

            <h3 className="card-main-heading">Target Launch: November 19, 2026</h3>
            <p className="card-main-desc">
              Join the official Telegram community to follow daily development logs, submit feature 
              requests, and chat directly with Krishna & Satyakiran.
            </p>

            {/* Countdown Box */}
            <div className="play-countdown-container">
              <div className="countdown-mini-label">
                <Clock size={13} className="text-beam" />
                <span>Target Launch Countdown</span>
              </div>
              <div className="countdown-numbers-grid">
                <div className="num-box">
                  <span className="num-val">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="num-unit">Days</span>
                </div>
                <span className="num-sep">:</span>
                <div className="num-box">
                  <span className="num-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="num-unit">Hours</span>
                </div>
                <span className="num-sep">:</span>
                <div className="num-box">
                  <span className="num-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="num-unit">Mins</span>
                </div>
                <span className="num-sep">:</span>
                <div className="num-box">
                  <span className="num-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="num-unit">Secs</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="launch-actions-group">
              <a 
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-telegram-main"
                id="btn-telegram-channel-card"
              >
                <Send size={18} />
                <div className="btn-label-group">
                  <span className="primary-text">Join Official Telegram Channel</span>
                  <span className="secondary-text">t.me/milkylc • Updates & Progress</span>
                </div>
                <ArrowRight size={16} />
              </a>

              <a 
                href={devSiteUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-dev-studio"
              >
                <Globe size={16} />
                <span>Visit Developer Website (skdevs)</span>
              </a>
            </div>

            <div className="launch-privacy-pill-note">
              <ShieldCheck size={14} className="text-success" />
              <span>Zero Internet permissions. Zero analytics trackers. 100% on-device private.</span>
            </div>

            <p className="card-disclaimer-note">
              * Target release date on Google Play is subject to testing, certification, and Google Play Store review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
