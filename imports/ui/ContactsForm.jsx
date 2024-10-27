import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");

  const saveContact = () => {
    console.log("Attempting to save contact:", { name, email, imageURL });
    Meteor.call('contacts.insert', { name, email, imageURL }, (error) => {
      if (error) {
        alert(`Error: ${error.reason}`);
      } else {
        setName("");
        setEmail("");
        setImageURL("");
      }
    });
  };

  return (
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
      </div>
      <div>
        <label htmlFor='imageURL'>Image URL</label>
        <input id="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} type="text"/>
      </div>
      <button type="button" onClick={saveContact}>Save Contact</button>
    </form>
  );
};