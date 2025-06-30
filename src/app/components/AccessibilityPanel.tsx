'use client';

import { useState, useEffect } from 'react';

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  const applySettings = (newSettings: typeof settings) => {
    const html = document.documentElement;
    
    if (newSettings.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }

    if (newSettings.largeText) {
      html.classList.add('large-text');
    } else {
      html.classList.remove('large-text');
    }

    if (newSettings.reducedMotion) {
      html.classList.add('reduced-motion');
    } else {
      html.classList.remove('reduced-motion');
    }
  };

  const updateSetting = (key: keyof typeof settings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
    };
    setSettings(defaultSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(defaultSettings));
    applySettings(defaultSettings);
  };

  return (
    <>
      {/* Accessibility Panel Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-50 w-12 h-12 bg-accent text-background rounded-full shadow-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <svg 
          className="w-6 h-6 mx-auto" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className="fixed top-20 right-16 z-50 w-80 bg-background border border-accent rounded-lg shadow-xl p-6"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="false"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 id="accessibility-title" className="text-xl font-bold text-accent">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/60 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label="Close accessibility settings"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm font-medium text-foreground">
                High Contrast Mode
              </label>
              <button
                id="high-contrast"
                onClick={() => updateSetting('highContrast')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  settings.highContrast 
                    ? 'bg-accent text-background' 
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
                aria-describedby="high-contrast-description"
              >
                {settings.highContrast ? 'ON' : 'OFF'}
              </button>
            </div>
            <p id="high-contrast-description" className="text-xs text-foreground/60">
              Increases contrast for better visibility
            </p>

            {/* Large Text Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="large-text" className="text-sm font-medium text-foreground">
                Large Text
              </label>
              <button
                id="large-text"
                onClick={() => updateSetting('largeText')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  settings.largeText 
                    ? 'bg-accent text-background' 
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
                aria-describedby="large-text-description"
              >
                {settings.largeText ? 'ON' : 'OFF'}
              </button>
            </div>
            <p id="large-text-description" className="text-xs text-foreground/60">
              Increases font size for better readability
            </p>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm font-medium text-foreground">
                Reduce Motion
              </label>
              <button
                id="reduced-motion"
                onClick={() => updateSetting('reducedMotion')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  settings.reducedMotion 
                    ? 'bg-accent text-background' 
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
                aria-describedby="reduced-motion-description"
              >
                {settings.reducedMotion ? 'ON' : 'OFF'}
              </button>
            </div>
            <p id="reduced-motion-description" className="text-xs text-foreground/60">
              Minimizes animations and motion effects
            </p>

            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 text-sm bg-gray-700 text-foreground rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
              >
                Reset to Default
              </button>
            </div>
          </div>

          {/* Keyboard Instructions */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <h3 className="text-sm font-medium text-foreground mb-2">Keyboard Navigation</h3>
            <ul className="text-xs text-foreground/60 space-y-1">
              <li>• Tab: Navigate between elements</li>
              <li>• Enter/Space: Activate buttons and links</li>
              <li>• Escape: Close panels and modals</li>
              <li>• Arrow keys: Navigate within menus</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityPanel; 