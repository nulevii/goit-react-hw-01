import React from 'react'
import TaskOne from '../task-one'
import TaskTwo from '../task-two'
import TaskThree from '../task-three'

import profile from '../../mock-data/user.json'
import data from '../../mock-data/data.json'
import friends from '../../mock-data/friends.json'

function Task ({ taskNumber }: { taskNumber: number }): JSX.Element | null {
  if (taskNumber === 1) {
    return <TaskOne profile={profile}/>
  }

  if (taskNumber === 2) {
    return <TaskTwo stats={data}/>
  }

  if (taskNumber === 3) {
    return <TaskThree friends={friends}/>
  }
  return null
}

export default Task
