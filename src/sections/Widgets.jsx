import { BouncyOrb } from "../components/widgets/BouncyOrb"
import { TicTacToe } from "../components/widgets/TicTacToe"
import { GameOfLife } from "../components/widgets/GameOfLife"
import { FlappyWidget } from "../components/widgets/FlappyWidget"
import { WidgetCarousel } from "../components/WidgetCarousel"
import { Link } from 'react-router-dom'

export const Widgets = () => {
  return (
    <>
    <section id="widgets" className="min-h-60 max-w-500 mx-auto py-10">
      <WidgetCarousel
        items={[
            <TicTacToe />,
            <BouncyOrb />,
            <GameOfLife />,
            // <FlappyWidget />
        ]}
      />
    </section>

    <div className="max-w-500 mx-auto pb-20 text-gray-700 dark:text-[#faf2d8] transition-col">
      <Link
        to="/terminal"
        className="
          block
          text-center
          border border-gray-700 dark:border-[#faf2d8]
          rounded-md
          font-semibold
          py-3 mx-[8vw] scale-100 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[4px_4px_12px_rgba(0,0,0,0.3)]
        "
      >
        Enter Terminal Mode
      </Link>
    </div>
    </>
  )
}