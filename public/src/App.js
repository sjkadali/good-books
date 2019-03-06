import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import BookList from './components/BookList/BookList';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/books" component={BookList} />
                <Route component={Error} />
            </Switch>
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
