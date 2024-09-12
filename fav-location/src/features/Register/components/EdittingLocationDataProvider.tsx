import { createContext, useContext, ReactNode } from "react";
import useLocationData, { LocationDetailType, LocationType } from "../hooks/useLocationData";

// Contextの型定義
type LocationContextType = {
  locationData: LocationType;
  fetchLocationData: () => void;
  updateLocation: (name: string) => void;
  updateDetail: (updatedDetail: LocationDetailType) => void;
  addDetail: (newDetail: LocationDetailType) => void;
  removeDetail: (detailId: number) => void;
};

// Contextの作成
const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Providerコンポーネントの作成
export const LocationDataProvider = ({ children }: { children: ReactNode }) => {
  const {
    locationData,
    fetchLocationData,
    updateLocation,
    updateDetail,
    addDetail,
    removeDetail
  } = useLocationData();

  return (
    <LocationContext.Provider
      value={{
        locationData,
        fetchLocationData,
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