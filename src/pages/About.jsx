import "../assets/styles/Banner.scss"
import Header from '../components/Header'
import  "../assets/styles/home.scss"
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import State from "../components/State";


const About = () => {
    return (
      <div>
      <div className='all'>
<Header/>
<Banner/>

<div>
<State></State>
</div>

 </div>
 <Footer/>
</div>
    ); 
  }
  export default About