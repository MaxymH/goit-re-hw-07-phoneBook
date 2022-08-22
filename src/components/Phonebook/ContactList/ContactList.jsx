
import PropTypes from 'prop-types';

import ContactListItem from "./ContactListItem";


const ContactList = ({ contacts, deleted }) => {
    const elements = contacts.map(({ id, name, number }) => {
            return(
            <ContactListItem
            key={id}
                options={[name, number, id]}
                deleted={deleted}
        />
        )
        
    })
        return (
            <ul>
                {elements}
            </ul>
        )
}

ContactList.defaultProps = {
    contacts: [],
};

ContactList.propTypes ={
    deleted: PropTypes.func,
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                number: PropTypes.string,
                id: PropTypes.string,
            })
        ),
}

export default ContactList;