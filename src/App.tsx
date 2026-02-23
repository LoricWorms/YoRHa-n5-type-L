import React from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import { BackgroundAnimation } from './components';

function App() {
  return (
      <div className={styles.App}>
        <BackgroundAnimation />
        <RoutesPages/>
      </div>
  );
}

export default App;
