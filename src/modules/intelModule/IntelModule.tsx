import React from "react";
import { Outlet, useParams } from "react-router-dom"; // Changed import
import { Bar, DropDown, Tab, YorhaNavLink } from "../../components";
import { getPortfolioIntelData } from "../../utils/mockData/portfolioIntelData";
import styles from './IntelModule.module.scss'

export const IntelModule = () => {

  let params = useParams(); // Changed to useParams

  let intellist = getPortfolioIntelData();

  // Filter based on IntelType from URL parameter
  const filteredCategory = intellist.filter((category) => {
    let filter = params.type; // Get type from useParams
    if (!filter) return false; // Don't show anything if no type
    return category.IntelType === filter;
  });

  const currentCategory = filteredCategory.length > 0 ? filteredCategory[0] : null;

  // Map direct data entries
  const first = currentCategory ? currentCategory.data.map((item) => (
    <YorhaNavLink variant="transparent" to={item.id.toString()} text={item.title} key={item.id}/>
  )) : [];
  
  // Map nested data entries
  const second = currentCategory ? currentCategory.nestedData.map((evenmore) => (
    <DropDown 
      key={evenmore.id}
      Title={evenmore.title} 
      Content={
        evenmore.dropDownData.map((yeah) => (
          <div key={yeah.id} className={styles.dropdownChild}><YorhaNavLink variant="transparent" to={yeah.id.toString()} text={yeah.title}/></div>
        ))
      }
    />
  )) : [];

  const third = first.concat(second);

  return (
    <div className={styles.IntelModule}>
      <div className={styles.IntelModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          className={styles.TabContent}
          content={
            third.length > 0 ? third : <p>Select a category.</p>
          }
        />
      </div>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    </div>
  )
}