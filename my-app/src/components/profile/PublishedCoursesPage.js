import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const PublishedCoursesPage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const dummyCourses = [
      { id: 1, title: 'Course 1' },
      { id: 2, title: 'Course 2' },
      { id: 3, title: 'Course 3' },
    ];
    setCourses(dummyCourses);
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Published Courses
      </Typography>
      <List>
        {courses.map((course) => (
          <ListItem
            key={course.id}
            button
            onClick={() => handleCourseClick(course.id)}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: 2,
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <ListItemText primary={course.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PublishedCoursesPage;