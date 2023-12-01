import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from'./SearchBox';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    onSearchBoxChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        var searchValue = this.state.searchField.toLowerCase();
        const filteredRoboFriends = this.state.robots.filter(robo => {
            return robo.username.toLowerCase().indexOf(searchValue)>-1 || robo.name.toLowerCase().indexOf(searchValue)>-1 || robo.email.toLowerCase().indexOf(searchValue)>-1;
        });

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchBoxChange}/>
                <CardList robots = {filteredRoboFriends}/>
            </div>
        )
    }
}

export default App;