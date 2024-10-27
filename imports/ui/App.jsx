import React from 'react';
import { ContactForm } from '../ui/ContactsForm';
import { ContactList } from './ContactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm />
    <ContactList />
  </div>
);
