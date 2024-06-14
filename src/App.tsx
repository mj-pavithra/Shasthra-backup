
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import './App.css';
import './Styles/tailwind.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
