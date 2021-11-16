import { Link } from "react-router-dom";
import * as Routes from '../../routes';
import styles from './Footer.module.scss';
import logo from '../../../assets/images/logo.png'
import { useAuth } from '../../contexts/firebase/auth.context';


const Footer = () => {
  const {currentUser, signOut} = useAuth();
  return (
    <footer className={styles.footer}>
        <li>
          <Link to={Routes.LANDING}><img className={styles.img} src={logo} alt="..."></img></Link>
        </li>
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.MOVIES}>Movies</Link>
        </li>
        <li>
          <Link to={Routes.SHOWS}>Shows</Link>
        </li>
        <li>
          {!!currentUser
          ? <div className={styles.user_details}>
            <img className={styles.user_avatar} src={currentUser.photoURL} alt={currentUser.email}/>
            <p className={styles.user_name} >{currentUser.displayName}</p>
            </div>
          : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
          }    
        </li>
        <li>
        {!!currentUser
          ? <button className={styles.button} onClick={signOut}>Sign out</button> : ''
        }
        </li>
      </ul>
      { window.location.pathname === "/WikiMedia" || window.location.pathname === "/WikiMedia/" ?
      <ul className={`${styles.list}`}>
        <li>
            <a href="#topratedmovies">toprated movies</a>
          </li>
        <li>
                    <a href="#popularmovies">Popular movies</a>
                  </li>
        <li>
                    <a href="#upcomingrmovies">Upcoming movies</a>
                  </li>
        <li>
                  <a href="#topratedshows">toprated shows</a>
                  </li>
        <li>
                  <a href="#popularshows">Popular shows</a>
                  </li>
        <li>
                  <a href="#airingshows">Shows on air</a>
                  </li>
      </ul> : ""
        } 
    </footer>
  );
};

export default Footer;