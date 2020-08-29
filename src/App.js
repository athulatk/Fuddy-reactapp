import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Restaurantss from './Restaurantss';
import Resdetails from './Resdetails'
import Getid from './Getid';

function App() {
  return (
      <React.Fragment>
        
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:city" component={Getid} />
            <Route exact path="/:city/:id" component={Restaurantss} />
            <Route path="/:city/:id/:resid" component={Resdetails}/>
          </Switch>
          </Router>
          
      </React.Fragment>
  );
}

export default App;
