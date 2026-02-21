import React from "react";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { YorhaNavLink } from "../components";
import StatusModule from "../modules/statusModule";
import { Outlet } from "react-router-dom";

const IntelList = [
  {
    name: "Personal Profile",
    type:"profile",
  },
  {
    name:"Technical Skills",
    type:"skills",
  },
  {
    name:"Professional Experience",
    type:"experience",
  },
  {
    name:"Education & Certifications",
    type:"education",
  },
  {
    name:"Contact",
    type:"contact",
  }
]



export const Intel = () => {

  return(

    <PagesTemplate

      title="Intel"

      child={

        <PagesChildTemplate

                    LeftContent=
                        {IntelList.map((item)=>(<YorhaNavLink key={item.type} text={item.name} to={`/intel/${item.type}`} />
                        ))}

          Outlet={

            <Outlet/>

          }

          RightContent={

            <StatusModule/>

          }

        />

      }

      footer="View information about encountered units and foes"

    />

  )

}
