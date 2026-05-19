export const ExternalButton = ({ size = 60 }) => {
  return (
    <div className="w-full h-full inline-flex" style={{ width: size, height: size }}>
      <div className="w-full h-full aspect-square rounded-full
        bg-transparent
        flex items-center justify-center
        cursor-pointer
        box-border
        transition-colors duration-200
        hover:bg-white
        group"
      >
        <img src="assets/icons/external.svg" alt="icon" className="w-[60%] h-[60%] object-contain invert brightness-0 transition duration-200 group-hover:invert-0"/>
      </div>
    </div>
  );
};