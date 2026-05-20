import { IconButton } from "./IconButton.jsx";

export const Footer = () => { 
  return (
<footer className="w-full bg-black p-0 pb-[10px] m-0 flex justify-center bottom-0">
    <div className="flex flex-col justify-center scroll-mt-[80px] bg-black relative">
      {/* <hr className="my-5 w-full border-0 border-t border-white/10"/> */}
      <div className="flex items-center justify-center">
        <div className="bg-black rounded-[4px] my-[12px] mx-[24px] text-center py-6 px-12 w-auto flex-grow text-white">
          <img className="h-[100px] w-[100px] mx-auto rounded-full aspect-square object-cover object-top" src="./assets/images/headshot.jpeg"></img>
          <h3 className="pt-[15px]">Jack P Smith</h3>
          <p className="m-0 mb-[15px] text-sm text-gray-400">White Plains, NY</p>
          <p className="text-center mt-0 mb-0 pb-[0px] hover:underline"><a href="mailto:jackpsmith@jackpsmith.com" target="_blank">jackpsmith@jackpsmith.com</a></p>
          <p className="text-center mt-0 mb-0 pb-[0px] hover:underline"><a href="mailto:jack.p.smith@pace.edu" target="_blank">jack.p.smith@pace.edu</a></p>
          <p className="text-center mt-0 mb-0 pb-[2px] hover:underline"><a href="mailto:jpsmith8603@gmail.com" target="_blank">jpsmith8603@gmail.com</a></p>
    
          <div className="flex items-center justify-center pt-[15px] gap-2">
            <IconButton link="https://github.com/jackpsmith-git" image="./assets/images/github.png" alt="GitHub logo" invert/>
            <IconButton link="https://www.linkedin.com/in/jackpetersmith" image="./assets/images/linkedin.png" alt="LinkedIn logo invert"/>
            <IconButton link="https://www.nuget.org/profiles/jackpsmith" image="./assets/images/nuget.png" alt="NuGet logo" invert/>
          </div>
        </div>
      </div>
    </div>
</footer>
);}