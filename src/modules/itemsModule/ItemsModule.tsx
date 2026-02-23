import React from "react";
import styles from "./ItemsModule.module.scss";
import { YorhaNavLink } from "../../components";
import { getItemsData } from "../../utils/mockData/ItemsMockData";
import { Outlet, useParams, useLocation } from "react-router-dom";

export const ItemsModule = () => {

  let params = useParams();
  let ItemsLists = getItemsData();
  let location = useLocation()

  return(
    <div className={styles.ItemsModule}>
      <div className={styles.ItemsModuleContainer}>
        <div className={styles.ItemTypeList}>
          {ItemsLists
          .filter((item)=>{
            let filter = params.type;
            if(!filter || filter === "all") return true;
            return item.type.toLowerCase() === filter.toLowerCase();
          })
          .map((item)=>(
            <YorhaNavLink variant="transparent" key={item.id} to={`/items/${item.type}/${item.id}` + location.search} text={item.name}/>
          ))}
        </div>
      </div>
      <div className={styles.Outlet}>
        <Outlet/>
      </div>
    </div>
  )
}
