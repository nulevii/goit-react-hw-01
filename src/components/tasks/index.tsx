import React from 'react'
import Profile from '../profile'
import Statistics from '../statistics'
import FriendList from '../friend-list'
import TransactionHistory from '../transaction-history'

import profile from '../../utilities/mock-data/user.json'
import data from '../../utilities/mock-data/data.json'
import friends from '../../utilities/mock-data/friends.json'
import transactions from '../../utilities/mock-data/transactions.json'

function Task ({ taskNumber }: { taskNumber: number }): JSX.Element | null {
  if (taskNumber === 1) {
    return <Profile profile={profile}/>
  }

  if (taskNumber === 2) {
    // const title = 'Upload stats'
    return <Statistics stats={data} />
  }

  if (taskNumber === 3) {
    return <FriendList friends={friends}/>
  }

  if (taskNumber === 4) {
    return <TransactionHistory items={transactions}/>
  }

  return null
}

export default Task
