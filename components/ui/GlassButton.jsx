export default function glassButton({
  children,
  className = "",
  onClick,
  ...props
}) {
  return (
    <button 
      className={`glass-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
