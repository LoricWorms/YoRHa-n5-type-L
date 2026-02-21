import React from "react";
import { Strip, Widget } from "../../components";
import styles from "./StatusModule.module.scss";

const StatusModule = () => {
  return(
    <Widget
      dark={true}
      icon={false}
      title={"System Status"}
      content={
        <div className={styles.StatusModule}>
          <div className={styles.StatusContainer}>
            <span style={{ fontWeight: 'bold', letterSpacing: '2px' }}>LORIC WORMS</span>
            <span>Lv: 03</span>
          </div>
          <Strip/>
          <div className={styles.StatusContainer}>
            <div className={styles.statusData}>
              <span>Repositories (R):</span>
              <span>Commits (C):</span>
              <span>System Pulse:</span>
            </div>
            <div className={styles.statusData}>
              <span>24</span>
              <span>1,240</span>
              <span style={{ color: '#8c8671' }}>OPERATIONAL</span>
            </div>
          </div>
          <Strip/>
          <div className={styles.StatusContainer}>
            <div className={styles.statusData}>
              <span>Frontend Prowess:</span>
              <span>Backend Logic:</span>
              <span>API Connectivity:</span>
              <span>System Stability:</span>
            </div>
            <div className={styles.statusData}>
              <span>95%</span>
              <span>88%</span>
              <span>92%</span>
              <span></span>
            </div>
            <div className={styles.statusData}>
              <span>+5</span>
              <span>+3</span>
              <span>+8</span>
              <span>94%</span>
            </div>
          </div>
          <Strip/>
          <div className={styles.footer}>
            <span style={{ color: '#57544a', fontSize: '0.8rem', letterSpacing: '2px' }}>BUNKER LINK: ACTIVE</span>
          </div>
        </div>
      }
    />
  )
}

export default StatusModule;
