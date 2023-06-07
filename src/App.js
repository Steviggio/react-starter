import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom'

import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <section>
              <h1> react-starter </h1>
              <h2> (React version 18.0.2) </h2>
            </section>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/NotFound">NotFound</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router >
    );
  }
}

export default App;