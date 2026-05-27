export const Skill = ({ name, image }) => {
  return (
    <div
      className="flex items-center justify-center gap-2
        rounded-md
        border border-white/10
        bg-[rgba(20,20,20,0.55)]
        py-2
        text-white
        backdrop-blur-[14px]
        transition-transform duration-200
        hover:scale-110
        hover:bg-[rgba(20,20,20,0.99)]"
    >
      <img
        src={image}
        alt={name}
        className="h-[30px] w-[30px] object-contain"
      />

      <h4 className="text-sm font-medium whitespace-nowrap">
        {name}
      </h4>
    </div>
  );
};