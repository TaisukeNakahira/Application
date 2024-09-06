import { Input } from '@mui/material';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../app/firebaseSettings';
import { Button, CircularProgress } from '@mui/material';
import { useRegisterDataContext } from '../hooks/useRegisterContext';
import RegisterDataProvider from '../components/RegisterDataProvider';
import LocationDetailRegister from '../components/LocationDetailRegister';

const LocationRegisterPage = () => {
  const { registerDataContext, setRegisterDataContext } = useRegisterDataContext();
  const datas = Object.values(registerDataContext.datas);
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    if (!registerDataContext.datas[0].image) return;

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
      <RegisterDataProvider>
        <LocationDetailRegister />
      </RegisterDataProvider>
      <div>
        <Button variant="contained" color="primary" onClick={handleUpload} disabled={uploading}>
          {uploading ? <CircularProgress size={24} /> : '登録'}
        </Button>
      </div>
    </>
  )
};

export default LocationRegisterPage;