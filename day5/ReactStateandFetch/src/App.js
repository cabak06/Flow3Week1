import React, { useState, useEffect } from 'react';
import CountryTable from "./CountryTable";
import './App.css';
import countryFacade from './countryFacade';

const App = (props) => {
  const[headInfo, setHeadInfo] = useState([]);
  const[bodyInfo, setBodyInfo] = useState([]);

  const headerItm = async () => {
    const newLabel = await countryFacade.getLabels().then(data => {return data});
    await setHeadInfo(newLabel);
  }

  const bodyItm = async () => {
    const newCountry = await countryFacade.getCountries().then(data => {return data});
    await setBodyInfo(newCountry);
    
  }

  useEffect(() => {
    setInterval(bodyItm(), 3000);
    headerItm();
  },[]);

    return (
      <div>
        <div className="App-header">
          <h2>Country Information</h2>
        </div>
        <div className="App-intro">
                  
           <CountryTable head={headInfo} body={bodyInfo}/>
        </div>
      </div>
    );
};


export default App;




//Questions for General Part (Day5)

/* 

1) Describe the term Single Page Application and why it has become so popular for 
   modern web-applications?

   ANSWER: A single-page application (SPA) is a web application or website that interacts 
           with the web browser by dynamically rewriting the current web page with new data 
           from the web server, instead of the default method of the browser loading entire new pages.
           Since single-page applications don't update the entire page but only required content, they 
           significantly improve a website's speed and thereby they are resource/cost efficient.


 2) Explain the “recommended” React way of passing data into Components (at the top, or at the bottom or..)
      
    
    ANSWER: the recommended way of passing data into components is via the Parent/child relationship. (top->buttom flow).

 
  3) Explain how JavaScript array methods, like filter, map and (reduce) can be used to generate dynamic HTML structures 
     (tables, ul's etc.)

   
     ANSWER:  Basically in JS you can effecticely/dynamically use the array methods in order to manipulate data. For Example by 
             using MAP you can add html tags to your elements and combine them to a single string using the JOIN method.
             The filter is used to to sort your data into other arrays. 


  4) Explain about the Observer pattern, and where you have used it, both with Java and JavaScript?


     ANSWER: The observer pattern is a software design pattern in which an object, called the subject, maintains a list of 
             its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
             We have mainly used this design pattern when we have worked with event handling aspects of software.
*/