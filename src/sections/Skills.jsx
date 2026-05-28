import { BentoGrid, BentoTile } from "../components/Bento"
import { SECTIONS } from "../Constants"
import { Float } from "../components/Float"

export const Skills = () => {
  return (
    <Float className="mx-[5vw]">
      <div className="flex flex-col text-center text-white">
        <h1 className="text-2xl font-semibold pb-8">Skills</h1>
        <div className="items-stretch justify-center
          grid gap-4
          grid-cols-4 sm:grid-cols-6"
          >
          {Object.entries(SECTIONS).flatMap(([sectionKey, sectionValue]) =>
            Object.entries(sectionValue).map(([key, value]) => (
              <div key={`${sectionKey}-${key}`} className='flex flex-row items-center justify-center gap-2 text-center my-3'>
                <img src={value} alt={name} className='aspect-square h-12 object-contain' />
                <h4 className='hidden lg:block text-sm font-medium whitespace-nowrap'>{key}</h4>
              </div>
            ))
          )}
        </div>
      </div>
    </Float>
  )
}