import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import styles from './App.module.css';

export const App = () => (
  <div className={styles.section}>
    <div className={styles.box}>
      <div className={styles.box}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={styles.box}>
        <h3>Find contacts by name:</h3>
        <Filter />
      </div>

      <div className={styles.box}>
        <ContactList />
      </div>
    </div>
  </div>
);
