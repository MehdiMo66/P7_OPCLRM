import { Navigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { data } from '../datas/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import '../assets/styles/logement.scss'
import '../assets/styles/home.scss'


function Title() {
  const { id } = useParams()
  const bien = data.find((item) => item.id === id)
  if (!bien) {
    return <Navigate to='/Page404' />
  }


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

    <div className="all">
      <Carousel photo={bien.pictures} />

      <div className="info-proprio">
        <div className="title-tag">
          <h1>{bien.title} </h1>
          <div>
            <span>{bien.location}</span>
          </div>
          <div className='tags'>
            {showTag(bien.tags)}
          </div>
        </div>

        <div className='rating'>
          <div className='ProprioTitle'>
            <span>{bien.host.name}</span>
            <img src={bien.host.picture} alt='proprietaire' className='propImg' />
          </div>
          <div className="card-rating">
            {starRating(bien.rating)}
          </div>
        </div>
      </div>

      <div className="box-info">

        <Collapse title='Description'>
          <p>{bien.description}</p>
        </Collapse>

        <Collapse title='Equipements'>
          <ul>
            {bien.equipments.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>

  )
}


export default Title