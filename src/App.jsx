import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className="appWrapper">
      <div className="formWrapper">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <div className="listWrapper">
        <ContactList />
      </div>
    </div>
  );
}

export default App;