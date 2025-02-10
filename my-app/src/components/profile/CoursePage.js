import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';

const dummyCourses = [
  { id: 1, title: 'Course 1', videos: ['Video 1.1', 'Video 1.2', 'Video 1.3'] },
  { id: 2, title: 'Course 2', videos: ['Video 2.1', 'Video 2.2'] },
  { id: 3, title: 'Course 3', videos: ['Video 3.1', 'Video 3.2', 'Video 3.3', 'Video 3.4'] },
];

const CoursePage = () => {
  const { courseId } = useParams();
  const course = dummyCourses.find((course) => course.id === parseInt(courseId));
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Box sx={{ width: '30%', borderRight: '1px solid #ccc', padding: 2 }}>
        <Typography variant="h5">{course.title} - Videos</Typography>
        <List>
          {course.videos.map((video, index) => (
            <ListItem button key={index} onClick={() => handleVideoClick(video)}>
              <ListItemText primary={video} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: '70%', padding: 2 }}>
        {selectedVideo && (
          <>
            <Typography variant="h5">Playing: {selectedVideo}</Typography>
            <Box sx={{ width: '100%', height: '80%' }}>
              <video width="100%" height="100%" controls>
                <source src="dummy-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CoursePage;