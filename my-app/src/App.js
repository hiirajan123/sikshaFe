import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PrimarySearchAppBar from './components/navbar/navbar.js';
import ActionAreaCard from './components/cards/cards.js';
import ProfilePage from './components/profile/Profile';
import LoginPage from './components/login/LoginPage';
import ForgotPasswordPage from './components/forgetPassword/ForgetPassword.js';
import SignupPage from './components/signup/SignupPage';
import { LoginProvider } from './components/login/LoginContext';

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
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
