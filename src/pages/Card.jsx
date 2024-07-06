import { useParams } from "react-router-dom"
import { data } from '../datas/data'
import Header from '../components/Header'
import '../assets/styles/Bien.scss'
import '../assets/styles/home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from '../components/carousel'
import State from '../components/State'
import Footer from '../components/Footer'

function Title() {
  const { title } = useParams()
  const bien = data.find((item) => item.title === title)
  const host = bien.host


  const showTag = (tag) => {
    return tag.map((tag, index) => (
      <span key={index}>{tag}</span>
    ))
  }

  const starRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon icon={faStar} className={index < rating ? "RedStar" : null} key={index} />
    ))

  }

  return (
    <div>
      <Header />
      <div className="all">
        <Carousel photo={bien.pictures} />
        <div className="align">
          <div >
            <h1>{bien.title} </h1>
            <div>
              <span>{bien.location}</span>
            </div>

          </div>

          <div className='ProprioTitle'>
            <span>{host.name}</span>
            <img src={host.picture} alt='proprietaire' className='propImg' />
          </div>
        </div>

        <div className="ligne">
          <div className='tags'>
            {showTag(bien.tags)}
          </div>
          <div className="card-rating">
            {starRating(bien.rating)}
          </div>
        </div>

        <div className="box-info">

        <State title='description'>
          <p>{bien.description}</p>
        </State>

        <State title='Equipements'>
          <ul>
            {bien.equipments.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
        </State>
        </div>
      </div>

      

      <Footer />
    </div>
  )
}



export default Title