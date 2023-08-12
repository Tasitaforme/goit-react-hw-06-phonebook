import {ContactForm} from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { Container, Title, toastOptions } from './App.styled';

import { useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors';

import { Toaster } from 'react-hot-toast';

const App = () => {
const contacts = useSelector(selectorContacts);

  const isEmptyContactList = contacts.length === 0;

  return (
    <Container>
      <h1>Phonebook</h1>
      <Notification message="Add number to contacts" />
      <ContactForm />

      <Title>Contacts</Title>
      {isEmptyContactList ? (
        <Notification message="Your phonebook is empty" />
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      <Toaster toastOptions={toastOptions} />
    </Container>
  );
}

export default App;