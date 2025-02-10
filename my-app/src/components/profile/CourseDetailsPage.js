import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    // Replace with actual API call to fetch course details
    const dummyCourseDetails = {
      id: courseId,
      title: `Course ${courseId}`,
      subscribers: 100,
      earnings: 5000,
      description: 'This is a detailed description of the course.',
    };
    setCourseDetails(dummyCourseDetails);
  }, [courseId]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{courseDetails.title}</h1>
      <p>{courseDetails.description}</p>
      <p>Subscribers: {courseDetails.subscribers}</p>
      <p>Total Earnings: ${courseDetails.earnings}</p>
    </div>
  );
};

export default CourseDetailsPage;