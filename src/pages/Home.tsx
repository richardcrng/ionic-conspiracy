import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import ListItemBoolean from '../components/molecules/ListItemBoolean';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonListHeader>Player names | Ready status</IonListHeader>
          <ListItemBoolean boolean>Richard</ListItemBoolean>
          <ListItemBoolean>Sam</ListItemBoolean>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
