import "./ExternalButton.css";

export const ExternalButton = ({ size = 60 }) => {
  return (
    <div className="circle-link" style={{ width: size, height: size }}>
      <div className="circle" >
        <img src="assets/icons/external.svg" alt="icon" className="circle-icon" />
      </div>
    </div>
  );
};