import React,{ useState, useEffect } from 'react';
import './App.css';


//DAY 2 -- STATE AND EVENTS WITH REACT


//Exercise 1
function IncrementAndDecrement(prop) {

  const [count, setCount] = useState(prop.init);
  
  return (
    <div>
      <p> Click-Value {count} </p>
      <button onClick={() => setCount(count + prop.init)}>
        Incremental/Click
      </button>
      
      <button onClick={() => setCount(count - prop.init)}>
        Decremental/Click
      </button>
    </div>
  );
}



//Exercise 2

function DisplayTime() {
  let actualTime = new Date().toLocaleTimeString();
  let [time, setTime] = useState(actualTime);

  useEffect(() => {
    const interval = setInterval(() => {
      let updatedTime = new Date().toLocaleTimeString();
        setTime(updatedTime);}, 1000);
    
        return () => clearInterval(interval);
}, []);
  return <h3>{time}</h3>;
  
}



//Exercise 3

function GetChuckJoke(){

 let urlChuck =  'https://api.chucknorris.io/jokes/random'; 
 let urlDad = 'https://icanhazdadjoke.com/';

 const [fetchedJoke, setFetchedJoke] = useState([]);
 const[dadJoke, setDadJoke] = useState([]);


 const jokeHandler = () => {
     fetch(urlChuck)
     .then(res => res.json())
     .then(data => {
     setFetchedJoke(data);
     });
 };
 

 useEffect(() => {
  const interval = setInterval(() => {
    setDadJoke(
      fetch(urlDad, {
        headers: new Headers({
          accept: "application/json"
        })
      })
        .then(res => res.json())
        .then(data => {
          setDadJoke(data);
        })
    );
  }, 10000);
  return () => clearInterval(interval);
}, []);


 return (
   <div>
   <button onClick={jokeHandler}>ChuckJoke</button>
   <p>{fetchedJoke.value}</p>
   <h3>Here Comes the Dad Jokes every 10'th second</h3>
   <p>{dadJoke.joke}</p>
   
   </div>
 );

}

function App() {
  return (
    <div className="App">
     
     <h1>Exercise1</h1>
     <IncrementAndDecrement init = {5}/>
     
      <h1>Exercise2</h1>
      <DisplayTime/>

      <h1>Ecercise3</h1>
       <GetChuckJoke/>
       
  
      
    </div>
  );
}

export default App;
