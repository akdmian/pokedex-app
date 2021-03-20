import logo from './logo.svg';
import './App.css';
import HeaderApp from './HeaderApp';
import PreviewsMainPokedex from './PreviewsMainPokedex';

import { InputFinderPokemon } from './InputFinderPokemon';
import PokedexButtons from './PokedexButtons';



function App() {
  return (
    <div className="App">
      
      <HeaderApp />
      <InputFinderPokemon />
      <PreviewsMainPokedex />
      

    </div>
  );
}

export default App;
