import { Component } from "react";

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div>
                {monsters.map((monster, index) => {
                    return <h1 key={monster.id}>{index + 1}- {monster.name}</h1>
                })}
            </div>
        );
    }
}

export default CardList;
