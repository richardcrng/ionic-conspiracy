import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import GroupListItemBooleans from '../components/molecules/GroupListItemBooleans';

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
          <GroupListItemBooleans data={[
            ['Richard', true],
            ['Johanna', false],
            ['Monterey', true]
          ]} />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
