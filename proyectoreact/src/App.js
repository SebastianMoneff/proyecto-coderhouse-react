import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path= "/" element = {<ItemListContainer/>} />
          <Route path= "/category/:category" element = {<ItemListContainer/>} />
          <Route path= "/item/:id" element = {<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>

  )
}

export default App;
