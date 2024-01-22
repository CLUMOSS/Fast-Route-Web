import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/footer';
import AppRoutes from './routes'; // Import your routes

// import Point from './pages/pointpickup/point';
// import Breakdown from './pages/breakdown/breakdown';
function App() {
  return (
    <Router>
        <Navbar></Navbar>
      <AppRoutes />
      <Footer></Footer>
    </Router>
  );
}
export default App;
