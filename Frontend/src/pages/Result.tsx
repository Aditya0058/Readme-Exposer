import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

    return (
        <>
            <p>This is result page: {github_urlhere}</p>

            {result && (
                <>
                    <p>Authorship: {result.Authorship}</p>

                    <p>Project Specific: {result["Project Specific"]}</p>

                    <p>Consistency: {result.Consistency}</p>
                </>
            )}
        </>
    );
}

export default Result;
