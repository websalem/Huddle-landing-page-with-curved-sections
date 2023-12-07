import '../assets/scss/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import img1 from '../assets/images/illustration-grow-together.svg';
import img2 from '../assets/images/illustration-flowing-conversation.svg';
import img3 from '../assets/images/illustration-your-users.svg';
const Home = () => {
  return (
   <>
    <Header/>
   <Hero/>
   <main>
    <PageSection title={'Grow Together'}
    text={'Generate meaningtul discussions with your audience and bud a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.'}
    img={img1}
    alt={'Grow Together'}
    />
    <PageSection title={'Flowing Conversations'}
    text={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."}
    img={img2}
    alt={'Grow Together'}
    />
    <PageSection title={'Your Users'}
    text={"It takes no tme at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately"}
    img={img3}
    alt={'Grow Together'}
    />
    <PageSection 
    title={'Ready to build your Community?'}
    btn = {'Get Started for Free'}
    />
   </main>
   <Footer/>
   </>
  )
}
export default Home