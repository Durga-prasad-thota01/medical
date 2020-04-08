import React from 'react';
import Nav from './components/Nav';
import Navi from './components/Navi';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

function App() {
  return (

    
    <BrowserRouter>  
        <div className="App"> 
           <Nav/>
            <Navi/>
                   <Switch> 
                           <Route exact path='/' component={Dashboard}/>  
                           <Route  path='/About' component={About}/>    
                           <Route  path='/Contact' component={Contact}/>    
                           <Route  path='/Products' component={Products}/>    
                               
                   </Switch> 
                             
                 <Footer/>
           </div>  
     </BrowserRouter>

  
  );
}

export default App;
