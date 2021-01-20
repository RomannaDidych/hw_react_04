import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import Main from './Components/Main/main';
import Posts from './Components/Post/Posts';
import Contacts from './Components/Contacts/Contracts';
import Single from './Components/Contacts/Single';
import Pictures from './Components/Pictures/Pictures';

function App() {
  return (
    
   <div className= 'wrapper'>
        <div className= 'bg-image'>      
          
        <Router className= 'router'>   
               <div className='nav'>
                  <NavLink className='app-link' to='/' activeClassName='active-link'>Головна</NavLink>
                  <NavLink className='app-link' to='/posts' activeClassName='active-link'>Публікації</NavLink>
                  <NavLink className='app-link' to='/pictures' activeClassName='active-link'>Галерея</NavLink>
                  <NavLink className='app-link' to='/contacts' activeClassName='active-link'>Contacts</NavLink>                 
               </div>               
      
               <switch className='switch'>
                  <Route path='/main' component= {Main} exact/>
                  <Route path='/posts' component= {Posts} exact/>
                  <Route path='/pictures' component= {Pictures} />
                  <Route path='/contacts' component= {Contacts} exact/>                 
                  <Route path='/contacts/:firstName' component= {Single} />                  
                  <Route path='/' component= {Main} exact/>
                 
                </switch>
        </Router>
        </div>
    </div>
    
  );
}

export default App;


