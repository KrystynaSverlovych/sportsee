import {useNavigate} from "react-router-dom";
import '../styles/home.scss';
/**
 * @function Home
 * @description Return the home page
 * @returns { HTMLElement }
 */
const Home = () => {
    const navigate = useNavigate();

    const SetUserToken = (user, id) => {
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", id);
        navigate(`/${user}/${id}`);
    };

    return (
        <div className="home">
            <div className="home__links">
                <div>
                    <button className="home__links--link" onClick={() => {SetUserToken("user", 12);}}>
                        API Utilisateur id 12
                    </button>
                </div>
                <div>
                    <button className="home__links--link" onClick={() => {SetUserToken("user", 18);}}>
                        API Utilisateur id 18
                    </button>
                </div>
                <div>
                    <button className="home__links--link" onClick={() => {SetUserToken("mock", 18);}}>
                        Utilisateur Mocké I
                    </button>
                </div>
                <div>
                    <button className="home__links--link" onClick={() => {SetUserToken("mock", 12);}}>
                        Utilisateur Mocké II
                    </button>
                </div>

            </div>
        </div>
    );
};
export default Home;