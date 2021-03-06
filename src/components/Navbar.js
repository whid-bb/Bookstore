import { NavLink, Link } from 'react-router-dom';
import style from './navbar.module.scss';
import { ReactComponent as UserProfile } from '../imgs/userProfile.svg';

function Navbar() {
  return (
    <nav id={style.mainNav}>
      <div className={style.content}>

        <div className={style.logo}>
          <Link to="/">Bookstore</Link>
        </div>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? style.active : null)} to="/">Books</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? style.active : null)} to="/categories">Categories</NavLink>
          </li>
        </ul>
        <div className={style.profileContainer}>
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
