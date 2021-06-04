import React, { useState } from 'react';
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
import { ActionSheet, ActionSheetOptionStyle } from '@capacitor/action-sheet';

import { IonContent, IonHeader, IonSlides, IonSearchbar, IonImg, IonPage, IonSlide, IonTitle, IonToolbar, IonButton, IonToast } from '@ionic/react';
import './Tab3.css';
import { logoFacebook, logoSteam, logoWhatsapp } from 'ionicons/icons';
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';






const Tab3: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [showToast1, setShowToast1] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Labels y botones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding" scroll-y="false">
        <p>Busqueda</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonSlides>

          <IonSlide>

            <IonImg src={logoWhatsapp} />
          </IonSlide>
          <IonSlide>
            <IonImg src={logoSteam} />
          </IonSlide>
        </IonSlides><br /><br /><br />


        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Hola me llamo Héctor"
          duration={1100}
        />

        <IonButton onClick={() => setShowToast1(true)}>Ver Toast</IonButton>
        <IonButton onClick={() => share()}>Compartir información</IonButton>
        <IonButton onClick={() => link()}>Mi twitter</IonButton>
        <IonButton onClick={() => sheet()}>MenuSheet</IonButton>
        <IonButton onClick={() => gg()}>Ver carga de bateria</IonButton>
        <IonButton onClick={() => gg2()}>Ver si esta cargando</IonButton>
        <IonButton onClick={() => gg3()}>Ver si esta conectado a Wifi</IonButton>
        <IonButton onClick={() => gg5()}>Ver tipo de conexion</IonButton>


      </IonContent>
    </IonPage>
  );


  


async function gg3(){
  const status = await Network.getStatus();
  const dd=status.connected;
  await Toast.show({text: 'wifi: '+ dd,});
}


async function gg5(){
  const status = await Network.getStatus();
  const dd=status.connectionType;
  await Toast.show({text: 'Tipo de conexión: '+ dd,});
}

async function gg(){
  const info = await Device.getBatteryInfo();
  const dd=info.batteryLevel;
  await Toast.show({text: 'Estatus de carga: '+ dd,});
}

async function gg2(){
  const info = await Device.getBatteryInfo();
  const dd=info.isCharging;
  await Toast.show({text: 'Estatus de carga: '+ dd,});
}

  async function link() {
    await Browser.open({ url: 'https://twitter.com/Hector_APH?s=09' });
  }


  async function share() {
    await Share.share({
      title: 'Compartiendo desde Ionic',
      text: 'Compartiendo desde una aplicación creada por Héctor Pizano',
      url: 'https://twitter.com/Hector_APH?s=09',
      dialogTitle: 'Compartir',
    });
  }




async function sheet(){
    await ActionSheet.showActions({
      title: 'Opciones',
      message: 'Seleccione accion',
      options: [
        {
          title: 'Héctor',
        },
        {
          title: 'Alejandro',
        },
        {
          title: 'Pizano Hernández',
        },
      ],
    });
  };
};
export default Tab3;
