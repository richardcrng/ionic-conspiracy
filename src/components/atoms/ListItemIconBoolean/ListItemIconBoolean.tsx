import React from 'react';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';

interface Props {
  children?: React.ReactNode
}

function ListItemIconBoolean({ children } : Props) {
  return (
    <IonItem>
      <IonLabel>{children}</IonLabel>
      <IonIcon name='checkmark' slot='end' />
    </IonItem>
  )
}

export default ListItemIconBoolean;