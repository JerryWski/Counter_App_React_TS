import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className={styles.main_app}>
      <Header />
    </div>
  );
};

export default App;
