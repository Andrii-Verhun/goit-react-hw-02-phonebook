import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmitForm = (evt) => {
    evt.preventDefault();
    const { target: { name, number } } = evt;
    this.setState((state) => {
      return {
        contacts: (
          [...state.contacts, {
            name: name.value,
            number: number.value,
            id: nanoid(),
          }]),
        name: '',
        number: '',
      };
    });
  };

  handleChangeInput = (evt) => {
    const { target: { name, value } } = evt;
    this.setState({
      [name]: value, 
    })
  };

  handleChangeFilter = (evt) => {

  };

  render() {
    return (
      <>
        <Form
          submit={this.handleSubmitForm}
          change={this.handleChangeInput}
          state={this.state}
        />
        <Contacts
          change={this.handleChangeInput}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  };
};
