import "./FeaturedCard.css"

export const FeaturedCard = ({ children, href, className = "" }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="featured-card">
          {children}
        </div>
      </a>
    );
  }

  return (
    <div className="featured-card">
      {children}
    </div>
  );
};