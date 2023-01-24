import PropTypes from 'prop-types';
import { Text, Input } from '@chakra-ui/react';
import { addFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const onChangeFilterContact = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <>
      <Text as="label" m="10px 0" display="block">
        Find contacts by name{' '}
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilterContact}
        />
      </Text>
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
};
export default Filter;
