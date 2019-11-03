import React from 'react';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { IconType } from 'react-icons/lib/cjs';

type IconIdentifier = string | IconType | { ios: string, md: string }

interface Props {
  children?: React.ReactNode
  icon?: IconIdentifier
}

function ListItemIcon({ children, icon } : Props) {
  return (
    <IonItem>
      <IonLabel>{children}</IonLabel>
      {icon && <Icon icon={icon} /> }
    </IonItem>
  )
}

function Icon({ icon: IconProp } : { icon: IconIdentifier }) {
  if (typeof IconProp === 'string') {
    return <IonIcon data-testid='icon-of-ListItemIcon' name={IconProp} slot='end' />
  } else if (typeof IconProp === 'function') {
    return (
      <span data-testid='icon-of-ListItemIcon' slot='end'>
        <IconProp />
      </span>
    )
  } else {
    return <IonIcon data-testid='icon-of-ListItemIcon' icon={IconProp} slot='end' />
  }
}

export default ListItemIcon;