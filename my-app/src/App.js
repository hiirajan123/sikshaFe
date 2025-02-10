import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PrimarySearchAppBar from './components/navbar/navbar.js';
import ActionAreaCard from './components/cards/cards.js';
import ProfilePage from './components/profile/Profile';
import LoginPage from './components/login/LoginPage';
import ForgotPasswordPage from './components/forgetPassword/ForgetPassword.js';
import SignupPage from './components/signup/SignupPage';
import SubscriptionPage from './components/profile/SubscriptionPage'; // Import the new SubscriptionPage
import CoursePage from './components/profile/CoursePage'; // Import the new CoursePage
import { LoginProvider } from './components/login/LoginContext';
import PublishedCoursesPage from './components/profile/PublishedCoursesPage';
import CourseDetailsPage from './components/profile/CourseDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <LoginProvider>
          <PrimarySearchAppBar />
          <Routes>
            <Route path="/" element={<ActionAreaCard />} />
            <Route path="/home" element={<ActionAreaCard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} /> {/* Add the new route */}
            <Route path="/subscription/:courseId" element={<CoursePage />} /> {/* Add the new route for CoursePage */}
            <Route path="/published-courses" element={<PublishedCoursesPage />} />
            <Route path="/course-details/:courseId" element={<CourseDetailsPage />} /> {/* Add the new route for CourseDetailsPage */}
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
