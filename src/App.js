import React from 'react';
// import Panel from './components/Panel/Panel';
import Profile from './components/Profile/Profile';
import userInfo from './user.json';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Notification from './components/Notification/Notification';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
    </Layout>
  );
};

export default App;
