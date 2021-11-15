import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import { happy, sad } from 'ionicons/icons';
import BadMemories from './pages/BadMemories';
import GoodMemories from './pages/GoodMemories';
import NewMemory from './pages/NewMemory';
import { useContext, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <GoodMemoryContextProvider> */}
        <LoadScript googleMapsApiKey="AIzaSyAOVyhwzZXKlatPbGZtXT1_6XKbP9W8TN8">
        <IonTabs>
          <IonRouterOutlet>
          <Route exact path="/good" component={GoodMemories} />
            <Route exact path="/bad" component={BadMemories} />
            <Route exact path="/new" component={NewMemory} />
            <Redirect exact path="/" to="/good" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="happy" href="/good">
              <IonIcon icon={happy}></IonIcon>
              <IonLabel>Good Memories</IonLabel>
            </IonTabButton>
            <IonTabButton tab="bad" href="/bad">
              <IonIcon icon={sad}></IonIcon>
              <IonLabel>Bad Memories</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        </LoadScript>
        {/* </GoodMemoryContextProvider> */}
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
