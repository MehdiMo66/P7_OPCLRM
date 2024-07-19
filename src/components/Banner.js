import "../assets/styles/banner.scss"

function Banner({title, Screen}) {
return (
    <div className='banner'>
         <img src={Screen} alt='ld' className='BannerImg'/>
         {title && <h1>{title}</h1>}
    </div>
)
}

export default Banner