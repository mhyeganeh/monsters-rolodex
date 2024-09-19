import { Component } from "react";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => {
                this.setState({monsters: users})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='App'>
                {this.state.monsters.map((monster, index) => {
                    return <h1 key={monster.id}>{index+1}- {monster.name}</h1>
                })}
            </div>
        );
    }
}

export default App;
