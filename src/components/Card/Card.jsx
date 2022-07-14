import React, { memo } from 'react';
import { shape, string } from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import postImage from '../../assets/images.png';

function MediaCard({
  title,
  description,
  tag,
  user,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };

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
        <Button onClick={handleClick} size="small">{ user.name }</Button>
      </CardActions>
    </Card>
  );
}
MediaCard.propTypes = {
  title: string,
  description: string,
  tag: string,
  user: shape({}),
};
MediaCard.defaultProps = {
  title: '',
  tag: '',
  description: '',
  user: {},
};

export default memo(MediaCard);
