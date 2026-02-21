import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { YorhaNavLink } from "../components";
import StatusModule from "../modules/statusModule";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { SubTitle } from "../utils/ParamAsSubTitle";

let ItemsLists = [
  {
    Link:"/items/all/default",
    Text:"All Toolkit",
    type:"",
  },
  {
    Link:"/items/frameworks/default",
    Text:"Frameworks",
    type:"frameworks",
  },
  {
    Link:"/items/enhancement/default",
    Text:"Enhancements",
    type:"enhancement",
  },
  {
    Link:"/items/support/default",
    Text:"Tactical Support",
    type:"support",
  },
  {
    Link:"/items/materials/default",
    Text:"Data Persistence",
    type:"materials",
  },
  {
    Link:"/items/key/default",
    Text:"Achievement Logs",
    type:"key",
  },
  {
    Link:"/items/fish/default",
    Text:"Daily Catch (Hobbies)",
    type:"fish",
  }
]

export const Items = () => {

  const param = useParams();
  const currentType = param.type;

  const FooterText = () => {
    if(!currentType || currentType === "all"){
      return "all toolkit components";
    }else if(currentType === 'materials' ){
      return "data persistence units"
    }else if(currentType === 'fish' ){
      return "recreation data"
    }else{
      return `${currentType} modules`
    }
  }

  const SubTitleLabel = () => {
    if(!currentType || currentType === "all"){
      return "all"
    }else
      return currentType
  }

  return(
    <PagesTemplate
      title={`ITEMS`}
      subtitle={SubTitle(SubTitleLabel(), "Items")}
      footer={`View all ${FooterText()} currently in operational inventory.`}
      child={
        <PagesChildTemplate
          LeftContent={
            <>
              {ItemsLists.map((item)=>(
                <YorhaNavLink key={item.Link} to={item.Link} text={item.Text}/>
              ))}
            </>
          }
          Outlet={<Outlet/>}
          RightContent={
            <StatusModule/>
          }
        />
      }
    />
  )
}