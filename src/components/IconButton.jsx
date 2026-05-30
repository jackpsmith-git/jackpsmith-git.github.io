import { Link } from "react-router-dom"

export const IconButton = ({link, route, image, alt, invert=false}) => {
  if (invert) {
    return (
      <a className="border border-gray-700 dark:border-[#faf2d8] inline-block rounded-[5px] p-2 group transition-col" href={link} target="_blank">
        <div className=" dark:brightness-0 dark:invert transition-all duration-700 ease-in-out">
          <img className="h-7.5 w-7.5 object-contain block scale-100 transition-transform duration-[1ms] ease-in-out group-hover:scale-125" src={image} alt={alt} height={40}></img>
        </div>
      </a>
    )
  }

  if (route) {
    return (
      <Link to={link} className="border border-gray-700 dark:border-[#faf2d8] inline-block rounded-[5px] p-2 group transition-col">
        <img className="h-7.5 w-7.5 object-contain block scale-100 transition-transform duration-[1ms] ease-in-out group-hover:scale-125" src={image} alt={alt} height={40}></img>
      </Link>
    )
  }
  
  return (
    <a className="border border-gray-700 dark:border-[#faf2d8] inline-block rounded-[5px] p-2 group transition-col" href={link} target="_blank">
      <img className="h-7.5 w-7.5 object-contain block scale-100 transition-transform duration-[1ms] ease-in-out group-hover:scale-125" src={image} alt={alt} height={40}></img>
    </a>
  )
}