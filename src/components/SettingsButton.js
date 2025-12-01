import { useState } from 'react';
import './SettingsButton.css';

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const settingsOptions = [
    { label: 'Netzwerk wechseln', value: 'network' },
    { label: 'Dark Mode', value: 'theme' },
    { label: 'Währung', value: 'currency' },
    { label: 'Benachrichtigungen', value: 'notifications' },
    { label: 'Sicherheit', value: 'security' },
    { label: 'Beta-Feedback', value: 'feedback' },
    { label: 'Über', value: 'about' },
  ];

  return (
    <div className="settings-container">
      <button 
        className="settings-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Einstellungen"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="settings-overlay" 
            onClick={() => setIsOpen(false)}
          />
          <div className="settings-dropdown">
            <div className="settings-header">
              <h3>Einstellungen</h3>
              <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="settings-options">
              {settingsOptions.map((option) => (
                <button
                  key={option.value}
                  className="settings-option"
                  onClick={() => {
                    console.log(`Option ausgewählt: ${option.value}`);
                    // Hier kannst du die jeweilige Aktion implementieren
                    setIsOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              ))}
            </div>

            <div className="settings-footer">
              <div className="app-info">
                <div className="app-version">v1.0.0 Beta</div>
                <div className="network-status">
                  <span className="status-dot connected"></span>
                  Mainnet
                </div>
              </div>
              
              <button 
                className="logout-btn"
                onClick={() => {
                  // Wallet disconnect Logik
                  console.log('Disconnect Wallet');
                  setIsOpen(false);
                }}
              >
                Wallet trennen
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsButton;