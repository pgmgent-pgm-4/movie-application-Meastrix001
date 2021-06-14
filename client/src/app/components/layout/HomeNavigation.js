import {
  Link
} from "react-router-dom";

import logo from '../../../assets/images/logo.png'

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

import styles from './MainNavigation.module.scss';
const HomeNavigation = () => {
  const {currentUser, signOut} = useAuth();

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
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

        </li>
        <li>
        <a href="#topratedshows">Upcoming movies</a>
        </li>
        <li>
        <a href="#popularshows">Popular movies</a>
        </li>
        <li>
        <a href="#airingshows">Shows on air</a>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNavigation;