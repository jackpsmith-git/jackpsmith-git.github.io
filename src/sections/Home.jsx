import { Button } from '../components/Button.jsx'
import { Float } from '../components/Float.jsx'
import { GitHubInfo } from '../components/GitHubInfo.jsx'
import { BentoGrid, BentoProject, BentoButton, BentoTile, BentoSkill, BentoHeading } from '../components/Bento.jsx'
import { FEATURED_PROJECTS, LANG_COLS, SECTIONS } from "../Constants.js"
import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { ReactTerminal } from 'react-terminal'

export const Home = () => {
  const user = useGitHubUser();
  const commands = {
    test: "Hello World!",
    echo: (...args) => args.join(" "),
  }

  return (
    <section
      id="home"
      className="relative z-10 bg-black text-white p-6 scroll-mt-[80px]"
    >
      <div className="max-w-[1000px] mx-auto">
        <BentoGrid>
          
          {FEATURED_PROJECTS.map((project) => (
            <BentoProject
              key={project.name}
              {...project}
              langColors={LANG_COLS}
            />
          ))}

          <BentoButton link='#projects' target="_self" rel="">
            <h3>See More</h3>
          </BentoButton>

          <BentoTile size="xxl">
            <div className="text-center py-[40px] px-[20px] text-sm">
              <h1 className="text-xl font-bold">"You might not think that programmers are artists, but programming is an extremely creative profession."</h1>
              <h3 className="m-0 mt-[5px]">- John Romero</h3>
              <p className="m-0 text-gray-400">Co-Founder, id Software</p>
            </div>
          </BentoTile>

          <BentoHeading id='about' name='About'/>

          <BentoTile size='sm'>
            <img src="./assets/images/headshot.jpeg" alt="Headshot" className='p-5'/>
          </BentoTile>
          
          <BentoTile size='lg'>
            {user && (
              <p className="text-center px-[15px] font-semibold mx-10 p-[18px]">
                {user.bio} Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.
              </p>
            )}
          </BentoTile>

          <BentoTile size="xxl">
            <div className=" rounded-xl p-[18px] mx-auto w-fit">
              <p className="px-[15px] mb-0"><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
              <div className="px-[15px] my-0">Bachelor of Science (BS) in Computer Science</div>
              <div className="px-[15px] my-0"><strong>GPA</strong>: 3.93 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</div>
              <br/>
              <p className="px-[15px] mb-0"><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
              <div className="px-[15px] my-0">Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</div>
              <div className="px-[15px] my-0"><strong>GPA</strong>: 3.44</div>
            </div>
          </BentoTile>

          <BentoTile size='xxl' className='px-[18px] py-[18px]'>
            {user && (
              <GitHubInfo username = {user.username} avatar={user.avatar} followingCount={user.followingCount} followersCount={user.followersCount} starredReposCount={user.starredReposCount} organizationsCount={user.organizationsCount}/>
            )}
          </BentoTile>

          <BentoHeading id='skills' name='Skills'/>

          {Object.entries(SECTIONS).flatMap(([sectionKey, sectionValue]) =>
            Object.entries(sectionValue).map(([key, value]) => (
              <BentoSkill key={`${sectionKey}-${key}`} name={key} image={value} />
            ))
          )}

          <BentoTile size='xxl'>
            <ReactTerminal 
              commands = {commands}
              themes = {{
                "dark-mode": {
                  themeBGColor: "transparent",
                  themeColor: "#FFFEFC",
                  themePromptColor: "#08e500"
                }
              }}
              theme='dark-mode'
              showControlBar={false}
              welcomeMessage='commands: [clear][test][echo]'
            />
          </BentoTile>

        </BentoGrid>
      </div>
    </section>
  );
};