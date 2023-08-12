import { Container } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(selectorFilter);
  const dispatch = useDispatch();
  
  const onChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <Container>
      <label htmlFor="input_filter">Find contacts by name</label>

      <Input
        id="input_filter"
        type="text"
        name="filter"
        placeholder="Start enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};
export default Filter;

