import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      name: { nickName: 'User', lastName: 'User' },
      company: 'Skynet'
  }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Dear {this.state.name.nickName} from {this.state.company}!
        </p>
        <button onClick={() => {
          this.setState(
            (state, props) => {
            return {
              name: { nickName: 'Developer', lastName: 'Developer' }, 
            };
          }, 
            () => {
              console.log(this.state)
            } 
          );
        }
      }
      >Change Name to Developer</button>
      </header>
    </div>
  );
}
}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Dear User
        </p>
      </header>
    </div>
  );
} */

export default App;
