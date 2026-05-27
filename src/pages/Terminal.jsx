import { ReactTerminal } from 'react-terminal'
import { COMMANDS } from '../Commands.jsx'

export const Terminal = () => {
  return(
    <div id="terminal" className='w-full h-full min-h-screen bg-black flex flex-col'>
      <div className="w-full h-full px-4 py-1 rounded-t-xl flex items-center gap-2">
        <img
          src="/assets/images/terminal.png"
          className="h-4 w-4 object-contain invert brightness-100"
          alt="terminal icon"
        />
        <p className="text-sm font-medium text-[gray]">Terminal</p>
      </div>
      <hr className='border-white/50'/>
      <div className='overflow-hidden whitespace-pre-wrap min-h-screen'>
        <ReactTerminal
          commands={COMMANDS}
          themes={{
            "dark-mode": {
              themeBGColor: "transparent",
              themeColor: "#FFFEFC",
              themePromptColor: "#08e500",
            },
          }}
          prompt={`jackpsmith.vercel.app >`}
          theme="dark-mode"
          showControlBar={false}
          errorMessage="Command not recognized."
          welcomeMessage={
            <div>
              https://jackpsmith.vercel.app<br />
              Terminal initialized...<br/>
              Run 'help' to view commands.<br/>
              Run 'exit' to return to GUI mode.<br/>
              ㅤ
            </div>
          }
        />
      </div>
    </div>
  )
}