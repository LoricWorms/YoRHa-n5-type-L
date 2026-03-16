import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { YorhaNavLink } from "../components";
import PagesTemplate from "../templates/pagesTemplate";
import { SubTitle } from "../utils/ParamAsSubTitle";
import PagesChildTemplate from "../templates/pagesChildTemplate";
import StatusModule from "../modules/statusModule";

const QuestList = [
  { Link: "/quest/active/default", Text: "Active Quests", type: "active" },
  { Link: "/quest/all/default",    Text: "All Quests",    type: "" },
  { Link: "/quest/cleared/default", Text: "Cleared Quests", type: "cleared" },
]

export const Quest = () => {
  const param = useParams();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  // Hide Status panel when a specific quest detail is open
  const showStatus = !param.questid || param.questid === "default";

  const ParamCheck = () => {
    if (status === "active") return "quests currently in progress";
    if (status === "cleared") return "completed quests";
    if (status === "") return "all accepted quests";
    return "all quests";
  }

  const TypeCheck = () => {
    if (status === "") return "all";
    return param.statusType;
  }

  return (
    <PagesTemplate
      title="QUESTS"
      subtitle={SubTitle(TypeCheck(), "Quest")}
      footer={`View ${ParamCheck()}.`}
      child={
        <PagesChildTemplate
          LeftContent={
            <div style={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {QuestList.map((item) => (
                <YorhaNavLink key={item.Link} to={item.Link} filter={item.type} filterType="status" text={item.Text} />
              ))}
            </div>
          }
          Outlet={<Outlet />}
          RightContent={showStatus ? <StatusModule /> : undefined}
        />
      }
    />
  )
}
