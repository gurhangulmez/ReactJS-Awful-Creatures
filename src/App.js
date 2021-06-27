import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box-component/search-box-component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      creatures: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ creatures: users }));
  }

  render() {
    const { creatures, searchText } = this.state;
    const filteredCreatures = creatures.filter((creature) =>
      creature.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search the monster"
          handleChange={(e) => {
            this.setState({ searchText: e.target.value }, () =>
              console.log(e.target.value)
            );
          }}
        ></SearchBox>
        <CardList
          className="card-list"
          creatures={filteredCreatures}
        ></CardList>
      </div>
    );
  }
}

export default App;
