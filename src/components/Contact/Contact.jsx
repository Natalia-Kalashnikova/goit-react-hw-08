import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin7Line } from "react-icons/ri";

import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';


const Contact = ({ contact: { id, name, number } }) =>{
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
      <div className={css.container}>
        <div className={css.text}>
          <p><FaUser className={css.icon} />&nbsp; {name}</p>
          <p><FaPhone className={css.icon} />&nbsp; {number}</p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.deleteBtn} onClick={() => onDelete(id)}>
          <RiDeleteBin7Line />
        </button>
        <button className={css.editBtn} onClick={() => onDelete(id)}>
          <GrEdit />
        </button>
      </div>
      </div>
    );
}

export default Contact;