import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  maxWidth: 230;
  cursor: pointer;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

type CardComponentProps = {
  imagePath: string;
  title: string;
}

// Todo: Storageに画像を保存、Databaseに画像のパスを保存する
const CardComponent = (props: CardComponentProps) => {
  return (
    <>
      <StyledCard onClick={() => {}}>
        <StyledCardMedia image={props.imagePath}/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p"> {props.title}</Typography>
        </CardContent>
      </StyledCard>
    </>
  )
}

export default CardComponent;