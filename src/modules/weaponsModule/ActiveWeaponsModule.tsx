import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SimpleBar, Widget, ScrollElement } from "../../components";
import { getTechEntryById } from "../../utils/mockData/TechStackData";
import styles from "./WeaponsModule.module.scss";

export const ActiveWeaponsModule = () => {
  const params = useParams();
  const [techEntry, setTechEntry] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const fetchTechEntry = async () => {
      setLoading(true);
      setImgError(false); // Reset error state on new entry
      if (params.category && params.techid) {
        const fetchedEntry = getTechEntryById(params.category, parseInt(params.techid, 10));
        setTechEntry(fetchedEntry);
      } else {
        setTechEntry(null);
      }
      setLoading(false);
    };

    fetchTechEntry();
  }, [params.category, params.techid]);

  if (loading) {
    return <p>Analyzing technology data...</p>;
  }

  if (!techEntry) {
    return <p>Technology not found in archive.</p>;
  }

  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Widget 
          icon={false}
          title={techEntry.name}
          lvl={techEntry.level}
          content={
            <div className={styles.WeaponContainer}>
              <ScrollElement
                content={
                  <div className={styles.scrollContent}>
                    <div className={styles.image}>
                      {techEntry.image && !imgError ? (
                        <img 
                          src={techEntry.image} 
                          alt={techEntry.name} 
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <span style={{color: '#b4af9a', fontSize: '0.8rem', letterSpacing: '2px'}}>NO VISUAL DATA AVAILABLE</span>
                      )}
                    </div>
                    <div className={styles.descriptionContainer}>
                      <span className={styles.years}>Operational History: {techEntry.yearsOfExperience}</span>
                      <SimpleBar/>
                      <div className={styles.descriptionText}>
                        {techEntry.description.map((line: string, index: number) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          }
        />
    </div>
  )
}
