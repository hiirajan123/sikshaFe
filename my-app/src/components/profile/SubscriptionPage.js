import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const dummyCourses = [
  { id: 1, title: 'Course 1' },
  { id: 2, title: 'Course 2' },
  { id: 3, title: 'Course 3' },
];

const SubscriptionPage = () => {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate(`/subscription/${course.id}`);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5">My Courses</Typography>
      <Grid container spacing={2}>
        {dummyCourses.map((course) => (
          <Grid item xs={12} key={course.id}>
            <Card onClick={() => handleCourseClick(course)} sx={{ cursor: 'pointer' }}>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SubscriptionPage;