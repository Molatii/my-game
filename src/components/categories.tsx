import '../App.css'
//import Login from './components/login';
import {Switch} from 'react-router-dom';
import Aminal_questions from '../components/questions_categories/aminal_questions';
import Math_questions from './questions_categories/math_questions';
import General_questions from './questions_categories/general_questions'
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";



function categories() {
  function Content() {
    let General_history = useHistory();
    let Math_loghistory = useHistory();
    let Animal_cahistory = useHistory();
  
    const General_Click = () => General_history.push("/General_questions");
    const Math_logClick = () => Math_loghistory.push("/Math_questions");
    const Animal_Click = () => Animal_cahistory.push("/Aminal_questions");
    
    return (
        <main> 
            <button  className='my_btn' onClick={General_Click} >General_questions</button> 
            <button  className='my_btn' onClick={Math_logClick} >Math_questions</button>   
            <button  className='my_btn' onClick={Animal_Click} >Football_questions </button>       
        </main>
     );

    }


    return (
      <div>
        <header>
              <div className='my_title2'>Select Any Categories</div>
        </header>

        <Router>
        <Switch>
                <Route path="/General_questions" exact component={General_questions} />           
                <Route path="/Math_questions" exact component={Math_questions} />
                <Route path="/Aminal_questions" exact component={Aminal_questions} />

                <Route path="/"  component={Content} />
      </Switch>
               
       </Router>            

          
      </div>
    );
  }
  export default categories;