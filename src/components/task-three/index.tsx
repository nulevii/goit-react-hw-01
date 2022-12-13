import React from 'react'
import { FriendInterface } from '../../utilities/interfaces'
import style from './style.module.css'

function FriendList ({ friends }: { friends: FriendInterface[] }): JSX.Element {
  return (
    <ul className={style.friendsList}>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <li key={id} className={style.item}>
          <span
            className={`${
              isOnline
                ? (style.statusTrue as string)
                : (style.statusFalse as string)
            } ${style.status as string}`}
          ></span>
          <img
            className={style.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  )
}

export default FriendList
