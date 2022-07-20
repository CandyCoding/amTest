import {useEffect} from 'react'; 
function Card({characters,setCharacters,getAllCharacters,name,getFilterCharacters}) {
    useEffect(() => {
        if(name === 'howartsStudents'||name === 'hogwartsStaff'){
         getFilterCharacters(name);
    } else {
        getAllCharacters();
    }
    },[]);
    const houseColor = {
        Gryffindor: '#FF0000',
        Slytherin: '#1C792B',
        Ravenclaw: '#0597B7',
        Hufflepuff: '#FFC700' 
    }
 const notAliveColor = {
        true: '#FFFFFF',
        false: '#CCCCCC'
    }   
  return (
    < div className='cards_container'>
        {characters.map(character => (
            <div className='card_body' key={character.id}style={character.alive===false ?{backgroundColor:notAliveColor[`${character.alive}`]}:{backgroundColor:notAliveColor[`${character.alive}`]}}>
                <div className='house_color' name= {character.house} style= {{backgroundColor : houseColor[`${character.house}`]}}>
                <figure className='card__figure'>
                    <img className='card_photo' src={character.image} alt={character.name}/>
                </figure>
                </div>
                <div className='character-characteristics-container'>
                <div className='card_header'>
                {character.alive === true ? <p className='character_situation'>VIVO</p> : <p className='character_situation'>FINADO</p>} / {character.hogwartsStudent === true ? <p className='character_situation'>ESTUDIANTE</p> : <p className='character_situation'>STAFF</p>}
                </div>
                {character.alive === false ? <h1 className='character_name'> + {character.name}</h1> : <h1 className='character_name'>{character.name}</h1>}
                <p><span className='boldch'>Cumpleaños: </span>{character.dateOfBirth}</p>
                <p><span className='boldch'>Género: </span>{character.gender}</p>
                <p><span className='boldch'>Color de ojos: </span>{character.eyeColour}</p>
                <p><span className='boldch'>Color de pelo: </span> {character.hairColour}</p>
            </div>
            </div>
        ))}
    </div>
  );
}
export default Card;
