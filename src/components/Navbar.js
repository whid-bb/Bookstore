import { Link } from 'react-router-dom';
import style from './navbar.module.scss';

function Navbar() {
  return (
    <nav id={style.mainNav}>
      <div className={style.logo}>
        <Link to="/">Bookstore</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
