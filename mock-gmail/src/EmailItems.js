import App from "./App.js"
import React from 'react';
import EmailList from './EmailList';

//I want this to show a view of one email message with all of its details
class EmailItems extends React.Component {
  constructor(someObject)
  {
    super();
    this.state = {
      email: someObject.item
    }
  }

  render(){

    var email = this.state.email;
    console.log(email)
    return (<div>
      <ul>Sender: {email.sender}</ul>
      <ul>Subject: {email.subject}</ul>
      <ul>Message: {email.message}</ul>
      <ul>Date: {email.date}</ul>
    </div>)

  };
}

export default EmailItems;