import React from 'react'
import style from '../style.module.css'
import { FriendInterface } from '../../../utilities/interfaces'
export function FriendElement ({
  avatar,
  isOnline,
  name
}: FriendInterface): JSX.Element {
  return (
    <li className={style.item}>
      <span
        className={`${
          isOnline
            ? (style.statusTrue as string)
            : (style.statusFalse as string)
        } ${style.status as string}`}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  )
}
