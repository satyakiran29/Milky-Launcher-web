import { 
  Send, 
  Globe, 
  Shield, 
  Heart, 
  Sparkles,
  ArrowUp
} from 'lucide-react';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Footer({ onNavigatePrivacy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="milky-footer">
      <div className="footer-top-container">
        <div className="footer-brand-col">
          <div className="footer-brand-head">
            <img 
              src="/logo.svg" 
              alt="Milky Launcher Logo" 
              className="footer-logo"
            />
            <span className="footer-brand-title">Milky Launcher</span>
          </div>
          <p className="footer-tagline">
            Dark, quiet, and out of the way. Built natively with Jetpack Compose for Android 8.0+.
          </p>
          <div className="footer-social-row">
            <a 
              href="https://t.me/milkylc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn"
              title="Official Telegram"
              aria-label="Telegram"
            >
              <Send size={16} />
            </a>
            <a 
              href="https://skdev.psatyakiran.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn"
              title="Developer Studio skdevs"
              aria-label="skdevs website"
            >
              <Globe size={16} />
            </a>
            <a 
              href="https://github.com/Spyou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn"
              title="Krishna Vishwakarma on GitHub"
              aria-label="Krishna GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a 
              href="https://github.com/satyakiran29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn"
              title="Satyakiran on GitHub"
              aria-label="Satyakiran GitHub"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <span className="footer-col-title">Milky Launcher</span>
            <a href="#features" className="footer-link">Features & Design</a>
            <a href="#launch" className="footer-link">Google Play Launch</a>
            <a href="#team" className="footer-link">The Developers</a>
            <button onClick={onNavigatePrivacy} className="footer-link text-left">
              <Shield size={13} />
              <span>Privacy Policy</span>
            </button>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Community & Release</span>
            <a href="https://t.me/milkylc" target="_blank" rel="noopener noreferrer" className="footer-link highlight">
              <Send size={13} />
              <span>Telegram: @milkylc</span>
            </a>
            <span className="footer-link text-dim">Google Play Target: Nov 19, 2026</span>
            <span className="footer-link text-dim">Native Jetpack Compose</span>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Trust & Developers</span>
            <button onClick={onNavigatePrivacy} className="footer-link text-left">
              <Shield size={13} />
              <span>Privacy Policy</span>
            </button>
            <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer" className="footer-link">
              skdevs Studio
            </a>
            <a href="https://github.com/Spyou" target="_blank" rel="noopener noreferrer" className="footer-link">
              Krishna Vishwakarma
            </a>
            <a href="https://github.com/satyakiran29" target="_blank" rel="noopener noreferrer" className="footer-link">
              Satyakiran
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">
          © 2026 Milky Launcher. Developed with care by{' '}
          <a href="https://github.com/Spyou" target="_blank" rel="noopener noreferrer">Krishna Vishwakarma</a>{' '}
          &{' '}
          <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer">Satyakiran</a>.
        </p>

        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll back to top">
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
