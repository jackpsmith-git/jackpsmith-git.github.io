import "./Shake.css"

export const Shake = ({ children, href, className= "" }) => {
    if (href) {
        return(
            <a href={href} target="_blank" rel="noopener noreferrer">
                <div className="shake-link">
                    {children}
                </div>
            </a>
        );
    }

    return (
        <div className="shake">
            {children}
        </div>
    );
}