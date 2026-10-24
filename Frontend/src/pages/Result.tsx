import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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



type ResultData = {
    Authorship: string;
    "Project Specific": number;
    Consistency: number;
};

function Result() {
    const location = useLocation();
    const github_urlhere = location.state?.github_url;

    const [result, setResult] = useState<ResultData | null>(null);

    async function sendUrl() {
        const response = await fetch("http://localhost:5000/getresult", {
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

    function getConsistencyCharacter(score: number){
        if(score < 50){
            return cons_50
        } else if (score < 40) {
            return cons_40
        }else if (score < 30 ) {
            return cons_40
        } else {

        }

    }


    return (
        <>
            {/* <p>This is result page: {github_urlhere}</p> */}

            {result && (
                <>
                    <div className="results-content">
                        <div className="header">
                            <h1 className='result-heading' >Results</h1>
                        </div>
                        <div className="ai-or-not-ai-result">
                            <h1 className='aiornotai'>AI</h1>
                        </div>
                        <div className='other-result-characters'>
                            <img src="#" alt='ok1' />
                            <img src="#" alt='ok2'/>
                        </div>
                        <div className="other-results-baseline">
                            <h1 className='consistency'>Consistency</h1>
                            <h1 className='project-specific'>Project Specific</h1>
                        </div>
                    </div>



                    {/* <p>Authorship: {result.Authorship}</p>

                    <p>Project Specific: {result["Project Specific"]}</p>

                    <p>Consistency: {result.Consistency}</p> */}
                </>
            )}
        </>
    );
}

export default Result;
