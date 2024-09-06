import React, { useState } from 'react';
import ImageUploadForm from './ImageUploadForm';
import { TextareaAutosize } from '@mui/base';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../app/firebaseSettings';

type LocationDetailRegisterFormProps = {
  value: number;
}

const LocationDetailRegisterForm = (props: LocationDetailRegisterFormProps) => {
  return (
    <div>
      <ImageUploadForm value={props.value} />
      <TextareaAutosize />
    </div>
  );
};

export default LocationDetailRegisterForm;