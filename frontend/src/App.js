import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
