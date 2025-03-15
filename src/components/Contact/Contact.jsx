import css from './Contact.module.css';
import { BiSolidPhone, BiSolidUser } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactCard} key={id}>
      <div className={css.contactInfo}>
        <div className={css.contactName}>
          <BiSolidUser></BiSolidUser>
          <p className={`${css.textStyle} ${css.tooltip}`} title={name}>
            {name}
          </p>
        </div>
        <div className={css.contactPhone}>
          <BiSolidPhone></BiSolidPhone>
          <p className={`${css.textStyle} ${css.tooltip}`} title={number}>
            {number}
          </p>
        </div>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;