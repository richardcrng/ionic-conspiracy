import React from 'react';
import { IonButton } from '@ionic/react';

interface Props {
  inAConspiracyAgainst?: string
}

function Role({ inAConspiracyAgainst } : Props) {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <>
      {revealed && <RoleDeclare inAConspiracyAgainst={inAConspiracyAgainst} />}
      <IonButton
        onClick={() => setRevealed(prevState => !prevState)}
      >
        {revealed ? 'Hide' : 'Reveal' } role
        </IonButton>
    </>
  )
}

function RoleDeclare({ inAConspiracyAgainst } : Props) {
  if (inAConspiracyAgainst) {
    return <p>You are in a <b>Conspiracy</b> against <b>{inAConspiracyAgainst}</b></p>
  } else {
    return <p>You are <b>Innocent</b></p>
  }
}

export default Role;