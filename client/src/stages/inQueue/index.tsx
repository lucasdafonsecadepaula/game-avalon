import { CircularProgress } from "@mui/material";
import useCountDown from "../../hooks/useCountDown";

type InGamingProps = {
  users: { name: string; id: string }[];
  nextStage: () => void;
};

function InGaming({ users, nextStage }: InGamingProps) {
  const { count, start } = useCountDown(() => {
    nextStage();
  }, 5);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h3>Jogadores na fila:</h3>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>

      <div style={{ marginTop: "24px" }}>
        Aguardando o jogo começar...
        <CircularProgress />
        <button onClick={start}>test</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default InGaming;
