import React, { ReactNode } from 'react';
import ListItemIcon from '../../atoms/ListItemIcon';

interface Props {
  boolean?: boolean
  children?: ReactNode
}

function ListItemBoolean({ boolean, children } : Props) {
  return (
    <ListItemIcon icon={boolean ? 'checkmark' : undefined}>
      {children}
    </ListItemIcon>
  )
}

export default ListItemBoolean;