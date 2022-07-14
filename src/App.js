import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, Profile, Products } from './screens'
import { Navigation } from './components/patterns/Navigation'
import runServer from './Mock.server';

runServer()

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/userProfile" element={<Profile />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
