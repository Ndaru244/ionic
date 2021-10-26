import { IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonText, IonCardContent, IonImg } from "@ionic/react";
import React, { useContext } from "react";
import MemoriesContext from "../pages/data/memories-context";

export const Memorys: React.FC<{ selected: 'good' | 'bad' }> = props => {
    const memoryCtx = useContext(MemoriesContext);
    const good = memoryCtx.memories.filter(memory => memory.type === 'good');
    const bad = memoryCtx.memories.filter(memory => memory.type === 'bad');
    return (
        <>
            <IonGrid>
                {props.selected === 'good' ?
                    <>
                        {good.length === 0 && (
                            <IonRow>
                                <IonCol>
                                    <IonCard color="danger" mode="ios">
                                        <IonCardContent className="ion-text-center">
                                            <IonCardTitle> No Good Memories Found. </IonCardTitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        )}
                        <IonRow>
                            {good.map(memory => (
                                <IonCol key={memory.id} size="12">
                                    <IonCard mode="ios">
                                        <IonImg src={memory.base64url} alt={memory.title} />
                                        <IonCardContent>
                                            <IonCardTitle>
                                                <IonText mode="md">{memory.title}</IonText>
                                            </IonCardTitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            ))}
                        </IonRow>
                    </>
                    :
                    <>
                        {bad.length === 0 && (
                            <IonRow>
                                <IonCol>
                                    <IonCard color="danger" mode="ios">
                                        <IonCardContent className="ion-text-center">
                                            <IonCardTitle> No Bad Memories Found. </IonCardTitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        )}
                        <IonRow>
                            {bad.map(memory => (
                                <IonCol size="12" key={memory.id}>
                                    <IonCard mode="ios">
                                        <IonImg src={memory.base64url} alt={memory.title} />
                                        <IonCardContent>
                                            <IonCardTitle>
                                                <IonText mode="md">{memory.title}</IonText>
                                            </IonCardTitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            ))}
                        </IonRow>
                    </>
                }
            </IonGrid>
        </>
    )
}

