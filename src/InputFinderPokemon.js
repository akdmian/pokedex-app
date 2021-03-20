import React, {useState} from 'react'
import './inputFinderPokemon.css';
import './PreviewsMainPokedex';




export  const InputFinderPokemon = () => {

    const [inputValue, setinputValue] = useState('Busca un Pokémon')

    const handleInputValue = (e) => {
        setinputValue( e.target.value )

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);

    }





    return (
        <div className='divBuscadorPokemon'>

            <form onSubmit={handleSubmit}>

                <input
                    className='buscadoPokemon'
                    type='text'
                    
                    value={inputValue}
                    onChange={handleInputValue}
                />

                <button className='buttonBuscador' type='submit'> Buscar </button>

            </form>
     
        </div>
    )
}
