import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Tab, Widget, Bar } from "../../components";
import { getTechEntriesByCategory, getTechStackCategories } from "../../utils/mockData/TechStackData";
import styles from "./WeaponsModule.module.scss"; 
import { YorhaNavLink } from "../../components"; 

export const WeaponsListModule = () => {
  const params = useParams(); 
  const currentCategory = params.category; 

  const technologies = currentCategory ? getTechEntriesByCategory(currentCategory) : [];

  const TitleChecker = () => {
    if (!currentCategory) {
      return "Select a Category";
    }
    const categoryObject = getTechStackCategories().find(cat => cat.category === currentCategory);
    return categoryObject ? categoryObject.name : "Unknown Category"; 
  };

  return(
    <div className={styles.WeaponsListContainer}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', height: '100%', width: '100%' }}>
        <Bar />
        <Widget title={TitleChecker()}
          content={
            <div className={styles.WeaponsTypeContainer}>
              <Tab
                content={
                  <div className={styles.weaponList}>
                    {technologies.length > 0 ? (
                      technologies.map((item) => (
                        <YorhaNavLink key={item.id} variant="transparent" to={item.id.toString()} text={item.name} /> 
                      ))
                    ) : (
                      <p>No technologies found for this category.</p>
                    )}
                  </div>
                }
              />
            </div>
          }
        />
      </div>
      <div className={styles.RightContainer}>
        <Outlet/>
      </div>
    </div>
  )
}