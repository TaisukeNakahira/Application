import { Input } from '@mui/material';
import { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import LocationDetailRegister from '../components/LocationDetailRegister';
import { LocationDataProvider } from '../components/EdittingLocationDataProvider';

const LocationRegisterPage = () => {
  const [uploading, setUploading] = useState(false);

  // Todo: 編集中のデータを確定させる処理
  async function handleUpload() {
    setUploading(true);
    try {
      // const storageRef = ref(storage, 'images/' + file.name);
      // await uploadBytes(storageRef, file);
      // const url = await getDownloadURL(storageRef);
      // setDownloadURL(url);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <h1>場所登録</h1>
      <div>
        <label>名称</label>
        <Input />
      </div>
      <LocationDataProvider>
        <LocationDetailRegister />
        <div>
          <Button variant="contained" color="primary" onClick={handleUpload} disabled={uploading}>
            {uploading ? <CircularProgress size={24} /> : '登録'}
          </Button>
        </div>
      </LocationDataProvider>
    </>
  )
};

export default LocationRegisterPage;