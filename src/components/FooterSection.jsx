
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
const FooterSection = ({title, logo, text, phone, newsletter}) => {
  return (
    <div className="footer-section">
        {title && <h2>{title}</h2> }
             {logo &&  <div className="footer-logo">
                <img src={logo} alt="white huddle Logo" />
              </div>}
              {text && <div className="footer-text">
              <p>{text}</p>
              </div>}
             {phone &&  <div className="contacts">
                <p><BsTelephoneInboundFill />  {phone} </p>
                <p><MdMail /> Mail: example@huddle.com</p>
              </div>}
              {newsletter &&  <div className="newsletter">
               {newsletter}
              </div>}
            </div>
  )
}
export default FooterSection