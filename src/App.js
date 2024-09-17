import './App.css';
import Header from './components/header/header';
import Counter from './components/counter/counter';
import TodoList from './components/to-do/to-do';
import About from './components/about/about';
import Carousel from './components/carousel/carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {


  return (
    <div className="App">

      <div className='header'>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Counter />

      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
