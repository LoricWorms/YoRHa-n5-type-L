import React from "react";
import { Widget } from "../../components";
import styles from "./StatusModule.module.scss";

const StatusModule = () => {
  return(
    <Widget
      dark={true}
      icon={false}
      title={"UNIT_STATUS"}
      content={
        <div className={styles.StatusModule}>
          {/* Header: Identity */}
          <div className={styles.StatusContainer}>
            <span>LORIC WORMS [DEV]</span>
            <span>Lv: 03</span>
          </div>

          <div className={styles.Divider} />

          {/* Section 1: Resources & Experience */}
          <div className={styles.StatusContainer}>
            <div className={styles.statusData}>
              <span>Data Units (R):</span>
              <span>Neural Net (EXP):</span>
              <span>Uptime (HP):</span>
            </div>
            <div className={styles.statusData}>
              <span>24</span>
              <span>12,450</span>
              <span>100% / 100%</span>
            </div>
          </div>

          <div className={styles.Divider} />

          {/* Section 2: Proficiencies (Combat Stats) */}
          <div className={styles.StatusContainer}>
            <div className={styles.statusData}>
              <span>Front-end Logic: </span>
              <span>Back-end Core: </span>
              <span>API Pulse: </span>
              <span>System Stability: </span>
            </div>
            <div className={styles.statusData}>
              <span>2,338 +</span>
              <span>1,876 +</span>
              <span>150 +</span>
              <span></span>
            </div>
            <div className={styles.statusData}>
              <span>234</span>
              <span>188</span>
              <span>21</span>
              <span>940</span>
            </div>
          </div>

          <div className={styles.Divider} />

          {/* Footer: System Message */}
          <div className={styles.footer}>
            BUNKER_LINK: OPERATIONAL
          </div>
        </div>
      }
    />
  )
}

export default StatusModule;
