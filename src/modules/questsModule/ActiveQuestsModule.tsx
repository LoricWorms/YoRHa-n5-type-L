import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { ScrollElement, SimpleBar, Widget } from "../../components";
import { getProjectAsQuest } from "../../utils/githubApi";
import styles from './QuestModule.module.scss';

const LoreLink = ({ href, text }: { href: string; text: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.loreLink}>
    <div className={styles.linkIcon} />
    <span>{text}</span>
  </a>
);

export const ActiveQuestsModule = () => { 
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      if (params.questid && params.questid !== "default") {
        const fetchedProject = await getProjectAsQuest("CrOliX-AltF4", params.questid);
        setProject(fetchedProject);
      } else {
        setProject(null);
      }
      setLoading(false);
    };

    fetchProject();
  }, [params.questid]);

  if (loading) {
    return <p>Syncing with Bunker data...</p>;
  }

  if (!project) {
    if (params.questid && params.questid !== "default") {
      return <p>Signal lost: Project not found in archive.</p>;
    }
    return null;
  }

  return(
    <div className={styles.ActiveQuestModuleParent}>
      <Widget
        title={project.title}
          content={
            <div className={styles.ActiveQuestModule}>
              <div className={styles.authority}>Authority/Source: {project.client}</div>
                <div className={styles.content}>
                  <ScrollElement
                    content={<div className={styles.questDescription}>
                      <div className={styles.desc}>
                        {project.description.map((item: string, index: number)=>(
                          <div key={index}>{item}<br/></div>
                        ))}
                        <br/>
                        {project.language && <div>Primary Logic: {project.language}</div>}
                      </div>
                      
                      {(project.html_url || project.homepage) && (
                        <div className={styles.linkContainer}>
                          {project.html_url && <LoreLink href={project.html_url} text="ACCESS REPOSITORY" />}
                          {project.homepage && <LoreLink href={project.homepage} text="EXECUTE LIVE DEMO" />}
                        </div>
                      )}

                      <SimpleBar/>
                      <div className={styles.footerDesc}>
                        <p>{project.footdescription}</p>
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
