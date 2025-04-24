const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const courses = [
  {
    id: '1',
    title: 'Introduction to JavaScript',
    duration: '4 weeks',
    shortDescription: 'Learn the fundamentals of JavaScript programming',
    fullDescription: 'This course covers all the basics of JavaScript including variables, functions, objects, and DOM manipulation. By the end, you\'ll be able to build interactive web pages.'
  },
  {
    id: '2',
    title: 'Advanced React Development',
    duration: '6 weeks',
    shortDescription: 'Master React with advanced patterns and best practices',
    fullDescription: 'Dive deep into React with hooks, context API, performance optimization, and testing. Learn how to structure large-scale React applications.'
  },
  {
    id: '3',
    title: 'Python for Data Science',
    duration: '8 weeks',
    shortDescription: 'Use Python to analyze and visualize data',
    fullDescription: 'Learn how to use Python with libraries like Pandas, NumPy, and Matplotlib to analyze datasets and create meaningful visualizations.',
  },
  {
    id: '4',
    title: 'UX/UI Design Fundamentals',
    duration: '5 weeks',
    shortDescription: 'Learn the principles of good user experience and interface design',
    fullDescription: 'This course covers the core principles of UX/UI design including user research, wireframing, prototyping, and usability testing.',
  },
  {
    id: '5',
    title: 'Cloud Computing with AWS',
    duration: '10 weeks',
    shortDescription: 'Introduction to cloud services using Amazon Web Services',
    fullDescription: 'Learn how to deploy and manage applications on AWS. Covers EC2, S3, Lambda, and other core AWS services with hands-on projects.',
  }
];

// GET /api/courses - Returns list of all courses
app.get('/api/courses', (req, res) => {
  // Return course list
  const courseList = courses.map(course => ({
    id: course.id,
    title: course.title,
    duration: course.duration,
    description: course.shortDescription
  }));
  res.json(courseList);
});

// GET /api/courses/:id - Returns details for a specific course
app.get('/api/courses/:id', (req, res) => {
  const courseId = req.params.id;
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  res.json(course);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});