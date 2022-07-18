import {useState,useEffect} from 'react';
import './characterCard.css';
function Card() {
const [characters,setCharacters] = useState([]);

const getAllCharacters = () => {
    return fetch('http://localhost:3001/characters')
      .then(response => response.json())
      .then(data =>setCharacters(data));
  }
    useEffect(() => {
        getAllCharacters();
    }
    ,[]);
  return (
    <div>
        {characters.map(character => (
            <div className='card-body' key={character.id}>
                {character.alive === true ? <p>VIVO</p> : <p>FINADO</p>} / {character.hogwartsStudent === true ? <p>ESTUDIANTE</p> : <p>STAFF</p>}
                {character.alive === false ? <h1> + {character.name}</h1> : <h1>{character.name}</h1>}
                <img src={character.image} alt={character.name}/>
                <p>{character.dateOfBirth}</p>
                <p>{character.gender}</p>
                <p>{character.eyeColour}</p>
                <p>{character.hairColour}</p>
            </div>
        ))}
    </div>
  );
}
export default Card;
