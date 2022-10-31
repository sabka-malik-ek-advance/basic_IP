import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Navigationbar from './components/navigationbar';

function App() {
  return (
    <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
