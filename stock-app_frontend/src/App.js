import { Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import ProductList from "./pages/ProductList";
import ProductCreate from "./pages/ProductCreate";
import ProductUpdate from "./pages/ProductUpdate";
import './App.css';

function App() {
  return (
    <div className="App container">
      <Header title={process.env.REACT_APP_NAME} />
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
