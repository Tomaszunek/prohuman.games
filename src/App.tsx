import * as React from 'react';
import {Observable} from "rxjs/Observable.js";
import './App.css';
import Navigation from './components/navigation/Navigation';


class App extends React.Component {
  
  public render() {
    return (
      <div>
        <Navigation/>
        <div className="container">
        <h1>My Website</h1>
      </div>
      </div>      
      
    );
  }
}


export default App;
