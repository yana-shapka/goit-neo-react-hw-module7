import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContacts} from './redux/contactsOps';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import Loader from './components/Loader/Loader';
import {
  selectLoading,
  selectError,
  selectContacts,
} from './redux/contactsSlice';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="appWrapper">
      <div className="formWrapper">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <div className="listWrapper">
        {isLoading && <Loader />}

        {error && <p>Error: {error}</p>}

        {!isLoading && contacts.length === 0 && !error && (
          <p>No contacts found</p>
        )}

        {!isLoading && contacts.length > 0 && <ContactList />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
