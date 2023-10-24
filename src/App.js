import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { nickName: "User", lastName: "User" },
      company: "Skynet",
      users: [],
      searchField: "",
    };
    console.log("1 ->constructor");
  }

  componentDidMount() {
    console.log("3 ->componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { users: data };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("2 ->render");

    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Dear {this.state.name.nickName} from {this.state.company}!
          </p>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  return {
                    name: { nickName: "Developer", lastName: "Developer" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name to Developer
          </button>
          <h2>Users:</h2>
          <input
            className="search-box"
            type="search"
            placeholder="search users"
            onChange={this.onSearchChange}
          />

          <h2>LIST:</h2>
          {filteredUsers.map((user) => {
            return (
              <div key={user.id}>
                <h3>{user.name}</h3>
              </div>
            );
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
