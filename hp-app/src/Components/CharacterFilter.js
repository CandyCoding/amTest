import { useNavigate } from "react-router-dom";
const CharacterFilter = (character,setCharacters) => {
    const navigate = useNavigate();
    const reload = () => {
        window.location.reload(true);
      }
    const handleChange = (e) => {
        const { name } = e.target;
        navigate(`/characters/${name}`);
        reload();
    }

    return (
        <div className="character-filter">
            <button className="filter_btn" name='howartsStudents' onClick={handleChange}>ESTUDIANTES</button>
            <button className="filter_btn" name= 'hogwartsStaff' onClick={handleChange}>STAFF</button>
        </div>
        
            );
    }
export default CharacterFilter