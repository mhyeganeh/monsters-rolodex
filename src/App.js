import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {

    const [monsters, setMonsters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((monsters) => setMonsters(monsters))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const new_filtered_monsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchQuery)
        });
        setFilteredMonsters(new_filtered_monsters);
    }, [monsters, searchQuery]);

    const onSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase())
    };

    return (
        <div className='App'>
            <h1>Monster Rolodex</h1>
            <SearchBox
                className='monsters-search-box'
                placeholder="search monsters..."
                onChangeHandler={onSearchChange}
            />
            <br/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
