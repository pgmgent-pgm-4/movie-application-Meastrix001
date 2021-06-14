import { Link } from "react-router-dom";
import React,{ useState } from 'react';
import logo from '../../../assets/images/logo.png'
import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  const {currentUser, signOut} = useAuth();
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.wrapper} ${open === true ? styles.open : ""} ${window.location.pathname === "/WikiMedia" || window.location.pathname === "/WikiMedia/" ? styles.flex : ""}`}>
      <ul className={`${styles.list} ${open === true ? styles.open : ""}`}>
        <li>
          <Link to={Routes.LANDING}><img className={styles.img} src={logo} alt="..."></img></Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link to={Routes.MOVIES}>Movies</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link to={Routes.SHOWS}>Shows</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          {!!currentUser
          ? <div className={styles.user_details}>
            <img className={styles.user_avatar} src={currentUser.photoURL} alt={currentUser.email}/>
            <p className={styles.user_name} >{currentUser.displayName}</p>
            </div>
          : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
          }    
        </li>
        <li onClick={() => setOpen(false)}>
        {!!currentUser
          ? <Link to={Routes.ACCOUNT}>Account</Link> : ''
        }
        </li>
        <li onClick={() => setOpen(false)}>
        {!!currentUser
          ? <button className={styles.button} onClick={signOut}>Sign out</button> : ''
        }
        </li>
      </ul>
        { window.location.pathname === "/WikiMedia" || window.location.pathname === "/WikiMedia/" ?
      <ul className={`${styles.list} ${open === true ? styles.open : ""}`}>
        <li>
            <a  onClick={() => setOpen(false)}href="#topratedmovies">toprated movies</a>
          </li>
        <li>
                    <a  onClick={() => setOpen(false)}href="#popularmovies">Popular movies</a>
                  </li>
        <li>
                    <a  onClick={() => setOpen(false)}href="#upcomingrmovies">Upcoming movies</a>
                  </li>
        <li>
                  <a  onClick={() => setOpen(false)}href="#topratedshows">toprated shows</a>
                  </li>
        <li>
                  <a  onClick={() => setOpen(false)}href="#popularshows">Popular shows</a>
                  </li>
        <li>
                  <a  onClick={() => setOpen(false)}href="#airingshows">Shows on air</a>
                  </li>
      </ul> : ""
        } 
      
        <div className={`${styles.hamburger} ${open ? styles.open : ""}`} onClick={() => setOpen(!open)} >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${styles.hamburgerClose} ${styles.hamburger} ${!open ? styles.open : ""}`} onClick={() => setOpen(!open)} >
          <div></div>
          <div></div>
        </div>

    </nav>

  );
};

export default MainNavigation;