import App from "./App.js";
import React from 'react';
import EmailItems from './EmailItems';

//I want this to list all email messages
class EmailList extends React.Component {
  constructor(someObject)
  {
    super();
    this.state = {
      emails: someObject.emailList
    }
  }

  render(){
    
    var emailOutput = this.state.emails.map(element => (
      <div>
        <div>Sender: {element.sender}</div>
        <div>Subject: {element.subject}</div>
      </div>
    ));

    return (
      <div>
        {emailOutput}
        <EmailItems item={this.state.emails[0]}/>
      </div>)

  };
}

export default EmailList;