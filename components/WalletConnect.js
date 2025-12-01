import React, { useState } from 'react';
import './WalletConnect.css';

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectPhantom = async () => {
    try {
      if (window?.solana?.isPhantom) {
        const response = await window.solana.connect();
        const address = response.publicKey.toString();
        setWalletAddress(address);
        setIsConnected(true);
        return address;
      } else {
        alert('Phantom Wallet nicht gefunden!');
        window.open('https://phantom.app/', '_blank');
        return null;
      }
    } catch (error) {
      console.error('Phantom connection error:', error);
      return null;
    }
  };

  const connectSolflare = async () => {
    try {
      if (window?.solflare?.isSolflare) {
        // Solflare Verbindungslogik hier
        console.log('Solflare connection logic');
        return 'solflare_connected';
      } else {
        alert('Solflare Wallet nicht gefunden!');
        window.open('https://solflare.com/', '_blank');
        return null;
      }
    } catch (error) {
      console.error('Solflare connection error:', error);
      return null;
    }
  };

  const connectGlow = async () => {
    try {
      if (window?.glow?.isGlow) {
        // Glow Verbindungslogik hier
        console.log('Glow connection logic');
        return 'glow_connected';
      } else {
        alert('Glow Wallet nicht gefunden!');
        window.open('https://glow.app/', '_blank');
        return null;
      }
    } catch (error) {
      console.error('Glow connection error:', error);
      return null;
    }
  };

  const disconnectWallet = () => {
    if (window?.solana?.isPhantom && window.solana.disconnect) {
      window.solana.disconnect();
    }
    setIsConnected(false);
    setWalletAddress('');
  };

  const shortenAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <div className="wallet-connected">
        <span className="wallet-address">{shortenAddress(walletAddress)}</span>
        <button className="disconnect-button" onClick={disconnectWallet}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="wallet-connect">
      <button className="wallet-button" onClick={connectPhantom}>
        <span className="wallet-icon">👻</span>
        Phantom
      </button>
      
      <button className="wallet-button" onClick={connectSolflare}>
        <span className="wallet-icon">🔥</span>
        Solflare
      </button>
      
      <button className="wallet-button" onClick={connectGlow}>
        <span className="wallet-icon">✨</span>
        Glow
      </button>
    </div>
  );
};

export default WalletConnect;