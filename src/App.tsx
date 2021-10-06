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
import { SplashScreen } from '@capacitor/splash-screen';
import { Profil } from './pages/Profil';
import { Target } from './pages/Target';

// Hide the splash (you should do this on app launch)
SplashScreen.hide();

// Show the splash for an indefinite amount of time:
SplashScreen.show({
  autoHide: false
});

// Show the splash for two seconds and then automatically hide it:
SplashScreen.show({
  showDuration: 2000,
  autoHide: true
});

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
      <IonRouterOutlet id="main">
        <Route path="/daftar" component={Daftar} />
        <Route exact path="/target" component={Target} />
        <Route exact path="/profil" component={Profil} />
        <Redirect exact from="/" to="/daftar" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;