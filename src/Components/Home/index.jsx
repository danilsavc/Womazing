import React from 'react';

import DreamTeam from './DreamTeam';
import Header from './Header';
import Important from './Important';
import Preview from './Preview';




const Home = () => {

  return (
    <>
      <Header/>
      <Preview/>
      <Important/>
      <DreamTeam/>
    </>
    
  );
};

export default Home;