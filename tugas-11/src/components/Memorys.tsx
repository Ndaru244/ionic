import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon, IonCardContent, IonContent, IonItem, IonImg, IonText } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import './map-css-layout.css';
import firebaseConfig from '../api/apiConfig';

import { GoogleMap, Marker } from '@react-google-maps/api'
import { collection, getDocs, getFirestore } from "@firebase/firestore";

const MemoryItem: React.FC<{ selected: 'good' | 'bad' }> = props => {
    const [good, setGood] = useState<Array<any>>([]);
    const [bad, setBad] = useState<Array<any>>([]);

    const db = getFirestore(firebaseConfig);

    useEffect(() => {
        async function getData() {
            const getDataGood = await getDocs(collection(db, "good"))
            const getDataBad = await getDocs(collection(db, "bad"))

            setGood(getDataGood.docs.map((doc) => ({ ...doc.data(), idGood: doc.id })));
            setBad(getDataBad.docs.map((doc) => ({ ...doc.data(), idBad: doc.id })));
        }
        getData();
    }, []);

    const containerStyle = {
        width: '100%',
        height: '150px'
    }

    return (
        <>
            <IonGrid>
                {props.selected === 'good' ?
                    <>
                        {good.length === 0 && (
                            <IonRow>
                                <IonCol className="ion-text-center">
                                    <IonCard color="danger" mode="ios">
                                        <IonCardContent className="ion-text-center">
                                            <IonCardTitle> No Good Memories Found. </IonCardTitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        )}
                        {good.map((memory) => (
                <IonCol key={memory.idGood} size="12">
                  <IonCard mode="ios">
                    <IonImg src={memory.fotoURL} alt={memory.title} />
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: memory.lat, lng: memory.lng }}
                    zoom={18.5}
                  >
                    <Marker position={{ lat: memory.lat, lng: memory.lng }} />
                  </GoogleMap>
                    <IonCardContent>
                      <IonCardTitle>
                        <IonText mode="md">{memory.title}</IonText>
                      </IonCardTitle>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
                    </>
                    :
                    <>

                        {bad.length === 0 && (
                            <IonRow>
                                <IonCol className="ion-text-center">
                                    <IonCard color="danger" mode="ios">
                                        <IonCardContent className="ion-text-center">
                                            <IonCardTitle> No Bad Memories Found. </IonCardTitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        )}
                        {bad.map((memory) => (
              <IonCol size="12" key={memory.idBad}>
                <IonCard mode="ios">
                  <IonImg src={memory.fotoURL} alt={memory.title} />
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: memory.lat, lng: memory.lng }}
                    zoom={18.5}
                  >
                    <Marker position={{ lat: memory.lat, lng: memory.lng }} />
                  </GoogleMap>
                  <IonCardContent>
                    <IonCardTitle>
                      <IonText mode="md">{memory.title}</IonText>
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
                    </>
                }
            </IonGrid>
        </>
    )
}

export default MemoryItem;