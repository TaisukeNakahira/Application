import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import useEdittingLocationData from '../hooks/useEdittingLocationData';

type ImageUploadProps = {
  detailId: number;
}

const ImageUpload = (props: ImageUploadProps) => {
  const { edittingLocationData, updateDetail } = useEdittingLocationData();
  const thisDetail = edittingLocationData.details.find(detail => detail.id === props.detailId);
  const image = thisDetail?.image;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // プレビュー画像の表示
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
      updateDetail({
        ...thisDetail!,
        image: event.target.files[0]
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