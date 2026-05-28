import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { GitHubInfo } from '../components/GitHubInfo.jsx'
import { BentoTile, BentoHeading } from '../components/Bento.jsx';

export const About = () => {
  const user = useGitHubUser();

  return (
    <>
      <BentoTile id='about' size='smd'>
        <img src="./assets/images/headshot.jpeg" alt="Headshot" className='p-5 max-h-80'/>
      </BentoTile>
      
      <BentoTile size='smmd'>
        {user && (
          <p className="text-center px-3.75 font-semibold mx-10 p-4.5">
            {user.bio} Click on the 'Projects' tab to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.
          </p>
        )}
      </BentoTile>

      <BentoTile size="lg">
        <div className=" rounded-xl p-4.5 mx-auto w-fit">
          <p className="px-3.75 mb-0"><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
          <div className="px-3.75 my-0">Bachelor of Science (BS) in Computer Science</div>
          <div className="px-3.75 my-0"><strong>GPA</strong>: 3.93 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</div>
          <br/>
          <p className="px-3.75 mb-0"><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
          <div className="px-3.75 my-0">Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</div>
          <div className="px-3.75 my-0"><strong>GPA</strong>: 3.44</div>
        </div>
      </BentoTile>

      <BentoTile size='lg' className='px-4.5 py-4.5'>
        {user && (
          <GitHubInfo username = {user.username} avatar={user.avatar} followingCount={user.followingCount} followersCount={user.followersCount} starredReposCount={user.starredReposCount} organizationsCount={user.organizationsCount}/>
        )}
      </BentoTile>

      <BentoTile size="lg">
        <div className="text-sm text-center py-10 px-5">
          <p className="text-xl font-bold">"You might not think that programmers are artists, but programming is an extremely creative profession."</p>
          <p className="mt-1.25">- John Romero</p>
          <p className="text-gray-400">Co-Founder, id Software</p>
        </div>
      </BentoTile>
    </>
  )
}