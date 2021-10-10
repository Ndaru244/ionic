import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAvatar, IonItem, IonLabel, IonIcon, IonItemOption, IonItemOptions, IonItemSliding, IonLoading, IonRouterOutlet, useIonToast } from "@ionic/react";
import { female, heart, male } from 'ionicons/icons';

import React, { useContext, useRef, useState } from "react";
import { Target } from "./Target";
import { Route, Redirect } from "react-router";
import TargetContext from "./data/target-context";

export const DAFTAR = [
    {
        id: 'P1',
        photo: 'https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg',
        name: 'Tono',
        criteria: 'Aku panglima spartan',
        gender: 'L'
    },

    {
        id: 'P2',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9wV31A5aBwTkd3XYIvowQTVYm3MGf2616A&usqp=CAU',
        name: 'Siti',
        criteria: 'Aku suka yang tingginya 3 meter',
        gender: 'P'
    },
    {
        id: 'P3',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9wV31A5aBwTkd3XYIvowQTVYm3MGf2616A&usqp=CAU',
        name: 'Noer',
        criteria: 'Aku slir raja',
        gender: 'P'
    },

    {
        id: 'P4',
        photo: 'https://img.freepik.com/free-vector/portrait-masculine-arab-man-profile-saudi-male-character-illustration_102172-478.jpg?size=626&ext=jpg',
        name: 'Udin',
        criteria: 'Aku anak dewa Zeus',
        gender: 'L'
    },

];

const Daftar: React.FC = () => {
    const [showToast, dismissToast] = useIonToast();
    const targetCtx = useContext(TargetContext);
    const [showLoading, setShowLoading] = useState(false);
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const chosen = (findId: string) => {
        const list = DAFTAR.filter(f => f.id === findId);
        const find = targetCtx.targets.find(f => f.id === findId);
        list.map(data => {
            if (find?.id != findId) {
                targetCtx.addTarget(
                    data.id,
                    data.photo,
                    data.name,
                    data.criteria,
                    data.gender
                )
                setShowLoading(true)
            } else {
                showToast({
                    message: 'Sudah Tertarget!',
                    duration: 2500,
                    position: 'bottom',
                    color: 'danger',
                    mode: 'ios',
                    onDidDismiss: dismissToast
                })
            }
        })
        slidingOptionsRef.current?.closeOpened();
        console.log('chosen');
    };

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
            <IonContent style={{ textAlign: 'center' }}>
                {DAFTAR.map(data => (
                    <IonItemSliding key={data.id} ref={slidingOptionsRef}>
                        <IonItemOptions side='end'>
                            <IonItemOption color={'light'}
                                onClick={chosen.bind(null, data.id)}>
                                <IonIcon slot='icon-only'
                                    color={'danger'}
                                    icon={heart} />
                            </IonItemOption>
                            <IonLoading
                                cssClass='my-custom-class'
                                isOpen={showLoading}
                                onDidDismiss={() => setShowLoading(false)}
                                message={'Please wait...'}
                                duration={1500}
                                mode='ios'
                            />
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
                ))}
            </IonContent>

        </IonPage>
    )
};
export default Daftar;
