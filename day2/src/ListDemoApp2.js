import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    <table align="center" border="1">
      <thead>
            <th>Name</th>
            <th>Age</th>
      </thead>
      <tbody>
           {members.map(member => {
               return (
                <tr>
                    <td>{member.name}</td>
                    <td>{member.age}</td>
                </tr>

               );
           })}

      </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4 align="center">All Members</h4>
      <MemberTable members = {props.members}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
};




//QUESTIONS FOR DAY3 (List and Keys);
/*
1) What is the purpose of the key value, which must be given to individual rows in a react-list?
   ANSWER: Keys should be given to the elements in order to give the elements a stable identity.

2) It's recommended to use a unique value from your data if available (like an ID). How do you get a unique 
   value in a map callback, for data without a unique id?
   ANSWER: I didnt understand this question.

3) What is the difference(s) between state and props?
   ANSWER: props get passed to the component (similar to function parameters) whereas state 
           is managed within the component (similar to variables declared within a function).


4) For which scenarios would you use props, and for which would you use state?
   ANSWER: State is very usefull in handling user-events.
           Props is usefull in passing data from one component to another. Furthermore, props 
           data is read-only, which means that data coming from the parent should not be changed by child

5) Where is the only place you can set state directly as in:  this.state = {name: "Peter"};?
   ANSWER: In a class component.

6) How must you set state all other places?
   ANSWER: By declaring a const[name,setName] = useState(name);

*/