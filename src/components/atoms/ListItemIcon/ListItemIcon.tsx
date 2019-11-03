import React from 'react';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { IconType } from 'react-icons/lib/cjs';

interface Props {
  children?: React.ReactNode
  icon?: string | IconType
}

function ListItemIcon({ children, icon: Icon } : Props) {
  return (
    <IonItem>
      <IonLabel>{children}</IonLabel>
      {typeof Icon === 'string' && <IonIcon data-testid='icon-of-ListItemIcon' name={Icon} slot='end' />}
      {typeof Icon === 'function' && <span data-testid='icon-of-ListItemIcon' slot='end'><Icon /></span>}
    </IonItem>
  )
}

export default ListItemIcon;