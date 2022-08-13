import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  delContact,
  contactsSelector,
  filterSelector,
} from '../../redux/contactsSlice';
import { useMemo } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

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
    <ul className={styles.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactList_item}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            onClick={() => dispatch(delContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
