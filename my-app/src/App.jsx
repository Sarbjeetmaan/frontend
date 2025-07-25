import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/login';
import AuthRedirect from './pages/AuthRedirect';
import ProductDetail from './pages/ProductDetail';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/auth-redirect" element={<AuthRedirect />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
