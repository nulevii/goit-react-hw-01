import React from 'react'

function TaskThree ({ friends }: { friends: Array<{
  avatar: string
  name: string
  isOnline: boolean
  id: number
}> }): JSX.Element {
  return (
    <div>
      TaskThree
    </div>
  )
}

export default TaskThree
