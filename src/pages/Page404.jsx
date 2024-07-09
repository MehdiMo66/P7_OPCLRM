import { Link } from "react-router-dom";
import '../assets/styles/page404.scss'



function Error() {
  return (
      
        <div className="content">
         <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/'>Retourner sur la page d'acceuil</Link>
        </div>
      
          
      
  )
}

export default Error