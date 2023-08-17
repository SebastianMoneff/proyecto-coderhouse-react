import './App.css';
import cart from "./assets/cart.png"
import { ItenListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItenListContainer greetins= "Hola a todos!"/>
    </>
  )
}

export default App;
