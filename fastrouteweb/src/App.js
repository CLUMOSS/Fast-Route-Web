import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signup/signup';
import Navbar from './components/common/Navbar/Navbar';
import SignIn from './pages/signin/signin';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
        <SignIn></SignIn>
        </a>
      </header>
    </div>
  );
}

export default App;
