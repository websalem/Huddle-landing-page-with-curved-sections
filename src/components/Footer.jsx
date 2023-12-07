import logoWeiss from '../assets/images/logo-weiss.svg';
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-1">
              <div className="footer-logo">
                <img src={logoWeiss} alt="white huddle Logo" />
              </div>
              <div className="footer-1-text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur laborum consequuntur in, nihil maxime atque quisquam, impedit officiis voluptas excepturi necessitatibus molestiae dolor, dolore quod? Libero illo laudantium ex eum?</p>
              </div>
              <div className="contacts">
                <p><BsTelephoneInboundFill /> Phone: +1543-123-4567 </p>
                <p><MdMail /> Mail: example@huddle.com</p>
              </div>
            </div>
            <div className="footer-2">
              <div className="footer-2-text">
              <h2>NEWSLETTER</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus illum, mollitia veritatis libero at ullam assumenda facere sed praesentium animi laudantium sequi aspernatur reiciendis, eaque nisi perspiciatis sunt necessitatibus.</p>
              </div>
              <div className="newsletter">
                <form>
                  <input type="email" name='email' id='email' />
                  <button type='submit'>Subscribe</button>
                </form>
              </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer