import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/contactsOps';
import css from './Contact.module.css';
import {BiSolidPhone, BiSolidUser} from 'react-icons/bi';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import {toast} from 'react-toastify';

const Contact = ({id, name, number}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDeleteClick = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setModalVisible(false);
    toast.success('Contact deleted successfully!');
  };

  return (
    <li className={css.contactCard} key={id}>
      <div className={css.contactInfo}>
        <div className={css.contactName}>
          <BiSolidUser />
          <p className={`${css.textStyle} ${css.tooltip}`} title={name}>
            {name}
          </p>
        </div>
        <div className={css.contactPhone}>
          <BiSolidPhone />
          <p className={`${css.textStyle} ${css.tooltip}`} title={number}>
            {number}
          </p>
        </div>
      </div>

      <button className={css.deleteButton} onClick={handleDeleteClick}>
        Delete
      </button>

      <ConfirmationModal
        isVisible={isModalVisible}
        onCancel={handleCancel}
        onConfirm={handleConfirmDelete}
      />
    </li>
  );
};

export default Contact;
