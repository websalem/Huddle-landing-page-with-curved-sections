import heroImg from '../assets/images/screen-mockups.svg';
import iconCommunities from '../assets/images/icon-communities.svg';
import iconMessages from '../assets/images/icon-messages.svg';
const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion!</p>
        <button className="btn">Get Started For Free</button>

        <div className="hero-img">
          <img src={heroImg} alt="screen mockups" />
        </div>
        <div className="hero-statistics">
          <div className="hero-statistics-one">
            <img src={iconCommunities} alt="icon communities" />
            <h2>1.4K+</h2>
            <p>communites ronmea</p>
          </div>
          <div className="hero-statistics-two">
          <img src={iconMessages} alt="icon messages" />
            <h2>2.7m+</h2>
            <p>Messages Sent</p>
          </div>
        </div>
        </div>
    </div>
  )
}
export default Hero