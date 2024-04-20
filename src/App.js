import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Nokia" brand='seventh'></Person>
        <Person name='Samsung' brand='second'></Person>
        <Person name='Xiaomi' brand='fifth'></Person>
        <Friend phone='Apple'></Friend>
        <Friend phone='Dell'></Friend>
        <Friend phone='HP'></Friend>
      </header>
    </div>
  );
}

/* dynamically added data using props */

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.brand}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='friend'>
      <h1>{props.phone}</h1>
      <p>Opening Boom</p>
    </div>
  )
}
export default App;
