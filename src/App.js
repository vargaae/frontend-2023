import { useState, useEffect } from 'react';

import "./App.css";
import Skills from "./components/skills/skills.component";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p>
          Hi Dear User
        </p>
      </header>
    </div>
  );
} */

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [users, setUsers] = useState([]);
  console.log( searchField )

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
}, [])

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      };

      const filteredUsers = users.filter((user) => {
              return user.name.toLocaleLowerCase().includes(searchField);
            });

  return (
    <div className="App">
        <img src='https://ei.marketwatch.com/Multimedia/2018/02/13/Photos/ZQ/MW-GD647_skynet_20180213113524_ZQ.jpg?uuid=e41f2218-10db-11e8-b127-9c8e992d421e' className="App-logo" alt="logo" />
          <h1 className="app-title">
            SKYNET
          </h1>
          <SearchBox
              onChangeHandler={onSearchChange}
              placeholder="search users"
              className="users-search-box"
            />
          <h2>Users/Developers:</h2>
           <CardList users={filteredUsers} />

        <Skills />
      </div>
  )
}
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: { nickName: "User", lastName: "User" },
//       company: "Skynet",
//       users: [],
//       searchField: "",
//     };
//     console.log("1 ->constructor");
//   }

//   componentDidMount() {
//     console.log("3 ->componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState(
//           () => {
//             return { users: data };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("2 ->render");

//     const { users, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredUsers = users.filter((user) => {
//       return user.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <header className="App-header">
//         <img src='https://ei.marketwatch.com/Multimedia/2018/02/13/Photos/ZQ/MW-GD647_skynet_20180213113524_ZQ.jpg?uuid=e41f2218-10db-11e8-b127-9c8e992d421e' className="App-logo" alt="logo" />
//           <h1 className="app-title">
//             Welcome Dear {this.state.name.nickName} in {this.state.company}!
//           </h1>
//           <button
//             onClick={() => {
//               this.setState(
//                 (state, props) => {
//                   return {
//                     name: { nickName: "Developer", lastName: "Developer" },
//                   };
//                 },
//                 () => {
//                   console.log(this.state);
//                 }
//               );
//             }}
//           >
//             Change Name to Developer
//           </button>
//           <h2>Users/Developers:</h2>
//           <SearchBox
//             onChangeHandler={onSearchChange}
//             placeholder="search users"
//             className="users-search-box"
//           />
//           <CardList users={filteredUsers} />
//         </header>
//         <Skills />
//       </div>
//     );
//   }
// }

export default App;
