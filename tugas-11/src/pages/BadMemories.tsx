import { IonPage, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon, IonButton, IonButtons, isPlatform } from "@ionic/react";
import { addOutline, addSharp } from "ionicons/icons";
import React, { useContext } from "react";
import MemoryItem from "../components/Memorys";

const BadMemories: React.FC = () => {
    const selected = 'bad';
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Bad Memories</IonTitle>
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
                        <IonFabButton routerLink="/new">
                            <IonIcon icon={addSharp} />
                        </IonFabButton>
                    </IonFab> : ''}
                <MemoryItem selected={selected} />
            </IonContent>
        </IonPage>
    )
}

export default BadMemories;