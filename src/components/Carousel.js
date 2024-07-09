import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../assets/styles/logement.scss'




function Carousel(photo) {
    const [currentIndex, setCurrentIndex] = useState(0)
    photo = photo.photo

   

    const slideShow = (direction)=>{
       /*let test = (currentIndex - 1 + photo.length)
        if(direction){ //droite
            test = (currentIndex + 1)
        }
        setCurrentIndex(test%photo.length)*/
       setCurrentIndex((direction ? (currentIndex + 1) : (currentIndex - 1 + photo.length))%photo.length)

    }

    return (
        <div className='carousel'>

            <FontAwesomeIcon icon={faAngleLeft} className="arrow_left" onClick={()=>slideShow(0)} />
            <FontAwesomeIcon icon={faAngleRight} className="arrow_right" onClick={()=>slideShow(1)}/>
            <img src={photo[currentIndex]} alt='img' />

        </div>
    )
}


export default Carousel