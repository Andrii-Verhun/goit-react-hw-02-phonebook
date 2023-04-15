import PropTypes from 'prop-types';

import { Contact } from './Contact/Contact';

import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, filter, deleteContact }) => {
    return (
        <div className={css.wrapper}>
            <ul>
                {contacts.filter((el) => (
                    el.name.toLowerCase().includes(filter.toLowerCase())
                )).map((el) => (
                    <Contact
                        key={el.id}
                        name={el.name}
                        number={el.number}
                        click={deleteContact}
                        id={el.id}
                    />)
                )}
            </ul>
        </div>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}