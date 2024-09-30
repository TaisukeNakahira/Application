import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import styled from "@emotion/styled";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../app/firebaseSettings';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)`
  height: 400px;
  width: 300px;
  cursor: pointer;
`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
`;

type CardComponentProps = {
  imagePath: string;
  title: string;
  id: string;
}

// Todo: Storageに画像を保存、Databaseに画像のパスを保存する
const CardComponent = (props: CardComponentProps) => {
  const [img, setImage] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    async function getImage() {
      const gsReference = ref(
        storage,
        props.imagePath
      );
  
      await getDownloadURL(gsReference)
        .then((url) => {
          setImage(url);
        })
        .catch((err) => console.log(err));
    }
    getImage();
  }, [props]);

  function handleClick() {
    navigate(`/detail/${props.id}`);
  }

  if (!img) {
    return <div>loading...</div>;
  }
  
  return (
    <>
      <StyledCard onClick={handleClick}>
        <StyledCardMedia image={img}/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p"> {props.title}</Typography>
        </CardContent>
      </StyledCard>
    </>
  )
}

export default CardComponent;