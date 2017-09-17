import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {inject, observer} from 'mobx-react';


@inject('BridStore', 'userStore')
@observer
class App extends Component {



  render() {
    const { BridStore, userStore } = this.props;


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>

          {this.userLoggedIn()}

          <h2>You have {BridStore.bridCount} birds.</h2>
        </div>
        <form onSubmit={this.handleSubmite.bind(this)}>
          <input type="text" placeholder="Enter Text" ref={input => this.brid = input} />
          <button>Enter</button>
        </form>
        <ul>
          {BridStore.brids.map((brid, index) => (
             <li key={index}>{brid}</li>
          ))}
        </ul>
      </div>
    );
  }

  userLoggedIn(){
    if(this.props.userStore.firstName === ''){
      return(
          <div>
            <h1>Need User First Name</h1>
            <input type="text" ref='name' />
            <button onClick={this.setName.bind(this)}>Enter</button>
          </div>
      );
    }else{
      return(<h1>User Name : {this.props.userStore.fullName}</h1>);
    }
  }

  setName = (props) => {
    const {name} = this.refs;

    if(name.value != ''){
      this.props.userStore.firstName = name.value;
      this.userLoggedIn();
   }
  }

  handleSubmite = (event) => {
    event.preventDefault();
    const bridName = this.brid.value;
    this.props.BridStore.addBrid(bridName);
    this.brid.value = '';
  }
}

export default App;
