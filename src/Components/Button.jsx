export const Button = ({ children, href, className = "" }) => {
  if (href) {
    return (
      <a href={href} className={`${className} text-slate-400 no-underline`}>
        <button className="cursor-pointer bg-[rgba(20,20,20,0.55)] rounded-md hover:bg-[rgba(20,20,20,0.99)] border border-white/10 px-[16px] py-[10px] text-white font-semibold">
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={`${className} bg-[rgba(20,20,20,0.55)] rounded-md hover:bg-[rgba(20,20,20,0.99)] border border-white/10 px-[16px] py-[10px] text-white font-semibold`}>
      {children}
    </button>
  );
};