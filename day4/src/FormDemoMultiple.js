import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(reservation));
    setReservation(initialValue);
 }
  
  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br/>
          <input
          name="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="LastName"
        />
         <br/>
         <input
          name="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
         <br/>
         <input
          name="phone"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
         <br/>
         <input
          name="street"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street"
        />
         <br/>
         <input
          name="city"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City"
        />
         <br/>
         <input
          name="zip"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip"
        />
         <br/>
         <input
          name="country"
          value={reservation.country}
          onChange={handleChange}
          placeholder="Country"
        />
         <br/>
         <br/>

         <input type="submit" value="Submit" />
         
        
      </form>
    </div>
  );
}
export default ReservationForm;





//Questions for Day4 (FORMS AND CONTROLLED COMPONENTS)

/* 

1) How do we ensure that input controls like text, textarea or select always presents 
   the value found in the components state?
   
   ANSWER: n HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and 
           update it based on user input. In React, mutable state is typically kept in the state property of components, 
           and only updated with setState().

2) What is the purpose of doing event.preventDefault() in an event handler?   
   
    ANSWER: The preventDefault() method cancels the event if it is cancelable, meaning that the default action
            that belongs to the event will not occur --> Clicking on a "Submit" button, prevent it from submitting a form.

3) What would be the effect of NOT doing event.preventDefault in a submit handler?
  
     ANSWER: We would not be able to operate with single page applications. (The page would be reloaded)

4) Why don't we want to submit the traditional way, in a single page application?

     ANSWER: Because then it wouldn't be considered as a single page application.
 
5) Explain in words what it takes to implement the "Controlled Component" pattern for a form   

      ANSWER: You need to write an event handler for every way your data can change and pipe all of the input state through a React component.
              (with submit-handling,change-handling).

*/