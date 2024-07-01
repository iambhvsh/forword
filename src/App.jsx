import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heart, search, statsChart } from 'ionicons/icons';
import { useEffect } from 'react';
import { fetchPopularWords, setupIonicReact } from './utils'; // Import setupIonicReact from utils

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  useEffect(() => {
    fetchPopularWords();
  }, []);

  // Call setupIonicReact to set mode to 'ios'
  useEffect(() => {
    setupIonicReact({
      mode: 'ios',
    });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard">
              <Tab1 />
            </Route>
            <Route exact path="/search">
              <Tab2 />
            </Route>
            <Route path="/favourites">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={statsChart} />
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
            </IonTabButton>
            <IonTabButton tab="favourites" href="/favourites">
              <IonIcon icon={heart} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
