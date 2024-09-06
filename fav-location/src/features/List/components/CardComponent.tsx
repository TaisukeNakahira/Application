import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
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