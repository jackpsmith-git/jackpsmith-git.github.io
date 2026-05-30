import { ThemeToggle } from '../components/ThemeToggle.jsx'
import { IconButton } from '../components/IconButton'

export const Socials = () => {
  return (
    <>
    <div className='h-screen bg-white dark:bg-gray-700 relative z-10 transition-col'>
      <div className='flex flex-col w-full h-full items-center justify-center'>
        <img className="h-25 w-25 mx-auto rounded-full aspect-square object-cover object-top mb-2" src="./assets/images/headshot.jpeg"></img>
        <h1 className='text-gray-700 dark:text-[#faf2d8] transition-col font-bold text-2xl'>Jack P Smith</h1>
        <h3 className='text-gray-700 dark:text-[#faf2d8] transition-col'>Software Developer | White Plains, NY</h3>

        <div className="flex items-center justify-center pt-3.75 gap-2">
          <IconButton link="/" image="./assets/icons/favicon.svg" alt="J" route/>
          <IconButton link="mailto:jpsmith8603@gmail.com" image="./assets/images/email.png" alt="Email" invert/>
          <IconButton link="https://github.com/jackpsmith-git" image="./assets/images/github.png" alt="GitHub logo" invert/>
          <IconButton link="https://www.linkedin.com/in/jackpetersmith" image="./assets/images/linkedin.png" alt="LinkedIn logo"/>
          <IconButton link="https://www.nuget.org/profiles/jackpsmith" image="./assets/images/nuget.png" alt="NuGet logo" invert/>
        </div>
      </div>
    </div>
    <ThemeToggle />
    </>
  )
}