import FooterSection from "./FooterSection";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import logoWeiss from '../assets/images/logo-weiss.svg';
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regEx.test(email)) {
      setError(true);
    }
  }
  return (
    <footer>
        <div className="container">
            <FooterSection 
            logo={logoWeiss}
            text = {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur laborum consequuntur in, nihil maxime atque quisquam. '}
            phone={'Phone: +1543-123-4567'}
            />
           <FooterSection title={'NEWSLETTER'}
           text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur laborum consequuntur in, nihil maxime atque quisquam.'}
           newsletter={ <form>
            <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}  value={email}/>
            <button className="btn" type='submit' onClick={handleSubmit}>Subscribe</button>
            {error && <div className="error"><p>Check your email please</p></div>}
          </form>}
           />
            <div className="social-media">
          <FaFacebookSquare/>
          <FaInstagramSquare/>
          <FaSquareTwitter/>
            </div>
        </div>
    </footer>
  )
}
export default Footer