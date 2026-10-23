import './Header.css'
function Header(){
    return(
        <>
            <h3 className='pre-container'>Made by </h3>
            <div className="icon-container">
            <svg 
            className="Aditya-Rajput-Profile"
            version="1.1" 
            xmlns="http://w3.org" 
            viewBox="0 0 222.23361673640414 65.29698270166591" 
            width="222.23361673640414" 
            height="65.29698270166591"
            >
            <defs>
                <style className="style-fonts">
                {`
                    @font-face { 
                    font-family: Excalifont; 
                    src: url(data:font/woff2;base64,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); 
                    }
                `}
                </style>
            </defs>
            <rect x="0" y="0" width="222.23361673640414" height="65.29698270166591" fill="#ffffff" />
            <g strokeOpacity={0.6} fillOpacity={0.6} transform="translate(10, 10) rotate(0 96.06840515136719 17.5)">
                <text 
                x="0" 
                y="24.668" 
                fontFamily="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" 
                fontSize="28px" 
                fill="#1e1e1e" 
                textAnchor="start" 
                style={{ whiteSpace: 'pre' }} 
                direction="ltr" 
                dominantBaseline="alphabetic"
                >
                Aditya Rajput
                </text>
            </g>
            <g strokeLinecap="round">
                <g strokeOpacity={0.6} fillOpacity={0.6} transform="translate(27.24091347055662, 54.172495763546976) rotate(0 92.64720627897043 -1.7651798746064742)">
                <path d="M1.15 1.12 C31.55 0.46, 152.17 -3.92, 182.64 -4.65 M0.3 0.67 C31.06 0.23, 154.45 -2.43, 184.99 -3.4" stroke="#1e1e1e" strokeWidth={2} fill="none" />
                </g>
                <g strokeOpacity={0.6} fillOpacity={0.6} transform="translate(27.24091347055662, 54.172495763546976) rotate(0 92.64720627897043 -1.7651798746064742)">
                <path d="M161.73 5.75 C171.17 1.42, 175.9 0.71, 184.99 -3.4 M161.73 5.75 C170.04 2.28, 179.01 -0.16, 184.99 -3.4" stroke="#1e1e1e" strokeWidth={2} fill="none" />
                </g>
                <g strokeOpacity={0.6} fillOpacity={0.6} transform="translate(27.24091347055662, 54.172495763546976) rotate(0 92.64720627897043 -1.7651798746064742)">
                <path d="M161.29 -11.35 C170.77 -10.16, 175.65 -5.35, 184.99 -3.4 M161.29 -11.35 C169.75 -8.51, 178.89 -4.65, 184.99 -3.4" stroke="#1e1e1e" strokeWidth={2} fill="none" />
                </g>
            </g>
            </svg>

            </div>
        </>
    )
}
export default Header
