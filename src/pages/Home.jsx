import "../assets/styles/Banner.scss"
import Header from '../components/Header'
import { data } from "../datas/data";
import { Link } from "react-router-dom";
import  "../assets/styles/home.scss"
import Banner from '../components/Banner'
import Footer from "../components/Footer";


const Home = () => {
    return (
      <div>
      <div className='all'>
<Header/>
<Banner/>
 <div className='Miniatures'>
				{data.map(({id ,title, cover }) =>
		(
      <Link key={id} to={`/card/${title}`}>
						<div>
							<img src={cover} alt='cover' className='MiniCard'/>
						  <h3>{title}</h3>
						</div>
      </Link>
    )
				)}
			</div>
 
 </div>
 <Footer/>
</div>
    ); 
  }
  export default Home