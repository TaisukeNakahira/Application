import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LocationListPage = () => {
  const navigate = useNavigate();

  function handleRegisterButtonClick() {
    navigate("/register");
  }

  return (
    <>
      <h1>リスト</h1>
      <Button variant="contained" onClick={handleRegisterButtonClick}>登録</Button>
    </>
  )
};

export default LocationListPage;