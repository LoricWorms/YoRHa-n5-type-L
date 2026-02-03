import { YorhaNavLink } from "../components";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { getTechStackCategories } from "../utils/mockData/TechStackData";
import { SubTitle } from "../utils/ParamAsSubTitle"; // Import SubTitle

export const Weapons = () => {
  const param = useParams();

  // Fetch tech stack categories
  const techCategories = getTechStackCategories();

  // Function to determine the subtitle type
  const TypeCheckWeapons = () => {
    // If a category param exists, return it, otherwise return undefined
    return param.category;
  };

  // Function to determine the footer text
  const ParamCheckWeapons = () => {
    if (param.category) {
      return `current technologies related to ${param.category}`;
    } else {
      return "your complete arsenal of technical skills";
    }
  };

  return (
    <PagesTemplate
      title="ARSENAL"
      subtitle={SubTitle(TypeCheckWeapons(), "Tech Stack")} // Dynamic subtitle
      child={
        <PagesChildTemplate
          lessRightSpace={true}
          extraMidSpace={true}
          LeftContent={
            <>
              {techCategories.map((category) => (
                <YorhaNavLink
                  variant="button"
                  key={category.category}
                  to={`/weapons/${category.category}`}
                  text={category.name}
                />
              ))}
            </>
          }
          MiddleContent={
            <Outlet />
          }
          RightContent={
            <></>
          }
        />
      }
      footer={`View ${ParamCheckWeapons()}.`} // Dynamic footer
    />
  );
};