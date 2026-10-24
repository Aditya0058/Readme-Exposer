import { useLocation } from 'react-router-dom';

function Result(github_url: string) {
    const location = useLocation();
    const github_urlhere = location.state?.github_url;
    return (
        <>
        <p>this is result page {github_urlhere}</p>
        </>
    )
}

export default Result