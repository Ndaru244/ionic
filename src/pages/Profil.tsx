import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react"

export const Profil: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Profil</IonTitle>
                    <IonButtons slot="end">
                        <IonItem>
                            <IonAvatar>
                                <img src="https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg" />
                            </IonAvatar>
                        </IonItem>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonImg src="https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg" />
                    <IonCardContent>
                        <IonCardTitle>agegeg</IonCardTitle>
                        <IonCardSubtitle>101101100</IonCardSubtitle>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}