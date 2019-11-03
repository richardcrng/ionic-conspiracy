import React from 'react';
import { IonButton } from '@ionic/react';

interface Props {
  inAConspiracyAgainst?: string
}

function Role({} : Props) {
  const [reveal, setReveal] = React.useState(false)

  return (
    <>
      <IonButton>Reveal role</IonButton>
    </>
  )
}

export default Role;