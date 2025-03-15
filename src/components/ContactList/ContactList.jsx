import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.length === 0 ? (
        <p className={css.noContactsMessage}>No contacts found 😔</p>
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <Contact 
              key={contact.id} 
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;