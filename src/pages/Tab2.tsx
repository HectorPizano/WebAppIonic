import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonReorder, IonImg, IonLabel, IonItem, IonReorderGroup, IonListHeader, IonGrid, IonRow, IonCol } from '@ionic/react';
import { diamondSharp, logoDiscord, logoFacebook, logoGooglePlaystore, logoPaypal, logoPlaystation, logoSteam, logoTwitch, logoWhatsapp, logoWindows, logoXbox, logoYoutube } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista dinamica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonListHeader>LA LIGA MX</IonListHeader>
        <IonReorderGroup disabled={false}>
          <IonReorder>
            <IonItem>
              <IonLabel>Pumas UNAM</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>America</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Necaxa</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Chivas FC</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Puebla FC</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Atlas FC</IonLabel>
            </IonItem>
          </IonReorder>
        </IonReorderGroup><br /><br />


        <IonGrid>
          <IonRow>
            <IonCol><IonImg src={logoWhatsapp} /></IonCol>
            <IonCol><IonImg src={logoDiscord} /></IonCol>
            <IonCol><IonImg src={diamondSharp} /></IonCol>
            <IonCol><IonImg src={logoFacebook} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonImg src={logoWindows} /></IonCol>
            <IonCol><IonImg src={logoYoutube} /></IonCol>
            <IonCol><IonImg src={logoTwitch} /></IonCol>
            <IonCol><IonImg src={logoXbox} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonImg src={logoSteam} /></IonCol>
            <IonCol><IonImg src={logoPlaystation} /></IonCol>
            <IonCol><IonImg src={logoPaypal} /></IonCol>
            <IonCol><IonImg src={logoGooglePlaystore} /></IonCol>
          </IonRow>
        </IonGrid>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
