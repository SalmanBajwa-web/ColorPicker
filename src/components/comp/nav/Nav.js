import { NavLink } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
    return (
        <div className="nav">
        <NavLink activeClassName='navActive' to='/' exact>Profile</NavLink>
        <NavLink activeClassName='navActive' to='/diploma' exact>Diploma</NavLink>
        <NavLink activeClassName='navActive' to='/projects' exact>Projects</NavLink>
    </div>
    )
}

export default Nav
