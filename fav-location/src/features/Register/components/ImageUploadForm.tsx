import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import useEdittingLocationData from '../hooks/useLocationData';
import { getImageUrl } from '../../../util/FirebaseRepository';

type ImageUploadProps = {
  detailId: number;
}

// Todo: Contextで持っている画像データはFile型だが、string型の方がいいかもしれない
const ImageUpload = (props: ImageUploadProps) => {
  const { locationData, updateDetail } = useEdittingLocationData();
  const thisDetail = locationData.details.find(detail => detail.id === props.detailId);
  const imagePath = thisDetail?.imagePath;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // プレビュー画像の表示
  useEffect(() => {
    async function fetchImage() {
      if (imagePath) {
        const imageUrl = await getImageUrl(imagePath);
        const response = await fetch(imageUrl);
        const imageBlob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(imageBlob);
      } else {
        setPreviewUrl(null);
      }
    }
    fetchImage();
  }, [imagePath]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      updateDetail({
        ...thisDetail!,
        imagePath: event.target.files[0].name
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
          <p>選択されたファイル: {imagePath}</p>
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;