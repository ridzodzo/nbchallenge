import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepagedesktop from './pages/Homepagedesktop';
import Homepagemobile from './pages/Homepagemobile';
import Showdesktop from './pages/Showdesktop';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepagedesktop />} />
        <Route path="/Homepagemobile" element={<Homepagemobile />} />
        <Route path="/Showdesktop" element={<Showdesktop />} />
        </Route>
        </Routes>
      </div>

    </BrowserRouter>
    
  );
}

export default App;
