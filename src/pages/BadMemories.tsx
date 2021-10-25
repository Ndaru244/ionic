import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, isPlatform } from '@ionic/react'
import { addSharp } from 'ionicons/icons';
export const BadMemories: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Bad Memories</IonTitle>
                    <IonButtons slot="end">
                        {!isPlatform('android') ?
                            <IonButton>
                                <IonIcon icon={addSharp} />
                            </IonButton>
                            : ''}

                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            {isPlatform('android') ?
                <IonFab horizontal="center" vertical="bottom" slot="fixed">
                    <IonFabButton color="tertiary">
                        <IonIcon icon={addSharp} />
                    </IonFabButton>
                </IonFab> : ''}
            <IonContent>

            </IonContent>
        </IonPage>
    );
}