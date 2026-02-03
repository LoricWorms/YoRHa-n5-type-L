import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Tab, Widget } from "../../components";
import { getTechEntriesByCategory, getTechStackCategories } from "../../utils/mockData/TechStackData";
import styles from "./WeaponsModule.module.scss"; // Assuming styles are still relevant
import { YorhaNavLink } from "../../components"; // Added missing import

export const WeaponsListModule = () => {
  const params = useParams(); // Using params to get category
  const currentCategory = params.category; // This is the category id (e.g., "frontend")

  const technologies = currentCategory ? getTechEntriesByCategory(currentCategory) : [];

  const TitleChecker = () => {
    if (!currentCategory) {
      return "Select a Category";
    }
    const categoryObject = getTechStackCategories().find(cat => cat.category === currentCategory);
    return categoryObject ? categoryObject.name : "Unknown Category"; // Display full category name
  };

  return(
    <div className={styles.WeaponsListContainer}>
      <Widget title={TitleChecker()}
        content={
          <div className={styles.WeaponsTypeContainer}>
            <Tab
              content={
                <div className={styles.weaponList}>
                  {technologies.length > 0 ? (
                    technologies.map((item) => (
                      <YorhaNavLink key={item.id} variant="transparent" to={item.id.toString()} text={item.name} /> // Link to /weapons/:category/:techid
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
      <div className={styles.RightContainer}>
        <Outlet/>
      </div>
    </div>
  )
}