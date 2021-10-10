import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import "./profil.css";
export const Profil: React.FC = () => {
    return (
        <IonPage >
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

            <IonContent fullscreen>
                <IonCard color="tertiary">
                <IonCardContent>
                <IonGrid>
                    <IonRow className="ion-text-center ion-justify-content-center">
                        <IonCol size="4" className="animate__animated animate__fadeInTopLeft animate__faster">
                        <img className="avatar" src="https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg" />
                        </IonCol>
                    </IonRow>

                    <IonRow className={"ion-no-margin ion-text-center ion-justify-content-center profileDetails"}>
                        <IonCol size="12">
                            <h2>
                                agegeg
                            </h2>
                            <h4>290498049</h4>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                </IonCardContent>
                </IonCard>
                {/* <IonCard>
                    <IonImg src="https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg" />
                    <IonCardContent>
                        <IonCardTitle>agegeg</IonCardTitle>
                        <IonCardSubtitle>101101100</IonCardSubtitle>
                    </IonCardContent>
                </IonCard> */}
            </IonContent>
        </IonPage>
    )
}