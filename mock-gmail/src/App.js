//import './App.css';
import React from 'react';
import EmailList from './EmailList';

class App extends React.Component {
  constructor(){
    super();  
    this.state = {
        emails: [
          {
          sender:"katie@galvanize.com",
          recipient:"jane@galvanize.com","subject":"Standup meeting",
          message:"Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much.",
          date:"2020-08-23T18:25:43.511Z",
          id:1
        },
          {
          sender:"jean-marc@galvanize.com",
          recipient:"jane@galvanize.com","subject":"Retro meeting",
          message:"They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’thold with such nonsense.",
          date:"2020-04-23T18:25:43.511Z",
          id:2
        }
      ]
    }
  }

  //get emails from local host
  // async componentDidMount() {
  //   const url = "http://localhost:3001"; 
  //   const response = await fetch(url); 
  //   const data = await response.json() 
  //   this.setState({emails: data}) 
  // }
  
  render() {
    var someString = 'string';
    return <div>In the App component:
      <EmailList emailList={this.state.emails}/>
    </div>  
  }
}

export default App;
