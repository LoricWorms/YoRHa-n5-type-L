import { YorhaNavLink } from "../components";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { getTechStackCategories } from "../utils/mockData/TechStackData"; // New import

export const Weapons = () => {
  const param = useParams(); // Keep useParams if needed for other parts of the page or future expansion

  // Fetch tech stack categories
  const techCategories = getTechStackCategories();

  return(
    <PagesTemplate
      title="ARSENAL" // Updated title
      subtitle="- Tech Stack" // Static subtitle
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
                  to={`/weapons/${category.category}`} // Link to /weapons/:category
                  text={category.name} // Display category name
                />
              ))}
            </>
          }
          MiddleContent={
            <Outlet/>
          }
          RightContent={
            <></>
          }
        />
      }
      footer="View your complete arsenal of technical skills." // Updated footer
    />
  )
}