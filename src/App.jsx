import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MyAccounts } from "./pages/MyAccount";
import { MyOrders } from "./pages/MyOrders";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Clothes } from "./pages/product-pages/Clothes";
import { Electronics } from "./pages/product-pages/Electronics";
import { Furnitures } from "./pages/product-pages/Furnitures";
import { Toys } from "./pages/product-pages/Toys";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/clothes" element={<Clothes />}></Route>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/furnitures" element={<Furnitures />}></Route>
          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/my_orders" element={<MyOrders />}></Route>
          <Route path="/my_account" element={<MyAccounts />}></Route>
          {/* <Route path="/my_cart" element={<CartPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
