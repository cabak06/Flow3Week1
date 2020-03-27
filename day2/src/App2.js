import React from 'react';
import './App.css';
import upper, {males, females}  from "./file2";


let person = upper;


const {firstName, email} = person;
const names = [...males, ...females];
const names2 = [...males,'Kurt','Helle',...females,'Tina'];

let personV2 = {
    email: upper.email,
    firstName: upper.firstName,
    friends: names,
    gender: upper.gender,
    lastName: upper.lastName,
    phone: 123456
}

function App() {
   
   //The person-Object is ready to be used ( Hint: Developers Tool)
    console.log(person);
    console.log(names);
    console.log(names2);
    console.log(personV2)
   

    return (
      <div className="App">
        
        <h1>Hello Friend</h1>
        <p>{firstName}, {email}</p>
  
      </div>
    );
  }
  
  export default App;
