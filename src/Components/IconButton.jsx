import "./IconButton.css"
import { Shake } from "./Shake.jsx"

export const IconButton = ({link, image, alt}) => {
  return (
    <a className="icon-button-link" href={link} target="_blank">
      <img className="icon-button-image" src={image} alt={alt} height={40}></img>
    </a>
  )
}