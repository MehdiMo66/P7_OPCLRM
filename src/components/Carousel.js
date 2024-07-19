import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../assets/styles/logement.scss";

function Carousel(slide) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photo = slide.photo;
 
  const slideShow = (direction) => {
    setCurrentIndex(
      (direction ? currentIndex + 1 : currentIndex - 1 + photo.length) %
        photo.length
    );
  };

  return (
    <div className="carousel">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="arrow_left"
        onClick={() => slideShow(false)}
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        className="arrow_right"
        onClick={() => slideShow(true)}
      />
      <img src={photo[currentIndex]} alt="img" />
      <span>
        {[currentIndex + 1]}/{photo.length}
      </span>
    </div>
  );
}

export default Carousel;
