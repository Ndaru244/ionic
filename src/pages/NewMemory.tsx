import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useState } from 'react';

export const NewMemory: React.FC = () => {

    const [takePhoto, setTakePhoto] =useState<{ 
        path: string;
        preview: string;
     }>();

    const takePhotoHandler = async () => {
        try {
            const photo = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 80,
                width: 500
            });
            console.log(photo.path);
            if (!photo || !photo.path || !photo.webPath) {
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
                <IonRow className="ion-text-center">
                    <IonCol>
                        <div className="image-preview">
                            {!takePhoto && <h3>No photo</h3>}
                            {takePhoto && <img src={takePhoto.preview} alt="Preview" />}
                        </div>
                        <IonButton fill="clear" onClick={takePhotoHandler}>
                            <IonIcon slot="start" icon={camera}></IonIcon>
                            <IonLabel>Take Photo</IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>

                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton>
                            Add Memory
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
}