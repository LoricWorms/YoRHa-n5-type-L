import React, { useEffect, useState, useRef } from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import yorhaLogo from "./assets/yorha-opacity-logo.png"

const SpinLoadginIcon = () => <>
  <div className={styles.spinContainer}>
    <div className={styles.inner}></div>
    <div className={styles.spin}></div>
    <div className={styles.outter}></div>
    <div className={styles.close}></div>
  </div></>

const LoadingDots = () => {
  const [dots, setDots] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setDots(prev => {
        if (prev.length === 3)
          return ""
        return prev + "."
      })
    }, 500)
  }, [dots])
  return <span>{dots}</span>
}

const LoadingScreen = () => {
  return <section
    style={{
      position: "fixed",
      inset: 0,
      background: `rgba(0, 0, 0, 0.85) url(${yorhaLogo}) center center no-repeat`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: "white",
      padding: "2% 4% 4% 4%"
    }}
  >
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        alignItems: "baseline"
      }}>
        <h1>LOADING </h1>
        <p> - CHECKING SYSTEM</p>
        <LoadingDots />
      </div>
      <SpinLoadginIcon />
    </header>
  </section >
}

function App() {
  return (
    <div className={styles.App}>
      {/* <NavbarModule/>
        <hr/>
        <div className={styles.dottedspaced}/>
        <RoutesPages/>
         */}
      <LoadingScreen />
    </div>
  );
}

export default App;
