import React from 'react'

import { StatInterface } from '../../utilities/interfaces'
import style from './style.module.css'
function Statistics ({
  stats,
  title
}: {
  stats: StatInterface[]
  title?: string | undefined
}): JSX.Element {
  return (
    <section className={style.statistics}>
      {(title !== undefined) && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={style.item}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Statistics
