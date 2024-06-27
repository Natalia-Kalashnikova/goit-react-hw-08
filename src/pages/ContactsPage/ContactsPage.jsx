import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import ConfirmModal from '../../components/ModalWindow/ConfirmModal';
import EditForm from '../../components/EditForm/EditForm';

import { fetchContacts } from '../../redux/contacts/operations';


const ContactPage=()=> {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEdit = contact => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setCurrentContact(null);
    setIsEditing(false);
  };

  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBox />

      {isEditing ? (
        <EditForm contact={currentContact} onClose={handleCancelEdit} />
      ) : (
        <ContactForm />
      )}

      {isLoading && <Loader />}
      <ContactList onEdit={handleEdit} />
      <ConfirmModal />
    </div>
  );
}


export default ContactPage;