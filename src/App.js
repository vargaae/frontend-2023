import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      name: { nickName: 'User', lastName: 'User' },
      company: 'Skynet',
      skills: [{name: 'React'},
       {name: 'Angular'},
       {name: 'NodeJS'}],
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
      <h2>Skills:</h2>
      {this.state.skills.map((skill) => {
        return <h3>{skill.name}</h3>
      })}
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
