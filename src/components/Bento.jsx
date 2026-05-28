import { Float } from './Float.jsx'
import { Link } from 'react-router-dom'

const sizeClasses = {
  xs: "col-span-1",
  sm: "col-span-3 sm:col-span-2",
  smd: "col-span-6 sm:col-span-2",
  smmd: "col-span-6 sm:col-span-4 sm:text-lg text-md",
  md: "col-span-3 sm:col-span-4 md:col-span-4 sm:text-lg text-sm",
  lg: "col-span-6 sm:col-span-6 md:col-span-6",
}

export const BentoGrid = ({children, className="", id=""}) => {
  return (
    <div id={id} className={`
    ${className}
    items-stretch justify-center
    mx-auto
    grid gap-4
    grid-cols-6
  `}>
      {children}
    </div>
  )
}

export const BentoTile = ({
  id="",
  children,
  className = "",
  size = "md",
  link,
  target="_blank",
  rel="noopener noreferrer",
  minHeight = "min-h-[180px]",
}) => {
  if (link) {
    return (
      <Float
        id={id}
        className={`${className} ${sizeClasses[size]} ${minHeight} min-w-0 border border-white/10 bg-[rgba(20,20,20,0.55)] hover:bg-[rgba(20,20,20,0.99)] rounded-xl scale-100 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[4px_4px_12px_rgba(0,0,0,0.3)]`}
      >
        <a className="pointer" href={link} target={target} rel={rel}>
          <div className="h-full w-full flex items-center justify-center">
            {children}
          </div>
        </a>
      </Float>
    )
  }

  return (
    <Float
      id={id}
      className={`${className} ${sizeClasses[size]} ${minHeight} min-w-0 border border-white/10 bg-[rgba(20,20,20,0.55)] hover:bg-[rgba(20,20,20,0.99)] rounded-xl scale-100 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[4px_4px_12px_rgba(0,0,0,0.3)]`}
    >
      <div className="h-full w-full flex items-center justify-center">
        {children}
      </div>
    </Float>
  );
};

export const BentoProject = ({ name, languages, description, image, link, langColors, className="" }) => {
  return (
    <BentoTile size="sm" link={link} className={`${className}`}>
      <div className="rounded-lg p-2.5">
        <img src={image} alt={name} className="w-full" />

        <h3 className="pt-2.5 text-center text-[10pt] font-bold">
          {name}
        </h3>

        <span className="flex flex-wrap justify-center gap-1 mt-2 mb-3.75">
          {languages.slice(0, 12).map((lang) => (
          <span
            key={lang}
            className="text-xs px-2 py-0.5 rounded-sm text-white"
            style={{
            backgroundColor: langColors?.[lang] || "#000000",
            }}
          >
            {lang}
          </span>
          ))}
        </span>

        <hr className="opacity-30" />

        <p className="mt-2.5 mb-0 text-sm text-center">
          {description}
        </p>
      </div>
    </BentoTile>
  );
};

export const BentoButton = ({children, link, minHeight, target, rel}) => {
  return (
    <BentoTile minHeight='0px' size="lg" link={link} target={target} rel={rel} className='rounded-md font-semibold py-3'>
      {children}
    </BentoTile>
  )
}

export const BentoRoute = ({children, to, minHeight, target, rel}) => {
  return (
    <BentoTile minHeight='0px' size="lg" className='rounded-md font-semibold py-3'>
      <Link to={to} className='w-full h-full text-center'>
          {children}
      </Link>
    </BentoTile>
  )
}

export const BentoHeading = ({name, className="", id=""}) => {
  return (
    <BentoTile size='lg' minHeight='min-h-[50px]' className={className} id={id}>
      <h2 className='text-center text-white font-semibold text-lg'>
        {name}
      </h2>
    </BentoTile>
  )
}