import { useNavigate } from "react-router-dom";
const CharacterFilter = (character,setCharacters) => {
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name } = e.target;
        navigate(`/characters/${name}`);
    }

    return (
        <div className="character-filter">
            <button name='hogwartsStudent' onClick={handleChange}>ESTUDIANTES</button>
            <button name= 'staff' onClick={handleChange}>STAFF</button>
        </div>
        
            );
    }
export default CharacterFilter