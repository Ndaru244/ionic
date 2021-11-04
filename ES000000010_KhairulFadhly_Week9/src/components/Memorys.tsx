import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonText,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import React, { useContext } from "react";
import MemoriesContext from "../pages/data/memories-context";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";

export const Memorys: React.FC<{ selected: "good" | "bad" }> = (props) => {
  const memoryCtx = useContext(MemoriesContext);
  const good = memoryCtx.memories.filter((memory) => memory.type === "good");
  const bad = memoryCtx.memories.filter((memory) => memory.type === "bad");
  const containerStyle = {
    width: "100%",
    height: "30%",
  };
  return (
    <>
      {props.selected === "good" ? (
        <>
          {good.length === 0 && (
            <IonRow>
              <IonCol>
                <IonCard color="danger" mode="ios">
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle> No Good Memories Found. </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
          <IonRow>
            <>
              {good.map((memory) => (
                <IonCol key={memory.id} size="12">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: memory.lat, lng: memory.lng }}
                    zoom={18.5}
                  >
                    <Marker position={{ lat: memory.lat, lng: memory.lng }} />
                  </GoogleMap>
                  <IonCard mode="ios">
                    <IonImg src={memory.base64url} alt={memory.title} />
                    <IonCardContent>
                      <IonCardTitle>
                        <IonText mode="md">{memory.title}</IonText>
                      </IonCardTitle>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </>
          </IonRow>
        </>
      ) : (
        <>
          {bad.length === 0 && (
            <IonRow>
              <IonCol>
                <IonCard color="danger" mode="ios">
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle> No Bad Memories Found. </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
          <IonRow>
            {bad.map((memory) => (
              <IonCol size="12" key={memory.id}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{ lat: memory.lat, lng: memory.lng }}
                  zoom={18.5}
                >
                  <Marker position={{ lat: memory.lat, lng: memory.lng }} />
                </GoogleMap>
                <IonCard mode="ios">
                  <IonImg src={memory.base64url} alt={memory.title} />
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
          </IonRow>
        </>
      )}
    </>
  );
};
