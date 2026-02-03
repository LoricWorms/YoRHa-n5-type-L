import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { ScrollElement, Strip, Widget } from "../../components";
import { getProjectAsQuest } from "../../utils/githubApi";
import styles from './QuestModule.module.scss';

export const ActiveQuestsModule = () => { 
  var params = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      // Only fetch if questid is not 'default'
      if (params.questid && params.questid !== "default") {
        const fetchedProject = await getProjectAsQuest("LoricWorms", params.questid);
        setProject(fetchedProject);
      } else {
        setProject(null); // Clear project if 'default' or no questid
      }
      setLoading(false);
    };

    fetchProject();
  }, [params.questid]);

  if (loading) {
    return <p>Loading project details...</p>;
  }

  // If no project selected (e.g., questid is 'default') or project not found, return null to show empty panel
  if (!project) {
    if (params.questid && params.questid !== "default") {
      return <p>Project not found.</p>;
    }
    return null; // Don't display anything if no project is explicitly selected
  }

  return(
    <div className={styles.ActiveQuestModuleParent}>
      <Widget
        title={project.title}
          content={
            <div className={styles.ActiveQuestModule}>
              <div className={styles.client}>Client: {project.client}</div>
                <div className={styles.content}>
                  <ScrollElement
                    content={<div className={styles.questDescription}>
                      <div className={styles.desc}>
                        {project.description.map((item)=>(
                          <div key={item}>{item}<br/></div>
                        ))}
                        <br/>
                        {project.language && <div>Main language: {project.language}</div>}
                        <br/>
                        {project.html_url && <div><a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></div>}
                        {project.homepage && <div><a href={project.homepage} target="_blank" rel="noopener noreferrer">View Live Demo</a></div>}
                      </div>
                      <br/>
                      <Strip/>
                      <div className={styles.footerDesc}>
                        <p> {project.footdescription}</p>
                      </div>
                    </div>}
                  />
                </div>
            </div>
          }
        />
    </div>
  );
}