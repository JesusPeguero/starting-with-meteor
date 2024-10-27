import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '/imports/api/ContactsCollection';

Meteor.publish('contacts',function (){
  return ContactsCollection.find()
});

Meteor.methods({
  'contacts.insert'(contact) 
  {
    console.log("inserting contact: " ,contact);
    ContactsCollection.insertAsync({
      name: contact.name,
      email: contact.email,
      imageURL: contact.imageURL,
      createdAt: new Date(),
      
    }
  );
  console.log("Inserting Contact:", contact);  
  },

});

Meteor.startup(() => {
  // Código que se ejecuta en el arranque del servidor
});