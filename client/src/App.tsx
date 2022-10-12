import { useCallback, useState } from "react";
import FinishedGaming from "./stages/finishedGaming";
import InGaming from "./stages/inGaming";
import InQueue from "./stages/inQueue";
import PreGaming from "./stages/preGaming";

type StageProps = "pre_gaming" | "in_gaming" | "in_queue" | "finished_gaming";

const MOCK_USERS = [
  {
    id: "1",
    name: "1",
  },
  {
    id: "2",
    name: "2",
  },
  {
    id: "3",
    name: "3",
  },
  {
    id: "4",
    name: "4",
  },
  {
    id: "5",
    name: "5",
  },
  {
    id: "6",
    name: "6",
  },
];

const App = () => {
  const [stage, setStage] = useState<StageProps>("pre_gaming");

  const changeStage = useCallback((stageName: StageProps) => {
    setStage(stageName);
  }, []);

  return (
    <>
      {stage === "pre_gaming" && (
        <PreGaming nextStage={() => changeStage("in_queue")} />
      )}

      {stage === "in_queue" && (
        <InQueue
          users={MOCK_USERS}
          nextStage={() => changeStage("in_gaming")}
        />
      )}

      {stage === "in_gaming" && <InGaming />}

      {stage === "finished_gaming" && <FinishedGaming />}
    </>
  );
};

export default App;
