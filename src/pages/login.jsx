import SLACK from "../img/icons8-slack-255.png"
const GithubUrl = 'https://lucid-growth-53sd.onrender.com/auth/slack'

export const Login = () => {

    const slack = () => {
        window.open(GithubUrl, "_self");
    }

    return (
        <div >
            <h1 className="login-header">Logging with Slack</h1>
            <div >
                <div >
                    <div className="loginButton slack" onClick={slack}>
                        <img src={SLACK} alt="" className="slackIcon" />
                        Slack
                    </div>
                </div>
            </div>
        </div>
    )
}

