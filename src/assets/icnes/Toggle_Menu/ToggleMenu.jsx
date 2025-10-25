import "./ToggleMenu.css";

const ToggleMenuIcon = ({ className = "", isActive = false }) => {
  return (
    <svg
      className={`toggle-menu-icon ${className} ${isActive ? "active" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path className="line1" d="M120-240v-80h720v80H120Z" />
      <path className="line2" d="M120-440v-80h720v80H120Z" />
      <path className="line3" d="M120-640v-80h720v80H120Z" />
    </svg>
  );
};

export default ToggleMenuIcon;
