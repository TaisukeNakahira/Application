import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Button variant="contained" onClick={handleClick}>戻る</Button>
  )
}

export default ReturnButton;