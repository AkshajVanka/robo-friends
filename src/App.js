import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from'./SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                users.forEach(user => {
                    user.id = user.id * Math.random();
                    user.set = Math.floor(Math.random() * 5 + 1);
                });
                this.setState({robots: users});
            });
    }

    onSearchBoxChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        var searchValue = this.state.searchField.toLowerCase();
        const filteredRoboFriends = this.state.robots.filter(robo => {
            return robo.username.toLowerCase().indexOf(searchValue)>-1 || robo.name.toLowerCase().indexOf(searchValue)>-1 || robo.email.toLowerCase().indexOf(searchValue)>-1;
        });

        if(this.state.robots.length === 0) {
            return (
                <h1>LOADING!!!</h1>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchBoxChange}/>
                    <Scroll>
                        <CardList robots = {filteredRoboFriends}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;