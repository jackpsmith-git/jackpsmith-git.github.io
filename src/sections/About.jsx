import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { GitHubInfo } from '../components/GitHubInfo.jsx'
import { BentoTile, BentoHeading } from '../components/Bento.jsx';
import { Skills } from './Skills.jsx';
import { Float } from '../components/Float.jsx';

export const About = () => {
  const user = useGitHubUser();

  return (
    <>
      <div id='about' className='w-full bg-gray-700 dark:bg-black text-white py-18 drop-shadow-xl transition-colors duration-700 ease-in-out'>
        <div className='max-w-500 mx-auto'>
          <div className='mx-[8vw]'>

            <h2 className='text-2xl font-semibold'>About</h2>
            <hr className='mt-2 mb-10'/>

            <div className='grid grid-cols-3 gap-5'>
              <img src="./assets/images/headshot.jpeg" alt="Headshot" className='justify-self-end max-h-80 col-span-1'/>
              <div className='col-span-2'>
                {user && (
                  <p className="font-semibold col-span-2">
                    {user.bio} Click on the 'Projects' tab to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.
                  </p>
                )}
                {/* <h3 className='text-xl font-semibold mt-8 mb-2'>Education</h3> */}

                <p className="mt-5"><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
                <p>Bachelor of Science (BS) in Computer Science</p>
                <p className="mb-2"><strong>GPA</strong>: 3.93 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</p>
                <p><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
                <p>Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</p>
                <p><strong>GPA</strong>: 3.44</p>
              </div>

            </div>

            {user && (
              <Float className='my-12 border border-white rounded-xl p-8'>
                <GitHubInfo username = {user.username} avatar={user.avatar} followingCount={user.followingCount} followersCount={user.followersCount} starredReposCount={user.starredReposCount} organizationsCount={user.organizationsCount}/>
              </Float>
            )}
            
            <div className="text-sm text-center py-10 px-5">
              <p className="text-xl font-bold">"You might not think that programmers are artists, but programming is an extremely creative profession."</p>
              <p className="mt-1.25">- John Romero</p>
              <p className="text-gray-400">Co-Founder, id Software</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}