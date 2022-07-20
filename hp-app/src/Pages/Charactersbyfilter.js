import Card from "../Components/CharacterCard";
import {useParams, useNavigate} from 'react-router-dom';
import CharacterFilter from '../Components/CharacterFilter';
import Header from "../Components/Header";
import {useState,useEffect} from 'react';
import hplog from '../assets/hplog.png';

function CharactersByFilter(){
    const {name} = useParams();
    const navigate = useNavigate();

    const getFilterCharacters = () => {
        const url= `http://localhost:3001/${name}`;
        return fetch (
            url
        )
        .then(response => response.json())
        .then(data => setCharacters(data)
        )

    }
    const [characters,setCharacters] = useState([]);
    useEffect(() => {
        getFilterCharacters(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[]);
    const goHome = () => {
        navigate("/");
    }
    return (
        <div className="App">
            <Header/>
        <section>
        <img onClick= {goHome}src={hplog} alt="Harry Potter logo"/>
        <h2>Selecciona tu filtro</h2>
        <CharacterFilter/>
        </section>
        <Card characters={characters} setCharacters={setCharacters}getFilterCharacters={getFilterCharacters} name={name}/>
    </div>
    )
}
export default CharactersByFilter;