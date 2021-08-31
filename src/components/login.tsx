import '../App.css';
import Categories from './categories';
//import React, {useState} from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";




function login() {
  function Content() {
    let inhistory = useHistory();
    
  
    const inClick = () => inhistory.push("/Categories");
      
    return (
             <div>
             <button  className='btn' onClick={inClick}>Log In</button> 
                
             </div>
     );
  
    }

    return (
        <div>     
     
     <form className='register_form'>
           <br/>
           <label htmlFor="user name" className="my_labels"> User Name </label>
           <input type="text" className="data"/> <br/>

           <label htmlFor="user Password" className="my_labels">Password</label>
           <input type="text" className="data" /> <br/> 
           <br/>  
  
           <Router>
                <Route path="/Categories" exact component={Categories} />
                <Route path="/"  component={Content} />
           </Router>
           
  
           </form>

         
                 
      </div>
    );
  }
  export default login;