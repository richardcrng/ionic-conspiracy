import React, { ReactNode } from 'react';
import GroupListItemBooleans from '../../lib/molecules/GroupListItemBooleans';
import { IonButton, IonList, IonListHeader, IonItem } from '@ionic/react';
import { checkboxOutline } from 'ionicons/icons'
import CentreBottom from '../../lib/atoms/CentreBottom';

interface Props {
  data: [ReactNode, boolean][],
  activeButton?: 'conspiracy' | 'noConspiracy'
}

function Voting({ data, activeButton } : Props) {
  const buttons: [string, 'solid' | 'outline'][] = [
    ['Conspiracy', activeButton === 'conspiracy' ? 'solid' : 'outline'],
    ['No Conspiracy', activeButton === 'noConspiracy' ? 'solid' : 'outline']
  ]

  return (
    <>
      <IonList>
        <IonItem>
          <p><b>Player list</b></p>
          <p slot='end'><b>Voted?</b></p>
        </IonItem>
        <GroupListItemBooleans data={data} icon={checkboxOutline} lines='none' />
      </IonList>
      <CentreBottom>
        {buttons.map(([text, fill]) => (
          <IonButton
            key={text}
            expand='block'
            fill={fill}
            size='large'
          >
            {text}
          </IonButton>
        ))}
      </CentreBottom>
    </>
  )
}

export default Voting;