import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css'
import AI from "./Assets/ResultPageSVG/AI.svg"
import Human from "./Assets/ResultPageSVG/Human.svg"
import cons_30 from "./Assets/ResultPageSVG/cons_30.svg"
import cons_40 from "./Assets/ResultPageSVG/cons_40.svg"
import cons_50 from "./Assets/ResultPageSVG/cons_50.svg"
import cons__50 from "./Assets/ResultPageSVG/cons__50.svg"
import pro_70 from "./Assets/ResultPageSVG/pro_70.svg"
import pro__70 from "./Assets/ResultPageSVG/pro__70.svg"
import pro_30 from "./Assets/ResultPageSVG/pro_30.svg"
import pro_40 from "./Assets/ResultPageSVG/pro_40.svg"
import pro_50 from "./Assets/ResultPageSVG/pro_50.svg"


const DEPLOYMENT_URL = "https://readmebackend.vercel.app";
type ResultData = {
    Authorship: string;
    "Project Specific": number;
    Consistency: number;
};

function Result() {
    const location = useLocation();
    const github_urlhere = location.state?.github_url;

    const [result, setResult] = useState<ResultData | null>(null);
    const consPercent = Number(result?.Consistency)*100;
    const projectSpecific = Number(result?.['Project Specific'])*100;
   

    async function sendUrl() {
        const response = await fetch(`${DEPLOYMENT_URL}/getresult`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: github_urlhere
            })
        });
        
        const data = await response.json();

        setResult(data.result);
    }

    useEffect(() => {
        sendUrl();
    }, []);

    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    function getainotaiCharacter(result: string){
       
        if(result === 'human'){
            return Human
        } else if(result === 'ai_generated'){
            return AI
        }
    }
    
    function getConsistencyCharacter(score: number){
        if(score < 50 && score >=40){
            return cons_50
        } else if (score < 40 && score >= 30) {
            return cons_40
        }else if (score < 30) {
            return cons_30
        } else {
            return cons__50
        }

    };

    function getProjectSpecificCharacter(score: number){
        if(score < 70 && score >= 50){
            return pro_70
        }else if(score < 50 && score >= 40){
            return pro_50
        } else if(score < 40 && score >= 30){
            return pro_40
        } else if(score < 30){
            return pro_30
        } else {
            return pro__70
        }
    };
    function getainotaiText(result: string) {
        if(result === 'human'){
            return "Human Written"
        } else if(result === 'ai_generated'){
            return "AI Generated"
        }
    };
    const cons_progressbar = useRef(null);
    const specific_progressbar = useRef(null);
   
    
    return (
        <>
            {/* <p>This is result page: {github_urlhere}</p> */}

            {result && (
                <>
                    <div className="results-content">
                        <div className="header">
                            <h1 className='result-heading' >Results</h1>
                            <button className='goback' onClick={goHome}>Go back</button>
                        </div>
                        <div className="ainotai-result-charater">
                            <img className='ai-not-ai-character' src={getainotaiCharacter(result.Authorship)} />
                            
                        </div>
                        <div className="ai-or-not-ai-result">
                            <h1 className='aiornotai'>{getainotaiText(result.Authorship)}</h1>
                        </div>
                        <div className='other-result-characters'>
                            <img src={getConsistencyCharacter(result.Consistency)} alt='ok1' />
                            <img src={getProjectSpecificCharacter(result['Project Specific'])} alt='ok2'/>
                        </div>
                        <div className="other-result-percentage">
                            <h2>{consPercent}%</h2>
                            <h2>{projectSpecific}%</h2>
                        </div>
                        <div className="other-results-baseline">
                            <h1 className='consistency'>Consistency</h1>
                            <h1 className='project-specific'>Project Specific</h1>
                        </div>
                        <div className="other-result-progressbar">
                            <div className="consistency-progressbar-container">
                                <div className="cons-progressbar" style={{ width: `${consPercent}%` }} ref={cons_progressbar}>{consPercent}%</div>    
                            </div>
                            <div className="specificproject-progressbar-container">
                                <div className="specfic-progressbar" style={{ width: `${projectSpecific}%` }} ref={specific_progressbar}>{projectSpecific}%</div>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>
    );
}

export default Result;
