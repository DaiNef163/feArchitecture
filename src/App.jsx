import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ProductPage from "./Page/ProductPage";
import DetailsProduct from "./Page/DetailsProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/product/:productId" element={<DetailsProduct />} />
    
      </Route>
    </Routes>
  );
}

export default App;
