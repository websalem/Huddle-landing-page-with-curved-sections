import logo from '../assets/images/logo.svg';
import { Link } from "react-router-dom";
const Header = () => {
   
  return (
    <header>
        <div className="container">
        <div className="logo"><Link to="/"><img src={logo} alt="Logo" /></Link></div>
    <button className='btn'>Try it free</button>

        </div>
    </header>
  )
}
export default Header