import {useState} from 'react';
import Card from '../Components/CharacterCard';
import CharacterFilter from '../Components/CharacterFilter';
import Header from '../Components/Header';
import hplog from '../assets/hplog.png';
function Home() {
    const [characters,setCharacters] = useState([]);

    const getAllCharacters = () => {
      return fetch('http://localhost:3001/characters')
        .then(response => response.json())
        .then(data =>setCharacters(data));
    }
    return (
      <div className="App">
      <Header/>
  <section>
  <img src={hplog} alt="Harry Potter logo"/>
  <h2>Selecciona tu filtro</h2>
  <CharacterFilter/>
  </section>
  <Card characters={characters} setCharacters={setCharacters}getAllCharacters={getAllCharacters}/>
</div>
  );
  }
  
  
  export default Home;