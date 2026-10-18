import React, { useState, useEffect } from 'react';
import './App.css';
import PrivacyPolicy from './PrivacyPolicy';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DownloadLaunch from './components/DownloadLaunch';
import Developers from './components/Developers';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('privacy') || hash.includes('privacy')) {
        return 'privacy';
      }
    }
    return 'home';
  });

  const navigateTo = (view) => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      if (view === 'privacy') {
        window.history.pushState({ view: 'privacy' }, 'Privacy Policy – Milky Launcher', '/privacy');
      } else {
        window.history.pushState({ view: 'home' }, 'Milky Launcher – Android Home Screen Launcher', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('privacy') || hash.includes('privacy')) {
        setCurrentView('privacy');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

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

  if (currentView === 'privacy') {
    return (
      <PrivacyPolicy onNavigateHome={() => navigateTo('home')} />
    );
  }

  return (
    <div className="milky-app-root">
      {/* Dynamic Cosmic Ambient Gradients */}
      <div className="cosmic-ambient-glow glow-top" />
      <div className="cosmic-ambient-glow glow-middle" />
      <div className="cosmic-ambient-glow glow-bottom" />

      {/* Navigation */}
      <Navbar 
        onNavigatePrivacy={() => navigateTo('privacy')}
        onNavigateHome={() => navigateTo('home')}
        currentView={currentView}
      />

      {/* Main Content Sections */}
      <main className="milky-main-content">
        <Hero timeLeft={timeLeft} />
        <Features />
        <DownloadLaunch timeLeft={timeLeft} />
        <Developers />
      </main>

      {/* Footer */}
      <Footer onNavigatePrivacy={() => navigateTo('privacy')} />
    </div>
  );
}
