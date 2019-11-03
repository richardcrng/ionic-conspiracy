import React, { ReactNode } from 'react';
import GroupListItemBooleans from '../../lib/molecules/GroupListItemBooleans';
import { IonButton } from '@ionic/react';
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
      <GroupListItemBooleans data={data} />
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