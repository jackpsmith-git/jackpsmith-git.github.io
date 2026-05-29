import { BentoGrid, BentoTile } from "../components/Bento"
import { SECTIONS } from "../Constants"
import { Float } from "../components/Float"

export const Skills = () => {
  return (
    <div id='skills' className="bg-white dark:bg-black dark:text-[#faeab4] text-gray-700 transition-colors duration-700 ease-in-out">
      <div className="max-w-500 mx-auto">
        <div className="py-12 px-[8vw]">
          <h2 className='text-2xl font-semibold'>Skills</h2>
          <hr className='mt-2 mb-10'/>
          <div className="flex flex-col text-center">
              <div className="items-stretch justify-center
                grid gap-4
                grid-cols-6"
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
        </div>
      </div>
    </div>
  )
}