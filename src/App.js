import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ticket from './components/ticket'
import './App.css';
import Tickets from './components/tickets'

function App() {
  return (
    <div className="App">
    
     <Router>
    
       
        
        

         

        <Route exact path="/" component={Tickets} />
        <Route exact path="/:no" component={Ticket}  />

       
    </Router>
    </div>
  );
}

export default App;
