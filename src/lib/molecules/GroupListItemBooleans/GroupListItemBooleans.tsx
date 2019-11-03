import React, { ReactNode } from 'react';
import ListItemBoolean from '../ListItemBoolean';

interface Props {
  data: [ReactNode, boolean][],
  icon?: { ios: string, md: string }
}

function GroupListItemBooleans({ data, icon } : Props) {
  return (
    <>
      {
        data.map(([children, boolean], index) => (
          <ListItemBoolean
            key={String(children) + String(index)}
            boolean={boolean}
            icon={icon}
          >
            {children}
          </ListItemBoolean>
        ))
      }
    </>
  )
}

export default GroupListItemBooleans;