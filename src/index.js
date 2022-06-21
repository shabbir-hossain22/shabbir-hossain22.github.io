import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  , Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Gallery from './components/gallery/gallery';


ReactDOM.render( <BrowserRouter> <Routes>
    <Route path = '/gallery' element = {<Gallery />}>            
    </Route>
    <Route exact path = '/' element = {  <App />   }>            
    </Route>
</Routes>  
    
    </BrowserRouter>   , 
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
