import * as R from 'ramda'
import React, { ReactNode } from 'react';
import { checkmark } from 'ionicons/icons'
import ListItemIcon from '../ListItemIcon';

interface Props {
  boolean?: boolean
  children?: ReactNode
  icon?: { ios: string, md: string }
  lines?: "full" | "inset" | "none"
}

function ListItemBoolean({ boolean, children, icon, lines } : Props) {
  const iconToUse = R.defaultTo(checkmark, icon)
  return (
    <ListItemIcon icon={boolean ? iconToUse : undefined} lines={lines}>
      {children}
    </ListItemIcon>
  )
}

export default ListItemBoolean;