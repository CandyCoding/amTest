import {useState} from 'react';
function StaffCards () {
    const [characters,setCharacters] = useState([]);
    const getStaffCharacters = () => {
      return fetch('http://localhost:3001/characters')
        .then(response => response.json())
        .then(data =>setCharacters(data));
    }
    return (
      <div className="staff-cards">
          <p></p>
      </div>
      )
  }
  export default StaffCards;