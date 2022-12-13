import React from 'react'

import { FriendInterface } from '../../utilities/interfaces'
import { FriendElement } from './friend-element'
import style from './style.module.css'

function FriendList ({ friends }: { friends: FriendInterface[] }): JSX.Element {
  return (
    <ul className={style.friendsList}>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <FriendElement
          key={id}
          id={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        ></FriendElement>
      ))}
    </ul>
  )
}

export default FriendList
