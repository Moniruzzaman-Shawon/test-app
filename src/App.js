import logo from './logo.svg';
import './App.css';

function App() {
  const laptop = ['Dell', 'Mac', 'Asus', 'Acer'];
  const phones = ['iPhone', 'Samsung', 'Pixel'];
  return (
    <div className="App">
      {/* loop */}

      {/* {
        laptop.map(lap => <li>Name: {lap}</li>)
      } */}

      <header className="App-header">
        <Person name="Nokia" brand='seventh'></Person>
        <Person name={laptop[0]} brand='one'></Person>
        <Person name={laptop[2]} brand='ninth'></Person>
        <Person name={laptop[1]} brand='three'></Person>
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
