import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { addSharp } from 'ionicons/icons';

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const url_api = "http://localhost/api_mhs/select_all_student.php";
  const url_post = "http://localhost/api_mhs/insert_new_student.php";
  const length = data.length;

  const nim   = useRef<HTMLIonInputElement>(null);
  const nama  = useRef<HTMLIonInputElement>(null);
  const prodi = useRef<HTMLIonInputElement>(null);

  const [selectFile, setSelectFile] = useState<File>();

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setSelectFile(event.target!.files![0]);
  };

  const sendGetRequest = () => {
    return axios({
      url: url_api,
      method: 'get'
    }).then(response => {
      console.log(response);
      return response.data;
    })
  }
  useEffect(() => {
    sendGetRequest().then(data => setData(data.mahasiswa));
  }, []);

  const insertHandler = () => {
    const formData = new FormData();
    const inNim = nim.current?.value as string;
    const inNama = nama.current?.value as string;
    const inProdi = prodi.current?.value as string;

    formData.append('nim', inNim);
    formData.append('nama', inNama);
    formData.append('prodi', inProdi);
    formData.append('foto', selectFile as File);
    return axios({
      url: url_post,
      method: 'post',
      data: formData
    }).then(response => {console.log(window.location.replace("/home"))})
  };
  // const getAllDataHandler = () => {
  //   fetch(url)
  //   .then(respone => respone.json())
  //   .then((data) => {
  //     setData(data)
  //     console.log(data);
  //   });
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Data Mahasiswa</IonTitle>
          <IonButtons slot="end">
            {!isPlatform('android') ?
              <IonButton onClick={() => setShowModal(true)}>
                <IonIcon icon={addSharp} />
              </IonButton>
              : ''}

          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {isPlatform('android') ?
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="tertiary" onClick={() => setShowModal(true)}>
              <IonIcon icon={addSharp} />
            </IonFabButton>
          </IonFab> : ''}

        <IonModal isOpen={showModal} cssClass='my-custom-class' mode="ios">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Tambah Data</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem lines="none">
                <IonLabel position="stacked"><b>Nim</b></IonLabel>
                <IonInput ref={nim} placeholder="Masukan Nim"></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked"><b>nama</b></IonLabel>
                <IonInput ref={nama} placeholder="Masukan Nama"></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked"><b>Email</b></IonLabel>
                <IonInput ref={prodi} placeholder="Masukan Email" type="email"></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked"><b>Foto</b></IonLabel>
                <input type="file" onChange={fileChangeHandler}></input>
              </IonItem>
            </IonList>
          </IonContent>
          <IonFooter>
            <IonRow>
              <IonCol>
                <IonButton color="danger" expand="block" onClick={() => setShowModal(false)}>Batal</IonButton>
              </IonCol>
              <IonCol><IonButton onClick={insertHandler} expand="block">Simpan</IonButton></IonCol>
            </IonRow>


          </IonFooter>
        </IonModal>

        {length === 0 && (
          <IonRow>
            <IonCol>
              <IonCard color="danger" mode="ios">
                <IonCardContent className="ion-text-center">
                  <IonCardTitle> Tidak Ada Data Yang Ditemukan. </IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        )}
        {data.map(mhs => (

          <IonList key={mhs['nim']}>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src={"http://localhost/api_mhs/"+mhs['foto']} />
              </IonAvatar>
              <IonLabel>
                <h2>{mhs['nama']}</h2>
                <p>{mhs['nim']}</p>
                <p>{mhs['prodi']}</p>
              </IonLabel>
            </IonItem>
          </IonList>
        ))}

        {/* <IonButton onClick={getAllDataHandler}>Get All Data</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
