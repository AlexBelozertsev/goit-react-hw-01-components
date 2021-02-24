import React from 'react';

import Layout from './components/Layout/Layout';
import Notification from './components/Notification/Notification';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userInfo from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

const App = () => {
  return (
    <Layout>
      <Notification text="Task 1" />
      <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Notification text="Task 2" />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <Notification text="Task 3" />
      <FriendList friends={friends} />
      <Notification text="Task 4" />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};

export default App;
