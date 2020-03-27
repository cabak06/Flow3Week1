import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {names} from './file2';


//function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>;
 // }
  

  class Welcome extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
  Welcome.propTypes = {
    name: PropTypes.string
  };

  
  function WelcomePerson(props){
  let {firstName, lastName, email} = props.getPerson;
  return <h1>Hello, {firstName} {lastName} {email}</h1>
  }


  function App() {
    
    
    return (
      <div>
        <Welcome name= 'Hello' />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        
        <WelcomePerson getPerson = {names[0]}/>
        <WelcomePerson getPerson = {names[1]}/>
        <WelcomePerson getPerson = {names[2]}/>


      </div>
    );
  }
  

  export default App;
