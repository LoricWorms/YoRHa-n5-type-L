import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScrollElement, Tab, Widget } from "../../components";
import { getPortfolioIntelEntry } from "../../utils/mockData/portfolioIntelData"; // Updated import
import styles from './IntelModule.module.scss'

export const ActiveIntelModule = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntelEntry = async () => {
      setLoading(true);
      // Ensure intelid is a number and paramType is available
      if (params.intelid && params.type) {
        const fetchedEntry = await getPortfolioIntelEntry(params.type, parseInt(params.intelid));
        setData(fetchedEntry);
      } else {
        setData(null); // Clear data if no valid params
      }
      setLoading(false);
    };

    fetchIntelEntry();
  }, [params.intelid, params.type]); // Depend on intelid and type params

  if (loading) {
    return <p>Scanning for Intel data...</p>;
  }

  if (!data) {
    return <p>Intel entry not found.</p>;
  }

  return(
    <Widget
      dark={true}
      title={data.title}
      content={
        <Tab content={
            <div className={styles.ActiveIntelContent}>
              {data.image && ( // Basic image handling
                <div className={styles.imageParent}>
                  <div className={styles.image}>
                    <img src={data.image} alt={data.title} />
                  </div>
                </div>
              )}
              <ScrollElement
                content={
                  <div className={styles.content}>
                    {data.content.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                    {data.descriptions && <p>{data.descriptions}</p>} {/* Render descriptions if available */}
                  </div>
                }
              />
            </div>
        }/>
      }
    />
  )
}