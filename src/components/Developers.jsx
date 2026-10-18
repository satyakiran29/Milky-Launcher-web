import React from 'react';
import { 
  Users, 
  Globe, 
  ExternalLink, 
  Code2, 
  Sparkles,
  Heart
} from 'lucide-react';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const devTeam = [
  {
    name: 'Krishna Vishwakarma',
    handle: '@Spyou',
    role: 'Lead Android & Compose Architect',
    bio: 'Crafting native Jetpack Compose architectures, multi-tiered search algorithms, and spring-based spatial motion tokens.',
    avatar: 'https://github.com/Spyou.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/Spyou', icon: <GithubIcon /> }
    ]
  },
  {
    name: 'Satyakiran',
    handle: 'skdevs',
    role: 'Design System & Core Contributor',
    bio: 'Building cosmic design tokens, Apple Glass acrylics, desktop widgets suite, and privacy-first systems at skdevs.',
    avatar: 'https://github.com/satyakiran29.png',
    links: [
      { label: 'Website', url: 'https://skdev.psatyakiran.in/', icon: <Globe size={15} /> },
      { label: 'GitHub', url: 'https://github.com/satyakiran29', icon: <GithubIcon /> }
    ]
  }
];

export default function Developers() {
  return (
    <section className="developers-section" id="team">
      <div className="section-header-block">
        <div className="badge-pill">
          <Users size={14} className="text-beam" />
          <span>The Minds Behind Milky</span>
        </div>
        <h2 className="section-title">Built by Two Passionate Engineers</h2>
        <p className="section-subtitle">
          Milky Launcher is built by independent creators driven to make Android calm, fast, 
          and free from telemetry.
        </p>
      </div>

      <div className="team-cards-grid">
        {devTeam.map((dev, idx) => (
          <div key={idx} className="dev-card glass-panel">
            <div className="dev-card-top">
              <div className="dev-avatar-wrapper">
                <img 
                  src={dev.avatar} 
                  alt={dev.name} 
                  className="dev-avatar"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="dev-status-indicator" />
              </div>
              <div className="dev-meta">
                <h3 className="dev-name">{dev.name}</h3>
                <span className="dev-role">{dev.role}</span>
                <span className="dev-handle">{dev.handle}</span>
              </div>
            </div>

            <p className="dev-bio">{dev.bio}</p>

            <div className="dev-links-row">
              {dev.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-link-pill"
                  aria-label={`${dev.name} ${link.label}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  <ExternalLink size={12} className="link-arrow" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
