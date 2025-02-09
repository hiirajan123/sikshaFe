import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PrimarySearchAppBar from './components/navbar/navbar.js';
import ActionAreaCard from './components/cards/cards.js';
import ProfilePage from './components/profile/Profile';
import LoginPage from './components/login/LoginPage';
import ForgotPasswordPage from './components/forgetPassword/ForgetPassword.js';

function App() {
  return (
    <div className="App">
     <Router>
      <PrimarySearchAppBar />
      <Routes>
      <Route path="/" element={<ActionAreaCard/>}/>
        <Route path="/home" element={<ActionAreaCard/>}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
