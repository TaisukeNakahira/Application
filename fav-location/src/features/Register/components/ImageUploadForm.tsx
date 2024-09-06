import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { useRegisterDataContext } from '../hooks/useRegisterContext';
import { RegisterData } from './RegisterDataProvider';

type ImageUploadProps = {
  value: number;
}

const ImageUpload = (props: ImageUploadProps) => {
  const { registerDataContext, setRegisterDataContext } = useRegisterDataContext();
  const image = registerDataContext.datas[props.value].image;
  const description = registerDataContext.datas[props.value].description;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      // (event.target.files[0]
      setRegisterDataContext((prev: RegisterData) => {
        return { 
          ...prev, 
          prev[props.value]: null
        }
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span">画像を選択</Button>
      </label>
      {previewUrl && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          <p>選択されたファイル: {image!.name}</p>
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;