import { Component } from "react";
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

    getData = () => {
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
        const filtered_monsters = this.state.monsters.filter((monster) => {
            return monster.name.includes(this.state.searchQuery)
        });

        return (
            <div className='App'>

                <input type="search"
                       className='search-box'
                       placeholder='search monsters...'
                       onChange={this.onSearchChange}
                />

                {filtered_monsters.map((monster, index) => {
                    return <h1 key={monster.id}>{index+1}- {monster.name}</h1>
                })}
            </div>
        );
    }
}

export default App;
