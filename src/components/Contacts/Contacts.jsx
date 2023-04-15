// import PropTypes from 'prop-types';

import css from './Contacts.module.css';

export const Contacts = ({ contacts, change, filter }) => {
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Contacts</h2>
            <label className={css.label} htmlFor="filter">Find contacts by name</label>
            <input
                className={css.input}
                onChange={change}
                value={filter}
                type="text"
                name="filter"
                id='filter'
            />
            <ul>
                {contacts.filter((el) => (
                    el.name.toLowerCase().includes(filter.toLowerCase())
                )).map((el) => (
                    <li className={css.item} key={el.id}>
                        <p className={css.contact}>{el.name}: {el.number}</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
};