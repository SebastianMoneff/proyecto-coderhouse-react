import './App.css';
import cart from "./assets/cart.png"
import { ItenListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItenListContainer greeting= "Hola a todos!"/>
    </>
  )
}

export default App;
