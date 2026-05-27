import { Float } from '../components/Float.jsx'
import { GitHubInfo } from '../components/GitHubInfo.jsx'
import { BentoGrid, BentoProject, BentoButton, BentoTile, BentoSkill, BentoHeading } from '../components/Bento.jsx'
import { BouncyOrb } from '../components/BouncyOrb.jsx'
import { FlappyWidget } from '../components/FlappyWidget.jsx'
import { FEATURED_PROJECTS, LANG_COLS, SECTIONS } from '../Constants.jsx'
import { COMMANDS } from '../Commands.jsx'
import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { ReactTerminal } from 'react-terminal'
import { TicTacToe } from '../components/TicTacToe.jsx'
import { GameOfLife } from '../components/GameOfLife.jsx'

export const Home = () => {
  const user = useGitHubUser();

  return (
    <section
      id="home"
      className="relative z-10 bg-transparent bg-fixed text-white p-6 scroll-mt-20"
    >
      <div className="max-w-250 mx-auto mb-30">
        <BentoGrid>

          <BentoTile size="lg">
            <div className="text-sm text-center py-10 px-5">
              <p className="text-xl font-bold">"You might not think that programmers are artists, but programming is an extremely creative profession."</p>
              <p className="mt-1.25">- John Romero</p>
              <p className="text-gray-400">Co-Founder, id Software</p>
            </div>
          </BentoTile>

          <BentoHeading id='about' name='About'/>

          <BentoTile size='smd'>
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

          <BentoHeading id='skills' name='Skills'/>

          {Object.entries(SECTIONS).flatMap(([sectionKey, sectionValue]) =>
            Object.entries(sectionValue).map(([key, value]) => (
              <BentoSkill key={`${sectionKey}-${key}`} name={key} image={value} />
            ))
          )}

          <BentoHeading id='projects' name='All Projects'/>

          {FEATURED_PROJECTS.map((project) => (
            <BentoProject
              key={project.name}
              {...project}
              langColors={LANG_COLS}
            />
          ))}

          <BentoHeading id='widgets' name='Fun Stuff'/>

          <BentoTile size="sm" minHeight='min-h-[300px]'>
            <div className="w-full h-full p-1">
              <div className="w-full h-full bg-white dark:bg-black rounded-lg transition-colors duration-700 ease-in-out">
                <BouncyOrb />
              </div>
            </div>
          </BentoTile>

          <BentoTile size="sm" minHeight='min-h-[300px]'>
            <div className="w-full h-full p-1">
              <div className="w-full h-full bg-white dark:bg-black rounded-lg transition-colors duration-700 ease-in-out">
                <TicTacToe />
              </div>
            </div>
          </BentoTile>

          <BentoTile size="sm" minHeight='min-h-[300px]'>
            <div className="w-full h-full p-1">
              <div className="w-full h-full bg-white dark:bg-black rounded-lg transition-colors duration-700 ease-in-out">
                <GameOfLife />
              </div>
            </div>
          </BentoTile>

          <BentoTile size="lg" minHeight='min-h-[300px]'>
            <div className="w-full h-full p-1">
              <div className="w-full h-full bg-white dark:bg-black rounded-lg transition-colors duration-700 ease-in-out">
                <FlappyWidget />
              </div>
            </div>
          </BentoTile>

          <BentoTile size="lg" minHeight='min-h-[300px]'>
            <div className="w-full h-full flex-1 font-light text-xs">
              <div className='w-full h-full'>
                <div className="dark:bg-transparent w-full px-4 py-1 rounded-t-xl flex items-center gap-2">
                  <img
                    src="/assets/images/terminal.png"
                    className="h-4 w-4 object-contain brightness-100 invert"
                    alt="terminal icon"
                  />
                  <p className="text-sm font-medium">Terminal</p>
                </div>
                <hr className='border-white/50'/>
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