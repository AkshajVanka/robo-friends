import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from'../components/SearchBox';
import Scroll from '../components/Scroll';
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
        const {searchField, robots} = this.state;
        var searchValue = searchField.toLowerCase();
        const filteredRoboFriends = robots.filter(robot => {
            return robot.username.toLowerCase().indexOf(searchValue)>-1 || robot.name.toLowerCase().indexOf(searchValue)>-1 || robot.email.toLowerCase().indexOf(searchValue)>-1;
        });

        return !robots.length? 
            <h1>LOADING!!!</h1>: 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchBoxChange}/>
                    <Scroll>
                        <CardList robots = {filteredRoboFriends}/>
                    </Scroll>
                </div>
            );
    }
}

export default App;