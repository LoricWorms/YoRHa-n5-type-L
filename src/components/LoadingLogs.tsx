import { useEffect, useState } from "react";
import { Typer } from "./Typer";

/*
TODO: Fix fonts
TODO: Add props descriptions
TODO: Add messages to mockep folder
*/

type LoadingLogsProps = { callBack: () => any };

export const LoadingLogs = ({ callBack }: LoadingLogsProps) => {
  const messages: string[] = [
    "Commencing System Check",
    "Memory Unit: Green",
    "Initializing Tactics Log",
    "Loading Geographic Data",
    "Vitals: Green",
    "Remaining MP: 100%",
    "Black Box Temperature: Normal",
    "Black Box Internal Pressure: Normal",
    "Activating IFF",
    "Activating FCS",
    "Initializing Pod Connection",
    "Launching DBU Setup",
    "Activating Inertia Control System",
    "Activating Environmental Sensors",
    "Equipment Authentication: Complete",
    "Equipment Status: Green",
    "All Systems Green",
    "Combat Preparations Complete",
  ];

  const [waitingListRender, setWaitingListRender] = useState([messages[0]]);

  const updateRenderList = (i: number) => {
    if (!messages[i + 1]) return;
    setWaitingListRender((prev) => [...prev, messages[i + 1]]);
  };

  const removeComponent = () => {
    if (waitingListRender.length < messages.length) return;

    callBack();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(removeComponent, [waitingListRender]);

  return (
    <>
      {waitingListRender.map((message, i) => (
        <Typer
          key={message}
          callBack={() => updateRenderList(i)}
          receivedText={message}
        />
      ))}
    </>
  );
};
