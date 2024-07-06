import "../assets/styles/Banner.scss"
import Screen from "../assets/images/Screen.png"


function Banner(title=false) {
    console.log(title)
return (
    <div className='banner'>
        {title && <h1>Chez vous, partout et ailleurs</h1>} 
         <img src={Screen} alt='ntm' className='BannerImg'/>
    </div>
)
}

export default Banner