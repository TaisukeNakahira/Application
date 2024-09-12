import { useCallback, useEffect, useState } from "react";
import { db } from "../../../app/firebaseSettings";
import { doc, getDoc } from "firebase/firestore";

export type LocationType = {
  id: number;
  name: string;
  details: LocationDetailType[];
};

export type LocationDetailType = {
  id: number;
  locationId: number;
  title: string;
  imagePath: string;
  description: string;
};

const useLocationData = () => {
  const [locationData, setLocationData] = useState<LocationType>({
    id: Date.now(),
    name: "",
    details: []
  });

  // 場所名の編集
  const updateLocation = useCallback((name: string) => {
    setLocationData(prevState => ({
      ...prevState,
      name: name
    }));
  }, []);

  // 場所詳細データの編集
  const updateDetail = useCallback((updatedDetail: LocationDetailType) => {
    setLocationData(prevState => ({
      ...prevState,
      details: prevState.details.map(detail =>
        detail.id === updatedDetail.id ? { ...detail, ...updatedDetail } : detail
      )
    }));
  }, []);

  // 場所詳細データの追加
  const addDetail = useCallback((newDetail: LocationDetailType) => {
    newDetail.id = Date.now();

    setLocationData(prevState => ({
      ...prevState,
      details: [...prevState.details, newDetail]
    }));
  }, []);

  // 場所詳細データの削除
  const removeDetail = useCallback((detailId: number) => {
    setLocationData(prevState => ({
      ...prevState,
      details: prevState.details.filter(detail => detail.id !== detailId)
    }));
  }, []);

  // Firestoreからデータを取得する関数
  const fetchLocationData = useCallback(async () => {
    const docRef = doc(db, "locations", locationData.id.toString());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setLocationData(docSnap.data() as LocationType);
    } else {
      console.log("No such document!");
    }
  }, [locationData.id]);

  useEffect(() => {
    // 初期データ取得
    const fetchLocationData = useCallback(async () => {
      const docRef = doc(db, "locations", locationData.id.toString());
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setLocationData(docSnap.data() as LocationType);
      } else {
        console.log("No such document!");
      }
    }, [locationData.id]);

    fetchLocationData();
  }, []);

  return { locationData, fetchLocationData, updateLocation, updateDetail, addDetail, removeDetail };
}

export default useLocationData;