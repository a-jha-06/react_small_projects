import './App.css';
import Header from './components/header/header';
import Counter from './components/counter/counter';
import TodoList from './components/to-do/to-do';
import About from './components/about/about';




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
        <Counter />

      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
