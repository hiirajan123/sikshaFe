import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import imgBook from './books.jpg';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const cardData = [
    { id: 1, title: "Book 1", description: "Description for book 1" },
    { id: 2, title: "Book 2", description: "Description for book 2" },
    { id: 3, title: "Book 3", description: "Description for book 3" },
    { id: 4, title: "Book 4", description: "Description for book 4" },
    { id: 5, title: "Book 5", description: "Description for book 5" },
    { id: 6, title: "Book 6", description: "Description for book 6" },
    { id: 7, title: "Book 7", description: "Description for book 7" },
    { id: 8, title: "Book 8", description: "Description for book 8" },
    { id: 9, title: "Book 9", description: "Description for book 9" },
    { id: 10, title: "Book 10", description: "Description for book 10" },
];

export default function ActionAreaCard() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const filteredCards = cardData.filter((card) => {
        return (
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (category === '' || card.category === category)
        );
    });

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ marginRight: '16px' }}
                />
                <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value="Category 1">Category 1</MenuItem>
                        <MenuItem value="Category 2">Category 2</MenuItem>
                        <MenuItem value="Category 3">Category 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <div className="cardList" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center"
            }}>
                {filteredCards.map((card) =>
                    <Card key={card.id} sx={{ maxWidth: 260 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={imgBook}
                                alt={card.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </div>
        </div>
    );
}