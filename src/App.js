import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import { Provider } from "react-redux";
import store from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Error from "./Pages/Error";
import ResetPassword from "./Pages/ResetPassword";

let persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<ResetPassword />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <Footer />
    </>
  );
}

export default App;
