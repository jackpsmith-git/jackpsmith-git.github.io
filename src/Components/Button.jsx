import "./Button.css"

export const Button = ({ children, href, className = "" }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={`${className}`}>
          <div className="button-padding">
          {children}
          </div>
        </button>
      </a>
    );
  }

  return (
    <button className={`${className}`}>
      {children}
    </button>
  );
};