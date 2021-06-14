import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

import * as Routes from './routes';

import styles from './App.module.scss';
import { HomePage, DetailPage, MoviesPage, SignInPage, ShowsPage, ShowDetailPage, Account, SignUpPage } from './pages';

function App() {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'WikiMedia'}>
              <Switch>
                  <Route exact path={Routes.LANDING} component={ HomePage }/>
                  <Route from={Routes.HOME} to={Routes.HOME}/>
                  <Route exact path={Routes.MOVIES} component={ MoviesPage }/>
                  <Route exact path={Routes.MOVIE_DETAILS} component={ DetailPage  }/>
                  <Route exact path={Routes.SHOWS} component={ ShowsPage }/>
                  <Route exact path={Routes.SHOW_DETAILS} component={ ShowDetailPage  }/>
                  <Route exact path={Routes.AUTH_SIGN_IN} component={ SignInPage }/>
                  <Route exact path={Routes.AUTH_SIGN_UP} component={ SignUpPage  }/>

                  <Route exact path={Routes.ACCOUNT} component={ Account  }/>

              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
