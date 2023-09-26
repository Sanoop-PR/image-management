import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from "./components/Login"; 
import Register from "./components/Register"; 
import Home from "./components/Home"; 
import Header from './components/Header'
import ImageContainer from './components/ImageContainer'

function App() {
  return (
    <>
    <div><Header/></div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/imageContainer" element={<ImageContainer/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
