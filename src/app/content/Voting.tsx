import React, { ReactNode } from 'react';
import GroupListItemBooleans from '../../lib/molecules/GroupListItemBooleans';
import { IonButton } from '@ionic/react';

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
      {buttons.map(([text, fill]) => (
        <IonButton key={text} fill={fill} expand='block'>{text}</IonButton>
      ))}
    </>
  )
}

export default Voting;