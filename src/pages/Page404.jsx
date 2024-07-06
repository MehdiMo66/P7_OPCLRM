import Footer from "../components/Footer"
import Header from "../components/Header"
import '../assets/styles/Page404.scss'
import { Link } from "react-router-dom";
function Error() {
  return (
      <div>
        <Header/>
        <div className="content">
         <p>404</p>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/'>Retourner sur la page d'acceuil</Link>
        </div>
         <Footer/>
          
      </div>
  )
}

export default Error