import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SimpleBar, Widget, ScrollElement } from "../../components";
import { getItemsId } from "../../utils/mockData/ItemsMockData";
import styles from './ItemsModule.module.scss';

export const ActiveItemsModule = () => {
  const params = useParams();
  const [imgError, setImgError] = useState(false);
  const item = getItemsId(parseInt(params.itemid || "0", 10));

  useEffect(() => {
    setImgError(false); // Reset on item change
  }, [params.itemid]);

  if (!item) {
    return null;
  }

  return(
    <Widget
      dark
      icon={false}
      title={item.name}
      content={
        <div className={styles.activeItemsModule} >
          <ScrollElement
            content={
              <div className={styles.scrollContent}>
                <div className={styles.image}>
                  {item.image && !imgError ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      onError={() => setImgError(true)} 
                    />
                  ) : (
                    <span>NO VISUAL DATA AVAILABLE</span>
                  )}
                </div>
                
                <div className={styles.content}>
                  <div className={styles.desc}>
                    {Array.isArray(item.description) ? 
                      item.description.map((line, i) => <p key={i}>{line}</p>) : 
                      <p>{item.description}</p>
                    }
                  </div>
                  
                  <SimpleBar/>
                  
                  <div className={styles.quantity}>
                    Module Efficiency: {item.quantity}%
                  </div>
                </div>
              </div>
            }
          />
        </div>
      }
    />
  )
}
