import React from "react";
import {Bar, Button} from '@kaineee/nier-automata-ui-library';
import styles from './Map.module.scss';
import PagesTemplate from "../templates/pagesTemplate";

export const Map = () => {
  return(
    <PagesTemplate
      title="MAP"
      child={
        <div className={styles.ContentContainer}>
        <div className={styles.LeftPanel}>
            <div className={styles.LeftPanelChild}>
              <div className={styles.Bar}>
                <Bar/>
              </div>
              <div className={styles.Button}>
                <Button disabled={true} text="Remote Link"/>
                <Button disabled={true} text="Deployment Mode"/>
                <Button disabled={true} text="Operational Area"/>
              </div>
            </div>
            <div className={styles.LeftPanelFooter}>
              {/* footer panel  */}
            </div>
        </div>
        <div className={styles.RightPanel}>
          <div className={styles.MapPanel}>
            <h1>
              [DATA CLASSIFIED BY THE COUNCIL OF HUMANITY]
            </h1>
          </div>
        </div>
      </div>
      }
      footer="Satellite positioning: Transmission secure. Operational data synchronized."
    />
  )
}