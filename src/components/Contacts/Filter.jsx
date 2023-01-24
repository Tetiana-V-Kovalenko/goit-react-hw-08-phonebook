import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { addFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const onChangeFilterContact = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <label className={css.labelFilter}>
      Find contacts by name
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilterContact}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
};
export default Filter;
