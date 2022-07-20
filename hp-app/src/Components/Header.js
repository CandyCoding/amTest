import {useState} from 'react';
import Modal from "./Modal";
import{MdPersonAddAlt1} from 'react-icons/md';
import {BsFillBookmarkFill} from 'react-icons/bs';
function Header () {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <header>
        <button className='button_header_one'>FAVORITOS<BsFillBookmarkFill/></button>
        <button className='button_header_two' onClick={handleShow}>AGREGAR<MdPersonAddAlt1/></button>
        {showModal && <Modal handleClose={handleClose}></Modal>}
    </header>
  )
}
export default Header;
