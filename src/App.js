import React from 'react'
import Profile from './component/Profile/Profile'
import Statistic from './component/Statistic/Statistic'
import FriendList from './component/Friend-list/FriendList'
import TransactionHistory from './component/Transactions/TransactionHistory'

const App = (props) => {return (<><Profile user={props.user}/> <Statistic statisticData={props.statisticData}/> <FriendList friends={props.friends}/><TransactionHistory transactionData={props.transactionData}/></>)}
export default App;