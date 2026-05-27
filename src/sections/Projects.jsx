import { ScrollCarousel } from "../components/ScrollCarousel.js";

export const Projects = () => {
  return (
  <div className='flex justify-center p-6 pb-0 mt-0 mb-0 scroll-mt-20 relative z-10 bg-transparent'>
    <div className="max-w-[1000px] mx-auto px-10 py-5 bg-transparent">
      <div>
        <ScrollCarousel />
      </div>
    </div>
  </div>
  );
};