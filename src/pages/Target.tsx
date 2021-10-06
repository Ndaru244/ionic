import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { female, close, heart, male, search } from "ionicons/icons"
import { DAFTAR } from "./Daftar";

const celectedItem = DAFTAR.filter(data => data.target === true);
console.log(celectedItem.length);
export const Target: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Target Gebetin</IonTitle>
                    <IonButtons slot="end">
                        <IonItem routerLink="/profil">
                            <IonAvatar>
                                <img src="https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg" />
                            </IonAvatar>
                        </IonItem>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" style={{ textAlign: 'center' }}>
                {celectedItem.length != 0 ?
                    celectedItem.map(data => (
                        <IonItemSliding key={data.id}>
                            <IonItemOptions side='end'>
                                <IonItemOption color='danger'>
                                    <IonIcon slot='icon-only'
                                        color='light'
                                        icon={data.target != false ? close : heart} />
                                </IonItemOption>
                            </IonItemOptions>

                            <IonItem
                                key={data.id}
                                button>
                                <IonAvatar slot='start'>
                                    <img src={data.photo} />
                                </IonAvatar>
                                <IonLabel>
                                    <h2>{data.name}</h2>
                                    <p>
                                        {data.criteria}
                                        <br />
                                        <IonIcon
                                            color={data.gender != 'L' ? 'danger' : 'tertiary'}
                                            icon={data.gender != 'L' ? female : male} />
                                        {' '}
                                        {data.gender != 'L' ? 'Perempuan' : 'Laki - Laki'}
                                    </p>
                                </IonLabel>
                            </IonItem>

                        </IonItemSliding>
                    )) :
                    <IonCard>
                        <IonCardContent>
                            <IonItem lines='none' style={{ textAlign: 'center' }}>
                                <IonLabel>Anda belum punya target gebetan.</IonLabel>
                            </IonItem>
                            <IonButton size='small' fill='outline' shape='round' routerLink="/daftar">
                                Cari Sekarang...
                                <IonIcon slot="start" icon={search} />
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                }

            </IonContent>
        </IonPage>
    )
}