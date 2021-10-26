import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useRef, useState } from "react";
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from "@capacitor/filesystem";
import { base64FromPath } from "@ionic/react-hooks/filesystem";
import { useHistory } from "react-router";
import MemoriesContext from './data/memories-context';

export const NewMemory: React.FC = () => {

    const memoriesCtx = useContext(MemoriesContext);
    const history = useHistory();
    const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good');
    const titleRef = useRef<HTMLIonInputElement>(null);
    const [takePhoto, setTakePhoto] =useState<{ 
        path: string | undefined;
        preview: string;
    }>();
    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectMemoryType = event.detail.value;
        setChosenMemoryType(selectMemoryType);
    }

    const takePhotoHandler = async () => {
        try {
            const photo = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 80,
                width: 500
            });
            console.log(photo);
            if (!photo || /*!photo.path*/ !photo.webPath) {
                return;
            }
            setTakePhoto({
                path: photo.path,
                preview: photo.webPath
            })
        } catch(e) {
            console.log("no photo");
        }
    };

    const addMemoryHandler = async () => {
        const enteredTitle = titleRef.current?.value;
        if (!enteredTitle
            || enteredTitle.toString().trim().length === 0
            || !takePhoto || !chosenMemoryType) {
            return;
        }

        const fileName = new Date().getTime()+'jpeg';
        const base64 = await base64FromPath(takePhoto!.preview);
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data
        });
        memoriesCtx.addMemory(fileName, base64, enteredTitle.toString(), chosenMemoryType);
        history.length > 0 ? history.goBack() : history.replace('/good-memories');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>
                        Add New Memory
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Title</IonLabel>
                            <IonInput mode="ios" type="text" ref={titleRef} required={true}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Select Memory</IonLabel>
                                <IonSelect mode="ios" aria-required={true} onIonChange={selectMemoryTypeHandler}>
                                    <IonSelectOption value="good">Good Memory</IonSelectOption>
                                    <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                                </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-text-center">
                    <IonCol>
                        <IonCard mode="ios">
                            
                                {!takePhoto && <IonCardContent><h3>No photo chosen</h3></IonCardContent>}
                            
                                {takePhoto && <img src={takePhoto.preview} alt="Preview" />}
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

                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton onClick={addMemoryHandler} expand="block">
                            Add Memory
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
}