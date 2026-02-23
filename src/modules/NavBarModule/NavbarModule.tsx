import React from "react";
import { Bar, Strip } from "../../components";
import styles from './Navbar.module.scss';
import {RoutesConfig } from "../../routes/Routes";
import { YorhaNavLink } from "../../components/YorhaNavLink";
import { Outlet } from "react-router-dom";

export const NavbarModule = () =>{
  return(
    <div className={styles.NavBarModule}>
      <div className={styles.navContainer}>
        <div className={styles.bar}>
          <Bar/>
        </div>
        {RoutesConfig.RoutesConfigs.map((item)=>{
          return(
          <div key={item.Text} className={styles.nav}>
            <YorhaNavLink variant="nav" key={item.Text} to={`/${item.Link}`} text={item.Text}/>
          </div>
          )
        })}
      </div>
      <Strip />
      <div className={styles.outletContainer}>
        <Outlet/>
      </div>
    </div>
  )
}