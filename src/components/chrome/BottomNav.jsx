import GlassButton from "../ui/GlassButton";
import WalletIcon from "../icons/WalletIcon";
import SwapIcon from "../icons/SwapIcon";
import SettingsIcon from "../icons/SettingsIcon";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <GlassButton className="nav-btn">
        <WalletIcon />
      </GlassButton>

      <GlassButton className="nav-btn">
        <SwapIcon />
      </GlassButton>

      <GlassButton className="nav-btn">
        <SettingsIcon />
      </GlassButton>
    </div>
  );
}