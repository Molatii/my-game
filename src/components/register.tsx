import '../App.css';
import { Link } from 'react-router-dom';
import Categories from './categories';
//import React, {useState} from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";




function register() {
  function Con() {
    let reghistory = useHistory();
  
    const regClick = () => reghistory.push("/Categories");
      
    return ( <>
             <button  className='btn'  onClick={regClick}> Register</button> 
              </>
     );
  
    }
    return (
     <div>
        
        
     <form className='register_form' >
           <br/>
           <label htmlFor="user name" className="my_labels"> User Name </label>
           <input type="text" className="data" /> <br/>

           <label htmlFor="user Password" className="my_labels">Ur Password</label>
           <input type="text" className="data" /> <br/> 
           <br/> 
    
           <label htmlFor="user screen name" className="my_labels">Screen Name</label>
           <input type="text" className="data"/> <br/> 
           <br/>  
  
           <Router>
              <Route path="/Categories"   component={Categories} />
              <Route path="/"   component={Con} />      
 
          </Router>
          
           </form>

           

  
                 
      </div>
    );
  }
  export default register;