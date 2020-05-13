import React, {useState, useEffect} from 'react';
// import axios from 'axios';




function Pokemon (props) {
    const [pokemon, setPokemon] = useState([]);
    const [render, setRender] = useState(0);
    const [hasError, setHasError] = useState(false);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(() => setHasError(true));
            console.log("you are rendering pokemon api")
    }, []);

    const clickFetch = () =>{
        setRender(render);
    };
    
        if(pokemon == null) return 'loading....';

        if(hasError) {
            return (
                <div>Something went Wrong</div>
            )
        }
 
   
    
    return (
        <div>
            
            <button onClick={clickFetch}>Fetch Pokemon</button>
            
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
               return (
                <li key={index}>{poke.name}</li>
            
                )
            
            })}
        </div>
    );
}

export default Pokemon;