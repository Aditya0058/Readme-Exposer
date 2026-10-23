import './Home.css'
import blueGopher from "./Assets/HomePageSVG/bluegopher.svg"
import cyanGopher from "./Assets/HomePageSVG/cyangopher.svg"
import greenGopher from "./Assets/HomePageSVG/greengopher.svg"
import redGopher from "./Assets/HomePageSVG/redgopher.svg"
import violetGopher from "./Assets/HomePageSVG/violetgopher.svg"
import bannerGuys from "./Assets/HomePageSVG/bannerguys.svg"

function Home() {
    return(
        <>
        <div className="home-content">
            <div className="gophers-layer">
                <img className='green gopher' src={greenGopher}/>
                <img className='violet gopher' src={violetGopher}/>
                <img className='blue gopher' src={blueGopher}/>
                <img className='cyan gopher' src={cyanGopher}/>
                <img className='red gopher' src={redGopher}/>
            </div>
            <div className="input-field">
                <img className="banner-guys input-banner" src={bannerGuys} />
            </div>
        </div>
        </>
    )
}

export default Home