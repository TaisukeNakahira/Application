import useEdittingLocationData from '../hooks/useEdittingLocationData';
import ImageUploadForm from './ImageUploadForm';
import { TextareaAutosize } from '@mui/base';

type LocationDetailRegisterFormProps = {
  detailId: number;
}

const LocationDetailRegisterForm = (props: LocationDetailRegisterFormProps) => {
  const { edittingLocationData, updateDetail } = useEdittingLocationData();

  // テキストエリアの変更
  const onTextAriaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateDetail({
      ...edittingLocationData.details.find(detail => detail.id === props.detailId)!,
      description: event.target.value
    });
  }

  return (
    <div>
      <ImageUploadForm detailId={props.detailId} />
      <TextareaAutosize onChange={onTextAriaChange} />
    </div>
  );
};

export default LocationDetailRegisterForm;