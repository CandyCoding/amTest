import {useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import Card from '../Components/CharacterCard';
import CharacterFilter from '../Components/CharacterFilter';

function Home() {
    const [characters,setCharacters] = useState([]);
    const getAllCharacters = () => {
      return fetch('http://localhost:3001/characters')
        .then(response => response.json())
        .then(data =>setCharacters(data));
    }
    return (
      <div className="App">
      <h1>Harry Potter</h1>
      <h2>selecciona tu filtro</h2>
      <CharacterFilter/>
      <Card characters={characters} setCharacters={setCharacters}getAllCharacters={getAllCharacters}/>
  </div>
  );
  }
  
  export default Home;