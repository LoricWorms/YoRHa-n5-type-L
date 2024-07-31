import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import { LoadingDots, LoadingLogs, SpinLoadingIcon } from './components';
import { Loading } from './pages';

function App() {
  return (
    <div className={styles.App}>
      {/* <NavbarModule/>
        <hr/>
        <div className={styles.dottedspaced}/>
        <RoutesPages/>
         */}
      <Loading />
    </div>
  );
}

export default App;
