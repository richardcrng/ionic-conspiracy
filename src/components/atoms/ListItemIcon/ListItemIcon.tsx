import React from 'react';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';

interface Props {
  children?: React.ReactNode
  icon?: string
}

function ListItemIcon({ children, icon } : Props) {
  return (
    <IonItem>
      <IonLabel>{children}</IonLabel>
      {icon && <IonIcon data-testid='icon-of-ListItemIcon' name={icon} slot='end' />}
    </IonItem>
  )
}

export default ListItemIcon;