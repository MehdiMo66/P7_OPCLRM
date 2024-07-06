import "../assets/styles/banner.scss"
import Header from '../components/Header'
import  "../assets/styles/home.scss"
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";


const About = () => {

    return (
      <div>
      <div className='all'>
<Header/>
<Banner/>

<div>
<Collapse title='Fiabilité'><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement verifiées par nos équipes.</p></Collapse>
<Collapse title='Respect'><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p></Collapse>
<Collapse title='Service'><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p></Collapse>
<Collapse title='Securité'><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes ques pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p></Collapse>
</div>

 </div>
 <Footer/>
</div>
    ); 
  }
  export default About