import { useContext } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom'
import { BASE_URL, apiGet } from '../utils/apiService'
import { userContext } from '../context/userContextProvider';
import styles from './header.module.css'

function Header() {
    const { user, setUser } = useContext(userContext);
    const nav = useNavigate();

    const logOutSubmit = async () => {
        try {
            let url = BASE_URL + "/users/logout"
            let data = await apiGet(url)
            toast.success(data.msg)
            setUser(null);
            nav('/login');
        } catch (error) {
            toast.error(error)
        }
    }

    const getMsgByTime = () => {
        let currentHour = new Date().getHours()
        if (currentHour >= 18)
            return "good evning "
        if (currentHour >= 12)
            return "good afternoon "
        return "good morning "
    }


    return (
        <header className={`${styles.header} container-fluid text-dark`}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm rounded" aria-label="Twelfth navbar example">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="mt-1 collapse navbar-collapse" id="navbarsExample10">
                        <ul className="mt-2 navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bolder text-body-secondary" to="/">home</NavLink>
                            </li>
                            {user && <li className="d-none d-sm-block nav-item mt-2 ms-3">
                                <p className={`${styles.GreetingMessage} fw-bold`}>
                                    {getMsgByTime() + `${user.name}`}
                                </p>
                            </li>}
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            {user ?
                                <ul className="navbar-nav">
                                    <li className="nav-item me-4">
                                        <NavLink className="nav-link fw-bolder" to="/dashboard">dashboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`${styles.button} btn fw-bold text-body-secondary`} onClick={() => {
                                            logOutSubmit();
                                        }}>Logout</button>
                                    </li>
                                </ul>
                                :
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-bolder text-body-secondary" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-bolder text-body-secondary" to="/signup">sign - up</NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>



    );
}

export default Header;