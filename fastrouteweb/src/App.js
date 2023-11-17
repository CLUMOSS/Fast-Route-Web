import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signup/signup';
import Navbar from './components/common/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
        <SignUp></SignUp>
        </a>
      </header>
    </div>
  );
}

export default App;
