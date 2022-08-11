import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import styles from './App.module.css';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, delContact, setFilter } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const newContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    dispatch(addContact({ name, number }));
    return true;
  };

  const visibleContacts = useMemo(() => {
    if (filter.length === 0) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, contacts]);

  return (
    <div className={styles.section}>
      <div className={styles.box}>
        <div className={styles.box}>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={newContact} />
        </div>

        <div className={styles.box}>
          <h3>Find contacts by name:</h3>
          <Filter
            onChange={e => dispatch(setFilter(e.currentTarget.value))}
            value={filter}
          />
        </div>

        <div className={styles.box}>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={contactId => dispatch(delContact(contactId))}
          />
        </div>
      </div>
    </div>
  );
};
