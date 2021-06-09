import {
  Link
} from "react-router-dom";

import logo from '../../../assets/images/logo.png'

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  const {currentUser, signOut} = useAuth();

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
      <li>
          <Link to={Routes.LANDING}><img className={styles.img} src={logo} alt="..."></img></Link>
        </li>
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
          ? <Link to={Routes.ACCOUNT}>Account</Link> : ''
        }
        </li>
        <li>
        {!!currentUser
          ? <button className={styles.button} onClick={signOut}>Sign out</button> : ''
        }
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;