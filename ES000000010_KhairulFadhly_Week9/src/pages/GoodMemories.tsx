import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { addSharp } from 'ionicons/icons';
import { Memorys } from '../components/Memorys';
const containerStyle = {
    width: "10%",
    height: "10%",
  };
export const GoodMemories: React.FC = () => {
    const s = 'good';
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Good Memories</IonTitle>
                    <IonButtons slot="end">
                        {!isPlatform('android') ?
                            <IonButton routerLink="/new">
                                <IonIcon icon={addSharp} />
                            </IonButton>
                            : ''}

                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {isPlatform('android') ?
                    <IonFab horizontal="end" vertical="bottom" slot="fixed">
                        <IonFabButton color="tertiary" routerLink="/new">
                            <IonIcon icon={addSharp} />
                        </IonFabButton>
                    </IonFab> : ''}
                <Memorys selected={s} />
            </IonContent>
        </IonPage>
    );
}