import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Strip, Widget} from "../../components";
import { getTechEntryById } from "../../utils/mockData/TechStackData"; // New import
import styles from "./WeaponsModule.module.scss"; // Assuming styles are still relevant

export const ActiveWeaponsModule = () => {
  const params = useParams();
  const [techEntry, setTechEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechEntry = async () => {
      setLoading(true);
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
    return <p>Technology not found.</p>;
  }

  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Widget 
        icon={false} // Assuming no icon for tech, or can be adapted
        title={techEntry.name}
        lvl={`Level: ${techEntry.level}`} // Display level
        content={
          <div className={styles.WeaponContainer}> {/* Reusing WeaponContainer styles */}
            {techEntry.image && ( // Display image if available
              <div className={styles.image}>
                <img src={techEntry.image} alt={techEntry.name} />
              </div>
            )}
            <div className={styles.descriptionContainer}>
              <span>Years of experience: {techEntry.yearsOfExperience}</span>
              <Strip/>
              {techEntry.description.map((line, index) => (
                <span key={index}>{line}<br/></span> // Display description lines
              ))}
            </div>
          </div>
        }
      />
    </div>
  )
}