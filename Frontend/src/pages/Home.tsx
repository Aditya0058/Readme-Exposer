import './Home.css'
import blueGopher from "./Assets/HomePageSVG/bluegopher.svg"
import cyanGopher from "./Assets/HomePageSVG/cyangopher.svg"
import greenGopher from "./Assets/HomePageSVG/greengopher.svg"
import redGopher from "./Assets/HomePageSVG/redgopher.svg"
import violetGopher from "./Assets/HomePageSVG/violetgopher.svg"
import bannerGuys from "./Assets/HomePageSVG/bannerguys.svg"
import labelCloud from "./Assets/HomePageSVG/labelCloud.svg"
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    
    const giturltextarea = useRef(null);
    const [github_url, setgiturl] = useState("");
    const navigate = useNavigate();
    const handleGobtnClick = () => {
        if (!github_url.trim()) return;
        navigate('/result', { state: { github_url: github_url } });
    }


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
            <div className="message">
                <p>Expose README.md</p>
            </div>
            <div className="input-field">
                <button
                    onClick={handleGobtnClick}
                >
                <img className="banner-guys input-banner" src={bannerGuys}/>
                </button>

                <img className='label-cloud' src={labelCloud} />
                <input onChange={(e) => setgiturl(e.target.value)} ref={giturltextarea} type="text" className='input_repo_url' placeholder='eg., https://github.com/Aditya0058/Candela-AI' />
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