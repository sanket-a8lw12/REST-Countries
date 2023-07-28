import { useContext } from "react"
import {ThemeContext} from './../App';



export const Header = ({ toggleStyle}) => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  // console.log("=========")
  // console.log(darkTheme &&  'header darkMode' || 'header')
  return (
    <>
      <div className= {darkTheme &&  'header darkMode' || 'header' }>
        <h1>Where in the world?</h1>
        <button className='btn btn-warning' onClick={toggleStyle}>Dark Mode</button>
      </div>
    </>
  )
}
