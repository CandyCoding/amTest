import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Modal ({children, handleClose}) {
    const navigate = useNavigate()
    const [newCharacter, setNewCharacter] = useState(
        { 
            name: "",
            house: "",
            gender: "",
            dateOfBirth: "",
            eyeColour: "",
            hairColour: "",
            image: "",
            "hogwartsStudent": false,
            "hogwartsStaff": false,
        }
    )
    const [refresh, setRefresh] = useState(false)

const handleChange= (e) => {
    setNewCharacter({
        ...newCharacter,
        [e.target.name]: e.target.value
        
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/characters', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCharacter),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            handleClose();
            navigate("/")
        }
        )
}

    return (
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                <button onClick={handleClose} className="close_bt">X</button>
                <h3>Agregar un personaje</h3>
                </div>
                <div className="modal_body">
                    <label>NOMBRE</label>
                    <input type="text" className="modal_input" name="name" onChange={handleChange}/>
                    <label>CUMPLEAÑOS</label>
                    <input type="text"className="modal_input" name= "dateOfBirth"onChange={handleChange}/>
                    <label>COLOR DE OJOS</label>
                    <input type="text"className="modal_input" name="eyeColour"onChange={handleChange}/>
                    <label>COLOR DE CABELLO</label>
                    <input type="text"className="modal_input" name="hairColour"onChange={handleChange}/>
                    </div>
                    <div className="modal_labels">
                    <label>GÉNERO</label>
                    <label>POSICIÓN</label>
                    </div>
                    <div className="modal_checks">
                    <label>Mujer</label>
                    <input type="radio" checked name="gender" value="female"onChange={handleChange}/>
                    <label>Hombre</label>
                    <input type="radio"  name="gender" value="male"onChange={handleChange} />
                    <label>Estudiante</label>
                    <input type="radio"  name="hogwartsStudent" value ={Boolean("false")} onChange={handleChange}/>
                    <label>Staff</label>
                    <input type="radio" name="hogwartsStaff" value ={ Boolean("false")} onChange={handleChange}/>
                    </div>
                    <div className="modal_files">
                    <label>Fotografía</label>
                    <input type="file"/>
                    </div>
                    <button className="keep_btn" onClick={handleSubmit}>GUARDAR</button>
            {children}
            </div>
        </div> 
    )

}