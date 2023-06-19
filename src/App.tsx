import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import CountContainer from './components/CountContainer';

const App: React.FC = () => {
  return (
    <div className={styles.main_app}>
      <Header />
      <CountContainer />
    </div>
  );
};

export default App;
