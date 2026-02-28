import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScrollElement, Tab, Widget, SimpleBar } from "../../components";
import { getPortfolioIntelEntry } from "../../utils/mockData/portfolioIntelData";
import styles from './IntelModule.module.scss'

export const ActiveIntelModule = () => {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntelEntry = async () => {
      setLoading(true);
      if (params.intelid && params.type) {
        const fetchedEntry = await getPortfolioIntelEntry(params.type, parseInt(params.intelid));
        setData(fetchedEntry);
      } else {
        setData(null);
      }
      setLoading(false);
    };

    fetchIntelEntry();
  }, [params.intelid, params.type]);

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
              <ScrollElement
                content={
                  <div className={styles.content}>
                    {data.content.map((item: string, index: number) => (
                      item === "" ? <br key={index}/> : <p key={index}>{item}</p>
                    ))}
                    {data.descriptions && (
                      <>
                        <br/>
                        <SimpleBar/>
                        <p className={styles.loreNote}><i>{data.descriptions}</i></p>
                      </>
                    )}
                  </div>
                }
              />
            </div>
        }/>
      }
    />
  )
}
