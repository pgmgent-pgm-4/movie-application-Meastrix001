import { useState } from 'react';
import { HomePage } from '../pages';
import { Redirect} from "react-router-dom";
import styles from './NotFoundPage.module.scss';
const NotFoundPage = () => {
  const [redirect, setRedirect] = useState(false)

  const handleClick = () => {
      setRedirect(true)
  }

  return (
    <main className={`${styles.fullContainer} ${styles.wrapper}`}>
    <div className={styles.disorted} data-text="404">404</div> 
      <h1>Hey there, seems like you got lost. I'll get you back on your path!</h1>
      <div className={styles.returnButton}>
      <button onClick={handleClick}>Go to home page</button>
      </div>
      { redirect === false ? '' : <Redirect to={HomePage} />}
    </main>
  );
};

export default NotFoundPage;