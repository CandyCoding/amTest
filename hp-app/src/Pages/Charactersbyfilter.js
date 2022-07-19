import Card from "../Components/CharacterCard";
import {useParams} from 'react-router-dom';
import CharacterFilter from '../Components/CharacterFilter';
import {useState,useEffect} from 'react';
function CharactersByFilter(){
    const {name} = useParams();
    const getFilterCharacters = () => {
        const url= `http://localhost:3001/${name}`;
        return fetch (
            url
        )
        .then(response => response.json())
        .then(data => setCharacters(data));
    }
    const [characters,setCharacters] = useState([]);
    useEffect(() => {
        getFilterCharacters(name);
    }
    ,[]);
    return (
        <div className="App">
        <h1>Harry Potter</h1>
        <h2>selecciona tu filtro</h2>
        <CharacterFilter/>
        <Card characters={characters} setCharacters={setCharacters}getFilterCharacters={getFilterCharacters} name={name}/>
    </div>
    )
}
export default CharactersByFilter;