import {useState} from 'react';
import Modal from "./Modal";
function Header () {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <header>
        <button>FAVORITOS</button>
        <button onClick={handleShow}>AGREGAR</button>
        {showModal && <Modal handleClose={handleClose}></Modal>}
    </header>
  )
}
export default Header;
