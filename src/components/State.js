import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/Bien.scss'
import { useState } from 'react'


function State({title , children}) {

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

export default State

