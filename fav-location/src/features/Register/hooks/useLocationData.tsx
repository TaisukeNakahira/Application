import { useCallback, useEffect, useState } from "react";
import { db } from "../../../app/firebaseSettings";
import { doc, getDoc } from "firebase/firestore";
import { LocationDetailType, LocationType } from "../../../util/LocationType";

const useLocationData = () => {
  const [locationData, setLocationData] = useState<LocationType>({
    id: '',
    title: '',
    details: [] as LocationDetailType[],
  });

  // 場所名の編集
  const updateLocation = useCallback((title: string) => {
    setLocationData(prevState => ({
      ...prevState,
      title: title
    }));
  }, []);

  // 場所詳細データの編集
  const updateDetail = useCallback((updatedDetail: LocationDetailType) => {
    setLocationData(prevState => ({
      ...prevState,
      details: prevState.details.map(detail =>
        detail.id === updatedDetail.id ? updatedDetail : detail
      )
    }));
  }, []);

  // 場所詳細データの追加
  const addDetail = useCallback((newDetail: LocationDetailType) => {
    setLocationData(prevState => ({
      ...prevState,
      details: [...prevState.details, newDetail]
    }));
  }, []);

  // 場所詳細データの削除
  const removeDetail = useCallback((detailId: string) => {
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