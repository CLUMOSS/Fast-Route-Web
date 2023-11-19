import logo from './logo.svg';
import './App.css';
// import SignUp from './pages/signup/signup';
// import Navbar from './components/common/Navbar/Navbar';
// import ContactUs from './pages/ContactUs';
import Homepage from "./pages/home/homepage";  // Keep this line if you want to add the Homepage component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          {/* <SignUp></SignUp> */}
        </a>
      </header>
      <Homepage></Homepage> {/* Keep this line if you want to add the Homepage component */}
      {/* ... Other code ... */}
//       <ContactUs></ContactUs>
    </div>
  );
}

export default App;
