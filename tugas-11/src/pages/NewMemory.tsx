import { IonPage, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonInput, IonItem, IonLabel, IonButton, IonCol, IonGrid, IonIcon, IonRow, IonSelect, IonSelectOption, IonCard, IonCardContent } from "@ionic/react";
import React, { useContext, useRef, useState } from "react";
import { camera, arrowBackOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from "@capacitor/filesystem";
import { base64FromPath } from "@ionic/react-hooks/filesystem";
import { useHistory } from "react-router";

import { Geolocation } from '@capacitor/geolocation';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

import firebaseConfig from '../api/apiConfig';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { uploadBytes, getStorage, ref, UploadResult, getDownloadURL } from 'firebase/storage';
import { async } from "@firebase/util";

const NewMemory: React.FC = () => {
    const history = useHistory();
    const storage = getStorage();
    const db = getFirestore(firebaseConfig);

    const [lat, setLat] = useState<number>(-6.249673019391394);
    const [lng, setLng] = useState<number>(106.5224098972044);

    const [takenPhoto, setTakenPhotos] = useState<{
        path: string | undefined;
        preview: string
    }>();

    const [choosenMemoryType, setChoosenMemoryType] = useState<'good' | 'bad'>('good');
    const titleRef = useRef<HTMLIonInputElement>(null);

    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectMemoryType = event.detail.value;
        setChoosenMemoryType(selectMemoryType);
    }

    const containerStyle = {
        width: "100%",
        height: "50%"
    }

    const changeLocation = (e: google.maps.MapMouseEvent) => {
        const lat = e.latLng?.lat();
        const lng = e.latLng?.lng();

        if (lat && lng) {
            setLat(lat)
            setLng(lng);
        }
    }

    const takePhotoHandler = async () => {
      try {
        const image = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 80,
            width: 500
        });
        console.log(image);
        if (!image || /*!image.path ||*/ !image.webPath) {
            return;
        }
        setTakenPhotos({
            path: image.path,
            preview: image.webPath
        })
      }catch (e) {
        console.log("no photo");
      }
    }

    const addMemory = async () => {
        const enteredTitle = titleRef.current?.value;
        if (!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !choosenMemoryType || lat === 0 || lng === 0) {
            return;
        }
        const fileName = new Date().getTime() + '.jpeg';
        const base64Data = await takenPhoto!.preview;
        await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Data
        })
        const storageRef = ref(storage, fileName);
        fetch(base64Data)
            .then(async (res) => {
                const parseBlob = await res.blob();
                uploadBytes(storageRef, parseBlob).then((snapshoot) => {
                    console.log('upload file success');
                    getDownloadURL(ref(storage, fileName)).then((url) => {
                        const addData = async () => {
                            try {
                                const docRef = await addDoc(collection(db, choosenMemoryType === 'good' ? "good" : "bad"), {
                                    title: enteredTitle.toString(),
                                    lat: lat,
                                    lng: lng,
                                    foto: fileName,
                                    fotoURL: url
                                })
                                console.log("Document written with ID: ", docRef.id);
                                history.length === 0 ? history.goBack() : choosenMemoryType === 'good' ? window.location.replace("/good") : window.location.replace("/bad");
                            } catch (e) {
                                console.error("Error adding document : ", e);
                            }
                        }
                        addData();
                    })
                })
            })
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Add New Memory</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput
                mode="ios"
                type="text"
                ref={titleRef}
                required={true}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Select Memory</IonLabel>
              <IonSelect
                mode="ios"
                aria-required={true}
                onIonChange={selectMemoryTypeHandler}
              >
                <IonSelectOption value="good">Good Memory</IonSelectOption>
                <IonSelectOption value="bad">Bad Memory</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonCard mode="ios">
              {!takenPhoto && (
                <IonCardContent>
                  <h3>No photo chosen</h3>
                </IonCardContent>
              )}

              {takenPhoto && <img src={takenPhoto.preview} alt="Preview" />}
            </IonCard>
            {/* <div className="image-preview">
                            {!takePhoto && <h3>No photo</h3>}
                            {takePhoto && <img src={takePhoto.preview} alt="Preview" />}
                        </div> */}
            <IonButton fill="clear" onClick={takePhotoHandler}>
              <IonIcon slot="start" icon={camera}></IonIcon>
              <IonLabel>Take Photo</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: lat, lng: lng }}
          zoom={18.5}
          onClick={changeLocation}
        >
          <Marker position={{ lat: lat, lng: lng }} />
          {/* <InfoWindow
            position={{ lat: -6.167010666406884, lng: 106.62536131758027 }}
          >
              <h1>tempat aku vaksinasi covid pertama kali.</h1>
            
          </InfoWindow> */}
        </GoogleMap>

        <IonRow className="ion-margin-top">
          <IonCol className="ion-text-center">
            <IonButton onClick={addMemory} expand="block">
              Add Memory
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
        </IonPage>
    )
}

export default NewMemory;