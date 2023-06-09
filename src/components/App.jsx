import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

  checkingForMatches = (value) => {
    return (
      (this.state.contacts).some((el) => (el.name.toLowerCase() === value.toLowerCase()))
    )
  };

  deleteContact = ({target: {id}}) => {
    const index = this.state.contacts.findIndex((el) => el.id === id);
  
    this.setState((state) => {
      const arr = [...state.contacts];
      arr.splice(index, 1);
      return {
        contacts: arr,
      };
    });
  };

  handleSubmitForm = (evt) => {
    evt.preventDefault();
    const { target: { name, number } } = evt;
    if (this.checkingForMatches(name.value)) {
      alert(`${name.value} is already in contacts`);
      return
    };
    this.setState((state) => {
      const newContacts = {
        contacts: (
          [...state.contacts, {
            id: nanoid(),
            name: name.value,
            number: number.value,
          }])
      };
      name.value = '';
      number.value = '';
      return newContacts;
    });
  };

  handleChangeInput = (evt) => {
    const { target: { name, value } } = evt;
    this.setState({
      [name]: value, 
    })
  };

  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form submit={this.handleSubmitForm}/>
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          change={this.handleChangeInput}
        />
        <ContactsList
          contacts={this.state.contacts.filter((el) => (el.name.toLowerCase().includes(this.state.filter.toLowerCase())))}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  };
};
