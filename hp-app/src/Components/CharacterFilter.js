import { useNavigate } from "react-router-dom";
const CharacterFilter = (character,setCharacters) => {
    const navigate = useNavigate();
    return (
        <div className="character-filter">
            <button>ESTUDIANTES</button>
            <button>STAFF</button>
        </div>
        
            );
    }
export default CharacterFilter;