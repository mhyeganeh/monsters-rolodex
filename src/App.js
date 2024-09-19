import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
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
        this.setState({searchQuery: event.target.value})
    };

    render() {

        const {searchQuery, monsters} = this.state;
        const {onSearchChange} = this;

        const filtered_monsters = monsters.filter((monster) => {
            return monster.name.includes(searchQuery)
        });

        return (
            <div className='App'>

                <input type="search"
                       className='search-box'
                       placeholder='search monsters...'
                       onChange={onSearchChange}
                />

                <CardList monsters={filtered_monsters} />
            </div>
        );
    }
}

export default App;
