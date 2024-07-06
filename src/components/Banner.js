import "../assets/styles/banner.scss"
import Screen from "../assets/images/Screen.png"


function Banner({title}) {
    console.log(title)
return (
    <div className='banner'>
        {title && <h1>{title}</h1>} 
         <img src={Screen} alt='ntm' className='BannerImg'/>
    </div>
)
}

export default Banner