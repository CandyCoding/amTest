import { useState } from "react"
export default function Modal ({children, handleClose}) {
    const [newCharacter, setNewCharacter] = useState(
        { 
            name: "",
            house: "",
            gender: "",
            dateOfBirth: "",
            eyeColour: "",
            hairColour: "",
            image: "",
            position:""
        }
    )
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
                    <input type="radio" name="position" value="hogwartsStudent"onChange={handleChange}/>
                    <label>Staff</label>
                    <input type="radio"checked name="position" value="hogwartsStaff"onChange={handleChange}/>
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