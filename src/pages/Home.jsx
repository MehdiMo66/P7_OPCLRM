import { data } from "../datas/data";
import { Link } from "react-router-dom";
import Banner from '../components/Banner'
import "../assets/styles/banner.scss"
import  "../assets/styles/home.scss"


function Home() {
    return (
      <div>
      <div className='all'>

<Banner title='Chez vous, partout et ailleurs'/>
 <div className='Miniatures'>
				{data.map(({id ,title, cover }) =>
		(
      <Link key={id} to={`/logement/${id}`}>
						<div>
							<img src={cover} alt='cover' className='MiniCard'/>
						  <h3>{title}</h3>
						</div>
      </Link>
    )
				)}
			</div>
 
 </div>

</div>
    ); 
  }
  export default Home