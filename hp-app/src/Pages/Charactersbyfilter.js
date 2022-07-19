import Card from "../Components/CharacterCard";
import {useParams} from 'react-router-dom';
import CharacterFilter from '../Components/CharacterFilter';
import {useState,useEffect} from 'react';
function CharactersByFilter(){
    const {name} = useParams();
    const getAllCharacters = () => {
        return fetch('http://localhost:3001/characters')
        .then(response => response.json())
        .then(data => setCharacters(data));
    }
    const [characters,setCharacters] = useState([]);
    useEffect(() => {
        getAllCharacters();
    }
    ,[]);
    return (
        <div className="App">
        <h1>Harry Potter</h1>
        <h2>selecciona tu filtro</h2>
        <CharacterFilter/>
        <Card characters={characters} setCharacters={setCharacters}getAllCharacters={getAllCharacters}/>
    </div>
    )
}
export default CharactersByFilter;