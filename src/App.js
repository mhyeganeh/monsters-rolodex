import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            monsters: [],
        }
    }

    componentDidMount() {
        this.getData();
    };

    getData () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => {
                this.setState({monsters: users})
            })
            .catch(err => console.log(err));
    };

    onSearchChange = (event) => {
        this.setState({
            searchQuery: event.target.value.toLowerCase()
        })
    };

    render() {

        const {onSearchChange} = this;
        const {searchQuery, monsters} = this.state;

        const filtered_monsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchQuery)
        });

        return (
            <div className='App'>

                <SearchBox
                    className='monsters-search-box'
                    placeholder="search monsters..."
                    onChangeHandler={onSearchChange}
                />
                <CardList monsters={filtered_monsters} />
            </div>
        );
    }
}

export default App;
