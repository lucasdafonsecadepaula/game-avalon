import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

type PreGamingProps = {
  nextStage: () => void;
};

function PreGaming({ nextStage }: PreGamingProps) {
  const { changeUserProps } = useContext(UserContext);
  const [formData, setFormData] = useState({
    clientName: "",
    clientType: "player",
  });

  const onChangeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, clientName: value }));
  };

  const onChangeSelect = ({ target: { value } }: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, clientType: value }));
  };

  const onClickButton = () => {
    changeUserProps({ name: formData.clientName, type: formData.clientType });
    nextStage();
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <TextField
        label="Filled"
        variant="filled"
        size="small"
        value={formData.clientName}
        onChange={onChangeInput}
      />
      <Select
        labelId="demo-simple-select-label"
        value={formData.clientType}
        label="Age"
        size="small"
        onChange={onChangeSelect}
      >
        <MenuItem value={"player"}>Jogador</MenuItem>
        <MenuItem value={"machine"}>Máquina</MenuItem>
      </Select>
      <Button variant="contained" onClick={onClickButton}>
        Entrar
      </Button>
    </div>
  );
}

export default PreGaming;
