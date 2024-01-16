import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppRoutes from './routes'; // Import your routes

// import Point from './pages/pointpickup/point';
// import Breakdown from './pages/breakdown/breakdown';
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
export default App;
