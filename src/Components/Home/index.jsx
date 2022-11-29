import React from 'react';

import DreamTeam from './DreamTeam';
import Header from './Header';
import Important from './Important';
import Preview from './Preview';


const Home = () => {

  return (
    <div>
      <Header/>
      <Preview/>
      <Important/>
      <DreamTeam/>
    </div>
    
  );
};

export default Home;