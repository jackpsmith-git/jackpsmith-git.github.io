import { BentoHeading, BentoTile } from "../components/Bento"
import { BouncyOrb } from "../components/widgets/BouncyOrb"
import { TicTacToe } from "../components/widgets/TicTacToe"
import { GameOfLife } from "../components/widgets/GameOfLife"
import { FlappyWidget } from "../components/widgets/FlappyWidget"

export const Widgets = () => {
  return (
    <>
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
    </>
  )
}