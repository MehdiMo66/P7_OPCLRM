import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/logement.scss'
import { useState } from 'react'


function Collapse({title , children}) {

    const [isOpen, setIsOpen] = useState(false)

    return  (
        <div className='box'>

            <div className='box-title' onClick={()=>setIsOpen(!isOpen)}>
                <span>{title}</span>
                <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleUp} />
            </div>
            
            {isOpen && <div className='box-content'>{children}</div>}

        </div>
    ) 
}

export default Collapse

