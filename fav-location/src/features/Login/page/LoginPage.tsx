import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigation = useNavigate();

  function handleLoginButtonClick() {
    navigation('/list');
  }

  return (
    <>
      <h1>ログイン</h1>
      <Button onClick={handleLoginButtonClick}>ログイン</Button>
    </>
  )
};

export default LoginPage;

