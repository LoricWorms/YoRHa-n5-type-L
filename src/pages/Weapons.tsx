import { YorhaNavLink } from "../components";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { getTechStackCategories } from "../utils/mockData/TechStackData";
import { SubTitle } from "../utils/ParamAsSubTitle";
import StatusModule from "../modules/statusModule";

export const Weapons = () => {
  const param = useParams();
  const currentCategory = param.category;

  // Fetch tech stack categories
  const techCategories = getTechStackCategories();

  // Function to determine the subtitle type
  const TypeCheckWeapons = () => {
    return currentCategory;
  };

  // Function to determine the footer text
  const ParamCheckWeapons = () => {
    if (currentCategory) {
      return `current technologies related to ${currentCategory}`;
    } else {
      return "your complete arsenal of technical skills";
    }
  };

  return (
    <PagesTemplate
      title="WEAPONS"
      subtitle={SubTitle(TypeCheckWeapons(), "Tech Stack")}
      child={
        <PagesChildTemplate
          lessRightSpace={currentCategory ? true : false}
          extraMidSpace={currentCategory ? true : false}
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
            !currentCategory && <StatusModule/>
          }
        />
      }
      footer={`View ${ParamCheckWeapons()}.`}
    />
  );
};