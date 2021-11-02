import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { Geolocation, Position } from '@capacitor/geolocation';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  const [lat, setLat] = useState<number>(-6.167010666406884);
  const [lng, setLng] = useState<number>(106.62536131758027);
  const logCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });

    console.log('current position: ', coordinates);
    console.log('lat: ', coordinates.coords.latitude);
    console.log('Lng: ', coordinates.coords.longitude);
    setLat(coordinates.coords.latitude);
    setLng(coordinates.coords.longitude);
  };

  const trackPosition = async () => {
    const data = await Geolocation.watchPosition({
      enableHighAccuracy: true,
      timeout: 1000
    }, (position, err) => {
      if (position) console.log(position);
      if (err) console.error(err);
    });
  };

  const containerStyle = {
    width: '100%',
    height: '100%'
  }

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Minggu 9</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonButton onClick={logCurrentPosition}>Current Position</IonButton>
          <IonButton onClick={trackPosition}>Track Position</IonButton>
          <LoadScript googleMapsApiKey="AIzaSyAOVyhwzZXKlatPbGZtXT1_6XKbP9W8TN8">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: lat, lng: lng }}
              zoom={18}>
            </GoogleMap>
            <Marker position={{ lat: lat, lng: lng }} />
            {/* <InfoWindow position={{ lat: -6.167010666406884, lng: 106.62536131758027 }}>
              <div>
                <h1>tempat aku coma.</h1>
              </div>
            </InfoWindow> */}
          </LoadScript>
        </IonContent>
      </IonPage>
  );
};

export default Home;
