import { Link } from 'react-router-dom';
import style from './navbar.module.scss';

function Navbar() {
  return (
    <nav id={style.mainNav}>
      <div className={style.content}>

        <div className={style.logo}>
          <Link to="/">Bookstore</Link>
        </div>
        <ul>
          <li>
            <Link className={style.active} to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
