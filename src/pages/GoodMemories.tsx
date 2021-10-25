import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { addSharp } from 'ionicons/icons';
export const GoodMemories: React.FC = () => {
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

            </IonContent>
        </IonPage>
    );
}