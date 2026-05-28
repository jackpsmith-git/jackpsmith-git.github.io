import { ScrollCarousel } from "../components/ScrollCarousel.jsx";
import { SlidingCard } from "../components/SlidingCard.jsx"
import { FEATURED_PROJECTS, LANG_COLS } from "../Constants.jsx";
import { ExternalButton } from "../components/ExternalButton.jsx"

export const Projects = () => {
  return (
    <div id="projects" className="my-80">
      {FEATURED_PROJECTS.map((project, index) => (
        <SlidingCard key={project.name} link={project.link} fromLeft={index % 2 == 0} style={{backgroundImage: `url(${project.image})`}} className={`my-20 bg-cover bg-center w-full h-full`}>
          <h1 className="font-bold text-lg">{project.name}</h1>

          <div className="mt-2 flex flex-wrap justify-start gap-1.5">
            {project.languages.slice(0, 12).map((lang) => (
              <span
                key={lang}
                style={{
                  fontSize: 12,
                  padding: "2px 6px",
                  borderRadius: 4,
                  background: LANG_COLS[lang] || "#000",
                }}
              >
                {lang}
              </span>
            ))}
          </div>
          <hr className="border border-white/30 w-full mt-4"/>
          <p className="mt-2 line-clamp-3">{project.description}</p>
        </SlidingCard>
      ))}
      
    </div>

  // SCROLL CAROUSEL VERSION
  // <div className='flex justify-center p-6 pb-0 mt-0 mb-0 scroll-mt-20 relative z-10 bg-transparent'>
  //   <div className="max-w-250 mx-auto px-10 py-5 bg-transparent">
  //     <div>
  //       <ScrollCarousel />
  //     </div>
  //   </div>
  // </div>

  );
};