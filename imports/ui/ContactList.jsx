import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import {useTracker} from 'meteor/react-meteor-data';



export const ContactList = () => {

const contacts = useTracker(()=> {

    const handler = Meteor.subscribe('contacts');
    
   return ContactsCollection.find({}).fetch();
})

    return (
        <>
        <h3>List Of Contacts</h3>
        {contacts.map(contact => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>
        ))}
        </>
    )
}