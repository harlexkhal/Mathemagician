import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
