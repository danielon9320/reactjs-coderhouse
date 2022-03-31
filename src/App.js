import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Vynil Store"} style={{textAlign: "center"}}/>
      {/* <ItemCount stock={30} initial={1} onAdd={onAdd}/> */}
    </div>
  );
}

export default App;
