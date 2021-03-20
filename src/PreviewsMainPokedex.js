import React, {useState} from 'react';
import './previews-main-pokedex.css';
import './PokedexButtons';
import './InputFinderPokemon';


function PreviewsMainPokedex() {

    const [idPokemon, setIdPokemon] = useState(1);



    //

    //Función para delimitar el número de pokémons al retornar después de 0
    function pokemonAnterior (numeroId) {

        if (numeroId <= 1) {
            numeroId = 151; 
        } else {
            numeroId = numeroId - 1;
        }  
        
        return numeroId;
        
    }

    //Función para delimitar el número de pokémons al avanzar
    function pokemonSiguiente (numeroId) {

        if (numeroId >= 151) {
            numeroId = 1; 
        } else {
            numeroId = numeroId + 1;
        }  
        
        return numeroId;
        
    }


    //idPokemon - 1

    

    return (

        <div>

            <div className="previews-pokedex">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`} className='preview-pokemon' />
                
                <div className='menuButtons'>
                <button onClick={ () => setIdPokemon( pokemonAnterior(idPokemon) )}  className="main-pokedex-buttons">Anterior</button>
                
                <button onClick={ () => setIdPokemon( pokemonSiguiente(idPokemon) )} className="main-pokedex-buttons">Siguiente</button>

                </div>
            </div>
            
            

        </div>
    )
}

export default PreviewsMainPokedex
