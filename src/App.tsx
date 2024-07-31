import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import yorhaLogo from "./assets/yorha-opacity-logo.png"
import { LoadingDots, Typer } from './components';

const SpinLoadginIcon = () => <>
  <div className={styles.spinContainer}>
    <div className={styles.inner}></div>
    <div className={styles.spin}></div>
    <div className={styles.outter}></div>
    <div className={styles.close}></div>
  </div></>

const LoadingLogs = ({ removeSpeed = 1000 }) => {
  const [loadingCompleted, setLoadingCompleted] = useState(false)

  const messages: string[] = [
    "Commencing System Check",
    "Memory Unit: Green",
    "Initializing Tactics Log",
    "Loading Geographic Data",
    "Vitals: Green",
    "Remaining MP: 100%",
    "Black Box Temperature: Normal",
    "Black Box Internal Pressure: Normal",
    "Activating IFF",
    "Activating FCS",
    "Initializing Pod Connection",
    "Launching DBU Setup",
    "Activating Inertia Control System",
    "Activating Environmental Sensors",
    "Equipment Authentication: Complete",
    "Equipment Status: Green",
    "All Systems Green",
    "Combat Preparations Complete"
  ];

  const [waitingListRender, setWaitingListRender] = useState([messages[0]])

  const updateRenderList = (i: number) => {
    if (!messages[i + 1]) return
    setWaitingListRender(prev => [...prev, messages[i + 1]])
  }

  const removeComponent = () => {
    if (waitingListRender.length < messages.length)
      return

    setTimeout(() => {
      setLoadingCompleted(true)
    }, removeSpeed)
  }

  useEffect(removeComponent, [waitingListRender])

  if (loadingCompleted) return <></>

  return <>
    {waitingListRender.map((message, i) => (
      <Typer key={message} callBack={() => updateRenderList(i)} receivedText={message} />
    ))}
  </>
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
    <LoadingLogs removeSpeed={10000} />
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
