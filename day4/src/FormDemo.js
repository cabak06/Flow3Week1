import React, {useState} from "react";

const NameForm = () => {
    const [name,setName] = useState("");
    
  
  
    function handleChange(event) {
    const target = event.target.value;
    setName(target);
    
  
    }
    function handleSubmit(event) {
       event.preventDefault();
    }
   
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input id="input-name" type="text"  onChange = {handleChange} />  
          </label>
          <input type="submit" value="Submit" />
        </form>
        {name}
      </div>
    );
  };

 
export default function FormDemo() {
  return (
    <div align="center" style={{marginTop:25}}>
      <h1>Hello Form-Demo</h1>
      <NameForm />
      
    </div>
  );
}

