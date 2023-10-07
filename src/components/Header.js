import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink className={({ isActive }) => "navigation-link" + (isActive ? "-active" : "")} to="/games">All games</NavLink>
                <div id="user">
                    <NavLink className={({ isActive }) => "navigation-link" + (isActive ? "-active" : "")} to="/create-game">Create Game</NavLink>
                    <NavLink className={({ isActive }) => "navigation-link" + (isActive ? "-active" : "")} to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink className={({ isActive }) => "navigation-link" + (isActive ? "-active" : "")} to="/login">Login</NavLink>
                    <NavLink className={({ isActive }) => "navigation-link" + (isActive ? "-active" : "")} to="/register">Register</NavLink>
                </div>
            </nav>  
        </header>
    );
};

export default Header;