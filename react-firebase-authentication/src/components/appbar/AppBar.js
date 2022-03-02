import React from 'react'
import {AppBarStyles, AppBarItems, AppBarItem} from './styles'
import {IconButton} from './../../ui/buttons'
import {IoIosNotificationsOutline} from 'react-icons/io'

function AppBar(props) {
  return (
    <AppBarStyles>
        <AppBarItems>
            <AppBarItem>Branding</AppBarItem>
            <AppBarItem>
                <IconButton><IoIosNotificationsOutline color='red' size="2rem"/></IconButton> 
            </AppBarItem>
        </AppBarItems>
    </AppBarStyles>
  )
}

export default AppBar