import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  );
}

export default App;