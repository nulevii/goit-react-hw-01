import React from 'react'
import style from './style.module.css'
import { ProfileInterface } from '../../utilities/interfaces'

function Profile ({ profile }: { profile: ProfileInterface }): JSX.Element {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }
  } = profile
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.listEl}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.listEl}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.listEl}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
