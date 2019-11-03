import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Voting from '../app/content';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Voting data={[
          ['Richard', true],
          ['Betsi', false]
        ]} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
