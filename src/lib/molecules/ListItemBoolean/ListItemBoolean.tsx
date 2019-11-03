import * as R from 'ramda'
import React, { ReactNode } from 'react';
import { checkmark } from 'ionicons/icons'
import ListItemIcon from '../ListItemIcon';

interface Props {
  boolean?: boolean
  children?: ReactNode
  icon?: { ios: string, md: string }
}

function ListItemBoolean({ boolean, children, icon } : Props) {
  const iconToUse = R.defaultTo(checkmark, icon)
  return (
    <ListItemIcon icon={boolean ? iconToUse : undefined}>
      {children}
    </ListItemIcon>
  )
}

export default ListItemBoolean;