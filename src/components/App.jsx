import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Form } from '../components/Form/Form';
import { Section } from './Section/Section';

import { ContactsList } from './ContactsList/ContactsList';
export class App extends Component {
  onChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    return (
      <>
        <Section title={'PhoneBook'}>
          <Form
            addContactsData={this.addContactsData}
            onChangeFilter={this.onChangeFilter}
          />
        </Section>
        <Section title={'Contacts'}>
          <Filter />
          <ContactsList />
        </Section>
      </>
    );
  }
}
