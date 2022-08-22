
import { useCallback, useEffect} from "react"
import { useSelector, useDispatch , shallowEqual } from "react-redux";

import Filter from "./Filter";
import TitlePhonebook from "./TitlePhonebook";
import Form from "./Form"
import ContactList from "./ContactList";

import {getContacts, getError,getLoading, geFilter } from "../../redux/phoneBook/phoneBook-selecctor";

import * as operations from "../../redux/phoneBook/phoneBook-actions";

const Phonebook = () => {
    const dispatch = useDispatch()

    const contacts = useSelector(getContacts, shallowEqual);
    const isLoading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  const filter = useSelector(geFilter, shallowEqual);
  
    

    useEffect(() => {
    dispatch(operations.getContacts());
    }, [dispatch]);

    const addContacts = useCallback(
      data => {
        
        return dispatch(operations.addContact(data));
    },
    [dispatch]
    );

    const deleteContacts = useCallback(
    id => {
      return dispatch(operations.removeContact(id));
    },
    [dispatch]
  );

  const changeFilter = useCallback(
    e => {
      
      dispatch(operations.filter(e.target.value));
    },
    [dispatch]
  );

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterRequest = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const res = name.toLowerCase().includes(filterRequest);
      return res;
    });

    return filteredContacts;
  };


    return ( 
            <div>
                <TitlePhonebook title='Phonebook'/>
            <Form
                onSubmit={addContacts}
            />
            <TitlePhonebook
                title='Contacts'
            />
            <Filter
                onChange={changeFilter}
                filter={filter || ''}
            />
                <ContactList
                    contacts={getFilteredContacts()}
                    deleted={deleteContacts}
            />

            {!isLoading || <p>loading....</p>}
            {!error || <p>{error.massage}</p>}
            </div>
        )
}


export default Phonebook