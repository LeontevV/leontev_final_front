import * as React from 'react';
import { string } from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import postImage from '../../assets/images.png';

export default function MediaCard({ title, description, tag }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={postImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          { title }
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          { description }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { tag }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
MediaCard.propTypes = {
  title: string,
  description: string,
  tag: string,
};
MediaCard.defaultProps = {
  title: '',
  tag: '',
  description: '',
};
