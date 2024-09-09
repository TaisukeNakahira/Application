import { createContext, useContext, ReactNode } from "react";
import useEdittingLocationData, { LocationDetail, Location } from "../hooks/useEdittingLocationData";

// Contextの型定義
type LocationContextType = {
  edittingLocationData: Location;
  updateLocation: (name: string) => void;
  updateDetail: (updatedDetail: LocationDetail) => void;
  addDetail: (newDetail: LocationDetail) => void;
  removeDetail: (detailId: number) => void;
};

// Contextの作成
const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Providerコンポーネントの作成
export const EdittingLocationDataProvider = ({ children }: { children: ReactNode }) => {
  const {
    edittingLocationData,
    updateLocation,
    updateDetail,
    addDetail,
    removeDetail
  } = useEdittingLocationData();

  return (
    <LocationContext.Provider
      value={{
        edittingLocationData,
        updateLocation,
        updateDetail,
        addDetail,
        removeDetail
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// Contextを使うためのカスタムフック
export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocationContext must be used within a LocationProvider");
  }
  return context;
};