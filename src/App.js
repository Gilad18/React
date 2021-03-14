import logo from './logo.svg';
import './App.css';

const data = ['Hello',' ','World'];

const num1 = 5;
const num2 = 6;

const string = 'I love React';

const sum = (x,y) => {
  return x+y;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data}</h2>
        <h3>{num1}+{num2}={sum(num1,num2)}</h3>
        <h4>The string length is {string.length}</h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
