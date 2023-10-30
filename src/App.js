import { Component } from "react";

import "./App.css";
import Skills from "./components/skills/skills.component";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

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

    const { users, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
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
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="search users"
            className="search-box"
          />
          <h2>LIST:</h2>
          <CardList users={filteredUsers} />
        </header>
        <Skills />
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
