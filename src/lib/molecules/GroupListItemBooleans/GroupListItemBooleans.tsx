import React, { ReactNode } from 'react';
import ListItemBoolean from '../ListItemBoolean';

interface Props {
  data: [ReactNode, boolean][]
}

function GroupListItemBooleans({ data } : Props) {
  return (
    <>
      {
        data.map(([children, boolean], index) => (
          <ListItemBoolean key={String(children) + String(index)} boolean={boolean}>
            {children}
          </ListItemBoolean>
        ))
      }
    </>
  )
}

export default GroupListItemBooleans;