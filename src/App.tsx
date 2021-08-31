import './App.css';
//import { Link } from 'react-router-dom';
import {Switch} from 'react-router-dom';
//import {useHistory} from 'react-router-dom';
import Categories from './components/categories';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

function Content() {
  let history = useHistory();
  let loghistory = useHistory();
  //let cahistory = useHistory();

  const handleClick = () => history.push("/Register");
  const logClick = () => loghistory.push("/Login");
  //const caClick = () => loghistory.push("/Categories");
  
  return (
           <main>
           <button  className='my_btn' onClick={handleClick}>Register</button> 
           <button  className='my_btn' onClick={logClick}>Login</button>          
           </main>
   );



  }


function App() {


  return (
    <div>
        <header>
          <div className='my_title'>GAME Quiz</div>
        </header>
        <Router>
        <Switch>
                <Route path="/Register" exact component={Register} />           
                <Route path="/Login" exact component={Login} />
                <Route path="/Categories" exact component={Categories} />

                <Route path="/" exact component={Content} />
      </Switch>
               
       </Router>

    </div>
  );
}

export default App;
