import { IconButton } from "./IconButton.jsx";

export const Footer = () => { 
  return (
<footer className="w-full bg-white dark:bg-black transition-colors duration-700 ease-in-out p-0 pb-2.5 m-0 flex justify-center bottom-0">
    <div className="flex flex-col justify-center scroll-mt-20 bg-white dark:bg-purple-950/60 transition-colors duration-700 ease-in-out relative">
      <div className="flex items-center justify-center">
        <div className="dark:bg-transparent rounded-sm my-3 mx-6 text-center py-6 px-12 w-auto grow text-gray-700 dark:text-[#faeab4] transition-colors duration-700 ease-in-out">
          <img className="h-25 w-25 mx-auto rounded-full aspect-square object-cover object-top" src="./assets/images/headshot.jpeg"></img>
          <h3 className="pt-3.75">Jack P Smith</h3>
          <p className="m-0 mb-3.75 text-sm text-lightgray dark:text-gray-400 transition-colors duration-700 ease-in-out">White Plains, NY</p>
          <p className="text-center mt-0 mb-0 pb-0 hover:underline"><a href="mailto:jack.p.smith@pace.edu" target="_blank">jack.p.smith@pace.edu</a></p>
          <p className="text-center mt-0 mb-0 pb-0.5 hover:underline"><a href="mailto:jpsmith8603@gmail.com" target="_blank">jpsmith8603@gmail.com</a></p>
    
          <div className="flex items-center justify-center pt-3.75 gap-2">
            <IconButton link="https://github.com/jackpsmith-git" image="./assets/images/github.png" alt="GitHub logo" invert/>
            <IconButton link="https://www.linkedin.com/in/jackpetersmith" image="./assets/images/linkedin.png" alt="LinkedIn logo"/>
            <IconButton link="https://www.nuget.org/profiles/jackpsmith" image="./assets/images/nuget.png" alt="NuGet logo"/>
          </div>
        </div>
      </div>
    </div>
</footer>
);}