import React, { useState, useEffect } from "react";
import {Outlet,
  useLocation,
  useSearchParams,
  useNavigate,
  useParams 
} from "react-router-dom";
import { Tab, YorhaNavLink, Bar } from "../../components";
import { getProjectsAsQuests } from "../../utils/githubApi";
import styles from './QuestModule.module.scss';

export const QuestsModule = () => {
  let [searchParams] = useSearchParams();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { questid, statusType } = useParams();

  let location = useLocation();

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const fetchedProjects = await getProjectsAsQuests("LoricWorms");
      setProjects(fetchedProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  // Redirection automatique vers la première quête
  useEffect(() => {
    if (!loading && projects.length > 0 && questid === "default") {
      const filtered = projects.filter((project) => {
        let filter = searchParams.get("status");
        if (!filter) return true;
        let name = project.status.toLowerCase();
        return name.startsWith(filter);
      });

      if (filtered.length > 0) {
        navigate(`/quest/${statusType}/${filtered[0].link}${location.search}`, { replace: true });
      }
    }
  }, [loading, projects, questid, navigate, statusType, searchParams, location.search]);

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