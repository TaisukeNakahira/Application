import { useCallback, useEffect, useState } from "react";
import { db } from "../../../app/firebaseSettings";
import { doc, getDoc } from "firebase/firestore";

export type Location = {
  id: number;
  name: string;
  details: LocationDetail[];
};

export type LocationDetail = {
  id: number;
  locationId: number;
  title: string;
  image: File;
  description: string;
};

const useEdittingLocationData = () => {
  const [edittingLocationData, setEdittingLocationData] = useState<Location>({
    id: Date.now(),
    name: "",
    details: []
  });

  // 場所名の編集
  const updateLocation = useCallback((name: string) => {
    setEdittingLocationData(prevState => ({
      ...prevState,
      name: name
    }));
  }, []);

  // 場所詳細データの編集
  const updateDetail = useCallback((updatedDetail: LocationDetail) => {
    setEdittingLocationData(prevState => ({
      ...prevState,
      details: prevState.details.map(detail =>
        detail.id === updatedDetail.id ? { ...detail, ...updatedDetail } : detail
      )
    }));
  }, []);

  // 場所詳細データの追加
  const addDetail = useCallback((newDetail: LocationDetail) => {
    newDetail.id = Date.now();

    setEdittingLocationData(prevState => ({
      ...prevState,
      details: [...prevState.details, newDetail]
    }));
  }, []);

  // 場所詳細データの削除
  const removeDetail = useCallback((detailId: number) => {
    setEdittingLocationData(prevState => ({
      ...prevState,
      details: prevState.details.filter(detail => detail.id !== detailId)
    }));
  }, []);

  // Firestoreからデータを取得する関数
  const fetchLocationData = useCallback(async () => {
    const docRef = doc(db, "locations", edittingLocationData.id.toString());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setEdittingLocationData(docSnap.data() as Location);
    } else {
      console.log("No such document!");
    }
  }, [edittingLocationData.id]);

  useEffect(() => {
    // 初期データ取得
    const fetchLocationData = useCallback(async () => {
      const docRef = doc(db, "locations", edittingLocationData.id.toString());
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setEdittingLocationData(docSnap.data() as Location);
      } else {
        console.log("No such document!");
      }
    }, [edittingLocationData.id]);

    fetchLocationData();
  }, []);

  return { edittingLocationData, updateLocation, updateDetail, addDetail, removeDetail };
}

export default useEdittingLocationData;