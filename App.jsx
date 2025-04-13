import { useState } from 'react';
import './App.css';
import { Component } from 'react';


const Header = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Name: Katta Jignesh</h2>
      <h3>Reg No: 23BCE5077</h3>
      <hr />
    </div>
  );
};

// 1
const HelloReactNoJSX = () => {
  return React.createElement('h1', null, 'Hello, React!');
};

const HelloReactJSX = () => {
  return <h1>Hello, React! (With JSX)</h1>;
};

const HelloWithVar = () => {
  const message = "Hello from variable!";
  return <h1>{message}</h1>;
};

// 2. Fruit List
const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)}
    </ul>
  );
};

// 3
const StyledMessage = () => {
  const style = { color: 'purple', fontWeight: 'bold', fontSize: '22px' };
  return <p style={style}>Inline Styled Message!</p>;
};

// 4
const SumOfSquares = () => {
  const a = 3, b = 4;
  const sum = a * a + b * b;
  return <p>Sum of squares of {a} and {b} is {sum}</p>;
};

// 5
const Greeting = ({ isMorning }) => {
  return <h3>{isMorning ? 'Good Morning' : 'Good Evening'}</h3>;
};

// 6
const DayDisplay = () => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today = days[new Date().getDay()];
  return <p>Today is {today}</p>;
};

// 7
const PrimeCheck = ({ number }) => {
  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  return <p>{number} is {isPrime(number) ? 'Prime' : 'Not Prime'}</p>;
};

// 8. 
class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = { celsius: '', fahrenheit: '' };
  }

  handleCelsius = (e) => {
    const celsius = e.target.value;
    const fahrenheit = celsius !== '' ? (celsius * 9/5 + 32).toFixed(2) : '';
    this.setState({ celsius, fahrenheit });
  };

  handleFahrenheit = (e) => {
    const fahrenheit = e.target.value;
    const celsius = fahrenheit !== '' ? ((fahrenheit - 32) * 5/9).toFixed(2) : '';
    this.setState({ fahrenheit, celsius });
  };

  render() {
    return (
      <div>
        <input type="number" value={this.state.celsius} onChange={this.handleCelsius} placeholder="Celsius" />
        <input type="number" value={this.state.fahrenheit} onChange={this.handleFahrenheit} placeholder="Fahrenheit" />
      </div>
    );
  }
}

// 9
const ReverseString = ({ str }) => {
  const reversed = str.split('').reverse().join('');
  const isPalindrome = str === reversed;
  return (
    <>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? 'Palindrome' : 'Not a Palindrome'}</p>
    </>
  );
};

// 10
const RandomNumber = () => {
  const [num, setNum] = useState(null);
  return (
    <div>
      <button onClick={() => setNum(Math.floor(Math.random() * 100) + 1)}>Generate Random</button>
      {num && <p>Random Number: {num}</p>}
    </div>
  );
};

// 11
const LeapYearCheck = ({ year }) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return <p>{year} is {isLeap ? 'a Leap Year' : 'not a Leap Year'}</p>;
};

// 12
class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h2>Hello, {firstName} {lastName}!</h2>;
  }
}


function App() {
  return (
    <div className="App">
      <Header />
      <HelloReactNoJSX />
      <HelloReactJSX />
      <HelloWithVar />
      <hr />
      <FruitList />
      <hr />
      <StyledMessage />
      <hr />
      <SumOfSquares />
      <hr />
      <Greeting isMorning={true} />
      <hr />
      <DayDisplay />
      <hr />
      <PrimeCheck number={7} />
      <hr />
      <TemperatureConverter />
      <hr />
      <ReverseString str="React" />
      <hr />
      <RandomNumber />
      <hr />
      <LeapYearCheck year={2024} />
      <hr />
      <UserGreeting firstName="Katta" lastName="Jignesh" />
    </div>
  );
}

export default App;
