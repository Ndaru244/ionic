import { IonPage, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonButton, IonButtons, isPlatform } from "@ionic/react";
import React, { memo, useContext } from "react";
import { addOutline, addSharp } from 'ionicons/icons';
import MemoryItem from "../components/Memorys";

const GoodMemories: React.FC = () => {
    const selected = 'good';
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
                        <IonFabButton routerLink="/new">
                            <IonIcon icon={addSharp} />
                        </IonFabButton>
                    </IonFab> : ''}
                <MemoryItem selected={selected} />
            </IonContent>
        </IonPage>
    )
}

export default GoodMemories;