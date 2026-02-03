import React, { useState, useEffect } from "react";
import { Bar } from "@kaineee/nier-automata-ui-library";
import {Outlet,
  useLocation,
  useSearchParams 
} from "react-router-dom";
import { Tab, YorhaNavLink } from "../../components";
import { getProjectsAsQuests } from "../../utils/githubApi"; // Changed import
import styles from './QuestModule.module.scss';

export const QuestsModule = () => {
  let [searchParams] = useSearchParams();
  const [projects, setProjects] = useState([]); // Added state
  const [loading, setLoading] = useState(true); // Added state

  let location = useLocation();

  useEffect(() => { // Added useEffect for async data fetching
    const fetchProjects = async () => {
      setLoading(true);
      const fetchedProjects = await getProjectsAsQuests("LoricWorms"); // Fetch from githubApi
      setProjects(fetchedProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return(
    <div className={styles.ActiveQuests}>
      <div className={styles.ActiveQuestsContainer}>
        <div>
          <Bar/>
        </div>
       <Tab content={
        <div className={styles.QuestList}>
          {loading ? ( // Added loading state
            <p>Scanning for mission signals...</p> // Thematic loading message
          ) : (
            projects // Use projects state
              .filter((project) => { // Original filter logic
                let filter = searchParams.get("status");
                if (!filter) return true;
                let name = project.status.toLowerCase();
                return name.startsWith(filter);
              })
              .map((item)=>(
                  <YorhaNavLink variant="transparent"
                  to={`/quest/${item.status}/${item.link}`+ location.search} // Original link generation
                  key={item.title} text={item.title}/>
              ))
          )}
        </div>
       }/>
      </div>
      <div className={styles.outletChild}>
        <Outlet/>
      </div>
    </div>
  )
}