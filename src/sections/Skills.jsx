import { BentoGrid, BentoTile } from "../components/Bento"
import { SECTIONS } from "../Constants"

export const Skills = () => {
  return (
    <div className="xl:max-w-[80vw] mx-auto">

    <BentoTile id="skills" minHeight='min-h-[0px]' className="dark:border dark:border-white md:mx-12 mx-8 py-12 bg-gray-800 text-white dark:bg-black transition-colors duration-700 ease-in-out">
      <div className="flex flex-col text-center">
        <h1 className="text-xl font-semibold pb-5">Skills</h1>
        <div className="items-stretch justify-center
          grid gap-4
          grid-cols-4 sm:grid-cols-6"
          >
          {Object.entries(SECTIONS).flatMap(([sectionKey, sectionValue]) =>
            Object.entries(sectionValue).map(([key, value]) => (
              <div key={`${sectionKey}-${key}`} className='flex flex-row items-center justify-center gap-2 text-center my-3'>
                <img src={value} alt={name} className='aspect-square h-12 object-contain' />
                <h4 className='hidden md:block text-sm font-medium whitespace-nowrap'>{key}</h4>
              </div>
            ))
          )}
        </div>
      </div>
    </BentoTile>
    </div>
  )
}