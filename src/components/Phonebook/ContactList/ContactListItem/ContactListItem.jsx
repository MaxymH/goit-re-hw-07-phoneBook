import PropTypes from 'prop-types';

import s from './contactListItem.module.css'

const ContactListItem = ({ options, deleted }) => {
    
    const [name, number, id] = options;
    return (
    <li className={s.item} >
        {name}: {number}
            <button
                className={s.button}
        type="button"
        onClick={() => deleted(id)}
        >
        Delete
        </button>
    </li>
    )
}

ContactListItem.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    deleted: PropTypes.func.isRequired,
}


export default ContactListItem