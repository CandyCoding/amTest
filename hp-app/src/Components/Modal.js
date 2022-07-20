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
            id: ""
        }
    )
    return (
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                <button onClick={handleClose} className="close_bt">X</button>
                <h3>Agregar un personaje</h3>
                </div>
                <div className="modal_body">
                    <label>NOMBRE</label>
                    <input type="text" className="modal_input"/>
                    <label>CUMPLEAÑOS</label>
                    <input type="text"className="modal_input"/>
                    <label>COLOR DE OJOS</label>
                    <input type="text"className="modal_input"/>
                    <label>COLOR DE CABELLO</label>
                    <input type="text"className="modal_input"/>
                    </div>
                    <div className="modal_labels">
                    <label>GÉNERO</label>
                    <label>POSICIÓN</label>
                    </div>
                    <div className="modal_checks">
                    <label>Mujer</label>
                    <input type="radio" checked/>
                    <label>Hombre</label>
                    <input type="radio"/>
                    <label>Estudiante</label>
                    <input type="radio" checked/>
                    <label>Staff</label>
                    <input type="radio"/>
                    </div>
                    <div className="modal_files">
                    <label>Fotografía</label>
                    <input type="file"/>
                    </div>
                    <button className="keep_btn">GUARDAR</button>
            {children}
            </div>
        </div> 
    )

}