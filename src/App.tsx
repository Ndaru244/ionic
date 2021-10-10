import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heartCircle, list, listSharp, personCircle, settingsSharp, warningSharp } from 'ionicons/icons';

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
import Daftar from './pages/Daftar';
import { Profil } from './pages/profil';
import { Target } from './pages/Target';

import TargetContextProvider from './pages/data/TargetContextProvider';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>

              <IonItem routerLink="/daftar">
                <IonIcon slot="start" icon={list} />
                <IonLabel>Explore</IonLabel>
              </IonItem>
              
              <IonItem routerLink="/target">
                <IonIcon slot="start" icon={heartCircle} />
                <IonLabel>Target</IonLabel>
              </IonItem>

              <IonItem routerLink="/profil">
                <IonIcon slot="start" icon={personCircle} />
                <IonLabel>Profil</IonLabel>
              </IonItem>
              
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <TargetContextProvider>
      <IonRouterOutlet id="main">
        <Route path="/daftar" component={Daftar} />
        <Route exact path="/target" component={Target} />
        <Route exact path="/profil" component={Profil} />
        <Redirect exact from="/" to="/daftar" />
      </IonRouterOutlet>
      </TargetContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;