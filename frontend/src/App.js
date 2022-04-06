import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import Error from './component/Error';
import Event from './component/Event'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event" element={<Event />} />
        <Route  element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
