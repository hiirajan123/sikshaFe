import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import imgBook from './books.jpg';

const cardData = [
    { id: 1, title: "Book 1", description: "Description for book 1" },
    { id: 2, title: "Book 2", description: "Description for book 2" },
    { id: 3, title: "Book 3", description: "Description for book 3" },
    { id: 1, title: "Book 1", description: "Description for book 1" },
    { id: 2, title: "Book 2", description: "Description for book 2" },
    { id: 3, title: "Book 3", description: "Description for book 3" },
    { id: 1, title: "Book 1", description: "Description for book 1" },
    { id: 2, title: "Book 2", description: "Description for book 2" },
    { id: 3, title: "Book 3", description: "Description for book 3" },
    { id: 1, title: "Book 1", description: "Description for book 1" },
    { id: 2, title: "Book 2", description: "Description for book 2" },
    { id: 3, title: "Book 3", description: "Description for book 3" },
  ];

export default function ActionAreaCard() {
  return (
    <div className="cardList"  style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        marginLeft: "20px",
        marginTop:"10px",
        justifyContent:"center"

      }}>
    {cardData.map((cardData)=>
    <Card sx={{ maxWidth: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {imgBook}
          alt="green iguana"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )}
  </div>);

}