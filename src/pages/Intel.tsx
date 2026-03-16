import { Outlet, useParams } from "react-router-dom";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import PagesTemplate from "../templates/pagesTemplate";
import { YorhaNavLink } from "../components";
import StatusModule from "../modules/statusModule";

const IntelList = [
  { name: "Personal Profile",           type: "profile" },
  { name: "Technical Skills",           type: "skills" },
  { name: "Professional Experience",    type: "experience" },
  { name: "Education & Certifications", type: "education" },
  { name: "Contact",                    type: "contact" },
]

export const Intel = () => {
  const { intelid } = useParams();
  const showStatus = !intelid;

  return (
    <PagesTemplate
      title="INTEL"
      child={
        <PagesChildTemplate
          LeftContent={
            IntelList.map((item) => (
              <YorhaNavLink key={item.type} text={item.name} to={`/intel/${item.type}`} />
            ))
          }
          Outlet={<Outlet />}
          RightContent={showStatus ? <StatusModule /> : undefined}
        />
      }
      footer="View information about encountered units and foes"
    />
  )
}
