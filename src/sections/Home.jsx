import { Float } from '../components/Float.jsx'
import { GitHubInfo } from '../components/GitHubInfo.jsx'
import { BentoGrid, BentoProject, BentoButton, BentoTile, BentoSkill, BentoHeading } from '../components/Bento.jsx'
import { FEATURED_PROJECTS, LANG_COLS, SECTIONS } from '../Constants.jsx'
import { COMMANDS } from '../Commands.jsx'
import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { ReactTerminal } from 'react-terminal'

export const Home = () => {
  const user = useGitHubUser();

  return (
    <section
      id="home"
      className="relative z-10 bg-transparent bg-fixed text-white p-6 scroll-mt-[80px]"
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
            <div className="text-sm text-center py-[40px] px-[20px]">
              <p className="text-xl font-bold">"You might not think that programmers are artists, but programming is an extremely creative profession."</p>
              <p className="mt-[5px]">- John Romero</p>
              <p className="text-gray-400">Co-Founder, id Software</p>
            </div>
          </BentoTile>

          <BentoHeading id='about' name='About'/>

          <BentoTile size='sm'>
            <img src="./assets/images/headshot.jpeg" alt="Headshot" className='p-5'/>
          </BentoTile>
          
          <BentoTile size='lg'>
            {user && (
              <p className="text-center px-[15px] font-semibold mx-10 p-[18px]">
                {user.bio} Click on the 'Projects' tab to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.
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

          <BentoTile size="xxl" minHeight='min-h-[300px]'>
            <div className="w-full h-full flex-1 font-light text-xs">
              <div className='w-full h-full'>
                <div className="bg-black w-full px-4 py-1 rounded-t-xl flex items-center gap-2">
                  <img
                    src="/assets/images/terminal.png"
                    className="h-4 w-4 object-contain brightness-100 invert"
                    alt="terminal icon"
                  />
                  <p className="text-sm font-medium">Terminal</p>
                </div>

                <div id='terminal' className='flex-1 overflow-hidden whitespace-pre-wrap'>
                  <ReactTerminal
                    commands={COMMANDS}
                    themes={{
                      "dark-mode": {
                        themeBGColor: "transparent",
                        themeColor: "#FFFEFC",
                        themePromptColor: "#08e500",
                      },
                    }}
                    prompt={`jackpsmith.git-github.io >`}
                    theme="dark-mode"
                    showControlBar={false}
                    errorMessage="Command not recognized."
                    welcomeMessage={
                      <div>
                        https://jackpsmith.git-github.io<br />
                        Terminal initialized...<br/>
                        Run 'help' to view commands.<br/>
                        ㅤ
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </BentoTile>

        </BentoGrid>
      </div>
    </section>
  );
};