import { Content } from "./Content.jsx";
import { IconButton } from "./IconButton.jsx";

export const Footer = () => { 
  return (<>
    <Content>
      <hr className="border border-gray-700/40 dark:border-[#faf2d8]/40 transition-col"/>
      <footer id='contact' className="w-full bg-white dark:bg-black transition-col p-0 pb-2.5 m-0 flex justify-center bottom-0">
        <div className="flex flex-col justify-center scroll-mt-20 bg-white dark:bg-black transition-col relative">
          <div className="flex items-center justify-center">
            <div className="dark:bg-transparent rounded-sm my-3 mx-6 text-center py-6 px-12 w-auto grow text-gray-700 dark:text-[#faf2d8] transition-col">
              <img className="h-25 w-25 mx-auto rounded-full aspect-square object-cover object-top" src="./assets/images/headshot.jpeg"></img>
              <h3 className="pt-3.75">Jack P Smith</h3>
              <p className="text-sm text-lightgray dark:text-gray-400 transition-col">Software Developer | White Plains, NY</p>
        
              <div className="flex items-center justify-center pt-3.75 gap-2">
                <IconButton link="mailto:jpsmith8603@gmail.com" image="./assets/images/email.png" alt="Email" invert/>
                <IconButton link="https://github.com/jackpsmith-git" image="./assets/images/github.png" alt="GitHub logo" invert/>
                <IconButton link="https://www.linkedin.com/in/jackpetersmith" image="./assets/images/linkedin.png" alt="LinkedIn logo"/>
                <IconButton link="https://www.nuget.org/profiles/jackpsmith" image="./assets/images/nuget.png" alt="NuGet logo" invert/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Content>
  </>);}