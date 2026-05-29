import { BouncyOrb } from "../components/widgets/BouncyOrb"
import { TicTacToe } from "../components/widgets/TicTacToe"
import { GameOfLife } from "../components/widgets/GameOfLife"
import { FlappyWidget } from "../components/widgets/FlappyWidget"
import { WidgetCarousel } from "../components/WidgetCarousel"

export const Widgets = () => {
  return (
    <div id="widgets" className="min-h-60 max-w-500 mx-auto py-10">
      <WidgetCarousel
        items={[
            <TicTacToe />,
            <BouncyOrb />,
            <GameOfLife />,
            // <FlappyWidget />
        ]}
      />
    </div>
  )
}