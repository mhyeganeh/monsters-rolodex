import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: {
                firstName: "M.Hasan",
                lastName: "Yeganeh",
            },
            country: "IRAN",
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>{this.state.name.firstName} {this.state.name.lastName},  from <b>"{this.state.country}"</b></p>
                    <button onClick={() => {
                        this.setState({name: {firstName: "John", lastName: "Doe"}, country: "USA"});
                    }}>
                        Change Name!
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
