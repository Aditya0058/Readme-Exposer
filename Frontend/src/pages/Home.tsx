import './Home.css'
import blueGopher from "./Assets/HomePageSVG/bluegopher.svg"
import cyanGopher from "./Assets/HomePageSVG/cyangopher.svg"
import greenGopher from "./Assets/HomePageSVG/greengopher.svg"
import redGopher from "./Assets/HomePageSVG/redgopher.svg"
import violetGopher from "./Assets/HomePageSVG/violetgopher.svg"
import bannerGuys from "./Assets/HomePageSVG/bannerguys.svg"
import labelCloud from "./Assets/HomePageSVG/labelCloud.svg"

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
                <img className='label-cloud' src={labelCloud} />
                <input type="text" className='repo_url' />
                <p className='input-banner-label1'>Paste Github Repo Link</p>
                <p className='input-banner-label2'>below on banner</p>
            </div>
            <div className="footer">
                <p>Nothing here look up!</p>
            </div>
        </div>
        </>
    )
}

export default Home