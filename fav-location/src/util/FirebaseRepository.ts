import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db, storage } from "../app/firebaseSettings";
import { getDownloadURL, ref } from "firebase/storage";
import { LocationType } from "./LocationType";

// すべてのデータ取得
export async function getAllLocations(): Promise<LocationType[]> {
  const querySnapshot = await getDocs(collection(db, 'location'));
  const locations = querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    } as LocationType;
  });
  return locations;
}

// 単一データ取得
export async function getLocation(id: string) {
  const docRef = doc(db, 'location', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as LocationType;
  } else {
    return undefined;
  }
}

// 場所の更新
export async function updateLocation(id: number, newLocation: LocationType) {
  try {
    const docRef = doc(db, 'location', id.toString());
    await updateDoc(docRef, newLocation);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

// 場所データの追加
export async function addLocation(newLocation: LocationType) {
  try {
    await addDoc(collection(db, 'location'), newLocation);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// データを削除する関数
export async function deleteLocation(id: number) {
  try {
    await deleteDoc(doc(db, 'location', id.toString()));
  } catch (e) {
    console.error("Error removing document: ", e);
  }
}

// 画像を取得
export async function getImageUrl(imagePath: string): Promise<string> {
  var gsReference = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(gsReference);
    return url;
  } catch (err) {
    throw new Error("画像を取得できませんでした。");
  }
}