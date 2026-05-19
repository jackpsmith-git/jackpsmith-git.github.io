export const IconButton = ({link, image, alt, invert=false}) => {
  if (invert) {
    return (
      <a className="border border-white/10 inline-block bg-[rgba(20,20,20,0.55)] rounded-[5px] p-2 shadow-[0px_2px_5px_0px_#000000a9] group" href={link} target="_blank">
        <img className="h-[30px] w-[30px] brightness-0 invert object-contain block scale-100 transition-transform duration-[1ms] ease-in-out group-hover:scale-125" src={image} alt={alt} height={40}></img>
      </a>
    )
  }
  
  return (
    <a className="border border-white/10 inline-block bg-[rgba(20,20,20,0.55)] rounded-[5px] p-2 shadow-[0px_2px_5px_0px_#000000a9] group" href={link} target="_blank">
      <img className="h-[30px] w-[30px] object-contain block scale-100 transition-transform duration-[1ms] ease-in-out group-hover:scale-125" src={image} alt={alt} height={40}></img>
    </a>
  )
}