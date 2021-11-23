import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabsPengguna from './pages/Tabs/TabsPengguna';
import Daftar from './pages/Pengguna/Daftar';
import Preview from './pages/Pengguna/Preview';
import Keranjang from './pages/Pengguna/Keranjang';
import PesananContextProvider from './components/PesananContextProvider';
import PesananContext from './components/pesananContext';

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
import { useContext, useEffect } from 'react';

const App: React.FC = () => {
  const memoriesCtx = useContext(PesananContext);

  const { initContext } = memoriesCtx;
  useEffect(() => {
    initContext();
  }, [initContext]);
  return (
    <IonApp>
      <IonReactRouter>
        {/* <PesananContextProvider> */}
        <IonRouterOutlet>
          <Route exact path="/tabs" component={TabsPengguna} />
          <Route exact path="/feedback" component={TabsPengguna}></Route>
          <Route exact path="/pilihjenismakanan" component={TabsPengguna} />
          <Route exact path="/semuaulasan" component={TabsPengguna} />
          <Route exact path="/keranjang" component={Keranjang}></Route>
          <Route exact path="/daftar/:jenis" component={Daftar}></Route>
          <Route exact path="/preview/:id/:jenis/:nama/:harga/:deskripsi/:foto/:url" component={Preview}></Route>
          <Redirect exact path="/home" to="/tabs"></Redirect>
          <Redirect exact path="/" to="/tabs"></Redirect>
        </IonRouterOutlet>
        {/* </PesananContextProvider> */}
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
