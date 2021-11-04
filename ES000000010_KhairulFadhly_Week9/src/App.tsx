import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, happy, informationCircle, map, personCircle, sad } from 'ionicons/icons';

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
import { GoodMemories } from './pages/GoodMemories';
import { BadMemories } from './pages/BadMemories';
import { NewMemory } from './pages/NewMemory';
import MemoriesContextProvider from './pages/data/MemoriesContextProvider';
import { useContext, useEffect } from 'react';
import MemoriesContext from './pages/data/memories-context';
import {
  LoadScript
} from "@react-google-maps/api";

const App: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);
  const { initContext } = memoriesCtx;
  useEffect(() => {
    initContext();
  }, [initContext]);
  return (
    <IonApp>
      <IonReactRouter>
        {/* <MemoriesContextProvider> */}
        <LoadScript googleMapsApiKey="AIzaSyAOVyhwzZXKlatPbGZtXT1_6XKbP9W8TN8">
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/good" component={GoodMemories} />
            <Route exact path="/bad" component={BadMemories} />
            <Route exact path="/new" component={NewMemory} />
            <Redirect exact path="/" to="/good" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">

            <IonTabButton tab="good" href="/good">
              <IonIcon icon={happy} />
              <IonLabel>Good Memories</IonLabel>
            </IonTabButton>

            <IonTabButton tab="bad" href="/bad">
              <IonIcon icon={sad} />
              <IonLabel>Bad Memories</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        </LoadScript>
        {/* </MemoriesContextProvider> */}
      </IonReactRouter>
    </IonApp>
  )
};

export default App;