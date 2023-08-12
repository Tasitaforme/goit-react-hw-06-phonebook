import { ListItem, Button } from './ContactList.styled';
import { selectorContacts, selectorFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteСontact } from 'redux/contactsSlice';
import Notification from 'components/Notification/Notification';
import { toast } from 'react-hot-toast';

const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteСontact(contactId));
    toast.success('Contact deleted successfully');
  };

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {visibleContacts.length === 0 ? (
        <Notification message="Nothing found" />
      ) : (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <>
                <p>{name}:</p>
                <p>{number}</p>
                </>
                <Button type="button" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ContactList;
