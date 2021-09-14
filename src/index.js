import React , { Component } from "react";
import ReactDOM , { render } from "react-dom";
import Hello from './Hello';
import './style.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="rectangle" >

      <div className="main">
         
    
        <form className='form'>
        <h1>
          Add Education
        </h1>
        <hr/>
          <h2>
            School <br/>
            <input placeholder = "eg. Oxford" size="75" required />
          </h2>
          <h2>
            Degree <br/>
            <input placeholder = "eg. Btech" size="75" required />
          </h2>
          <h2>
            Field-Of-Study <br/>
            <input placeholder = "eg. Computer Science" size="75" required />
          </h2>
          <h2>
            Grade <br/>
            <input placeholder = "eg. Percentage" size="75" required />
          </h2>
          <h2>
            Activities and Socities <br/>
            <input placeholder = "eg. Volleyball,competitions etc" size="75" required />
          </h2>
          <h2>
          Location<br/>
            <input placeholder = "eg. Tamil Nadu" size="75" required />
          </h2>

         
         <h2  className="Start">
          Start Date <br/>
            <input placeholder = "Month" type="Date" id = "startdate"  required />
            
          </h2>

          <h2  className="end" >
          End Date <br/>
            <input placeholder = "Month" type="Date" id = "enddate"  required />

          </h2>
        
        
          
          <h2>
            Description <br/>
            <textarea id="w3review" name="w3review" placeholder = "eg. @Oxford"  rows="6" cols="80" required/>    
          </h2> 
          <button form='form' className="Submit">Cancel</button>
        <button form='form' className="Submit1">Save</button>
        </form>
        

      </div>
      
       
        
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));
