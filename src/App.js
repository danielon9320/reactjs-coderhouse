import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Vynil Store"} style={{ textAlign: "center" }}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          {/* <ItemCount stock={30} initial={1} onAdd={onAdd}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
