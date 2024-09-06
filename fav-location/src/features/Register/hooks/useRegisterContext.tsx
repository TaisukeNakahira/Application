import { useContext } from "react";
import { RegisterDataContext, SetRegisterDataContext } from "../components/RegisterDataProvider";

// カスタムHook
export const useRegisterDataContext = () => {
  const registerDataContext = useContext(RegisterDataContext);
  const setRegisterDataContext = useContext(SetRegisterDataContext);
  if (!registerDataContext || !setRegisterDataContext) {
    throw new Error('useRegisterContext must be used within a RegisterDataProvider');
  }
  return { registerDataContext, setRegisterDataContext };
}