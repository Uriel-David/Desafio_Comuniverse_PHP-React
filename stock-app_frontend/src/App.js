import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import ProductList from "./pages/ProductList";
import ProductCreate from "./pages/ProductCreate";
import ProductUpdate from "./pages/ProductUpdate";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={'Stock App'} />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<ProductCreate />} />
        <Route path="/update/:product_id" element={<ProductUpdate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
