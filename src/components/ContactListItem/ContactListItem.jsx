import styles from './ContactListItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts';
import toast from 'react-hot-toast';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact has deleted');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <li key={id} className={styles.contactList_item}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} onClick={() => handleDelete(id)}>
        {isDeleting ? 'Deleting..' : 'Delete'}
      </button>
    </li>
  );
};
