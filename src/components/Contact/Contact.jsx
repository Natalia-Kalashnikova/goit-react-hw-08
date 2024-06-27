import { FaUser, FaPhone } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';

import css from './Contact.module.css';


const Contact=({ contact, onEdit })=> {
  const dispatch = useDispatch(contact.id);

  const handleOpenModal = () => dispatch(openModal(contact.id));

  const handleEdit = () => {
    onEdit(contact);
  };

  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <span className={css.contact_line}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={css.contact_line}>
          <FaPhone />
          <p>{contact.number}</p>
        </span>
      </div>
      <div className={css.button_container}>
        <button
          className={css.deleteCntBtn}
          type="button"
          onClick={handleOpenModal}
        >
          <AiOutlineDelete />
        </button>
        <button className={css.editButton} type="button" onClick={handleEdit}>
          <GrEdit />
        </button>
      </div>
    </div>
  );
}


export default Contact;



