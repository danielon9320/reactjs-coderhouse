import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola"} />
    </div>
  );
}

export default App;
