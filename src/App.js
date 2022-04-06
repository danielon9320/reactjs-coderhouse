import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"Bienvenidos a Vinyl Store"}
                style={{ textAlign: "center" }}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting={"Bienvenidos a Vinyl Store"} />
            }
          />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
