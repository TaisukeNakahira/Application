import { createContext, useState } from "react";
import React from "react";

export type ImageAndDescription = {
  image: File | null;
  description: string;
}

export type RegisterData = {
  datas: { [key: number]: ImageAndDescription }
}

// Context
export const RegisterDataContext = createContext({} as RegisterData);
export const SetRegisterDataContext = createContext((registerData: RegisterData) => {});

// Provider
type RegisterDataProviderProps = {
  children: React.ReactNode;
};
const RegisterDataProvider: React.FC<RegisterDataProviderProps> = ({children}) => {
  const [registerData, setRegisterData] = useState<RegisterData>({} as RegisterData);

  return (
    <RegisterDataContext.Provider value={registerData}>
      <SetRegisterDataContext.Provider value={setRegisterData}>
        {children}
      </SetRegisterDataContext.Provider>
    </RegisterDataContext.Provider>
  );
}

export default RegisterDataProvider;