import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAvatar, IonList, IonItem, IonLabel, IonIcon, IonButton, IonItemOption, IonItemOptions, IonItemSliding } from "@ionic/react";
import { close, female, heart, male } from 'ionicons/icons';

import React, { useRef } from "react";

export const DAFTAR = [
    {
        id: 'P1',
        photo: 'https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg',
        name: 'Tono',
        criteria: 'Aku panglima spartan',
        gender: 'L',
        target: false
    },

    {
        id: 'P2',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9wV31A5aBwTkd3XYIvowQTVYm3MGf2616A&usqp=CAU',
        name: 'Siti',
        criteria: 'Aku suka yang tingginya 3 meter',
        gender: 'P',
        target: false
    },

    {
        id: 'P3',
        photo: 'https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg',
        name: 'Udin',
        criteria: 'Aku anak dewa Zeus',
        gender: 'L',
        target: false
    },

];

const Daftar: React.FC = () => {

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const chosen = (findId: string) => {
        const list = DAFTAR.filter(f => f.id === findId);
        const test = DAFTAR.find(f => f.id === findId);
        console.log(test?.name);
        // 
        list.map(data =>(
            DAFTAR.push({id: data.id, photo: data.photo, name: data.name, criteria: data.criteria, gender:data.gender, target: true})
        ))
        slidingOptionsRef.current?.closeOpened();
        console.log('chosen');
    };

    const unchosen = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log('unchosen');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Gebetin</IonTitle>
                    <IonButtons slot="end">
                        <IonItem routerLink="/profil">
                            <IonAvatar>
                                <img src="https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg" />
                            </IonAvatar>
                        </IonItem>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{ textAlign: 'center'}}>
                    {DAFTAR.map(data => (
                        <IonItemSliding key={data.id} ref={slidingOptionsRef}>
                            <IonItemOptions side='end'>
                                <IonItemOption color={data.target != false ? 'danger' : 'light'}
                                    onClick={data.target != false ? unchosen.bind(null, data.id) : chosen.bind(null, data.id)}>
                                    <IonIcon slot='icon-only' 
                                    color={data.target != false ? 'light' : 'danger'}
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
                                        <br />
                                        {data.id}
                                    </p>
                                </IonLabel>
                            </IonItem>

                        </IonItemSliding>
                    ))}
            </IonContent>

        </IonPage>
    )
};
export default Daftar;