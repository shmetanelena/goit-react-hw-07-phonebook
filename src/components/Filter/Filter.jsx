import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, filterSelector } from '../../redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  return (
    <div className={styles.box}>
      <input
        type="text"
        className={styles.input}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value={filter}
      />
    </div>
  );
};
