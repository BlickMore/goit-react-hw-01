import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import user from './user.json'
import statisticData from './statistical-data.json'
import friends from './friends.json'
import transactions from './transactions.json'


ReactDOM.render(
  <>    <App friends={friends} user={user} statisticData={statisticData} transactionData={transactions}/>  </>,  document.getElementById('root')
);