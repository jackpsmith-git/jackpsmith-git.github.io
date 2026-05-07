import "./ShakeCard.css"

export const ShakeCard = ({ children, href, className = "" }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="shakecard">
          {children}
        </div>
      </a>
    );
  }

  return (
    <div className="shakecard">
      {children}
    </div>
  );
};