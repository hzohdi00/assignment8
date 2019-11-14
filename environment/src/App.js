import React from 'react';
import Chooser from './Chooser.js';
import Details from './Details.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) { 
        super(props);
        this.state={ dogs:[], current: undefined } 
        this.chooseDog = this.chooseDog.bind(this); // refers to this of App
    }
    
    componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all') 
    .then(results=>{
        const dogs = Object.keys(results.data.message);
        this.setState({dogs});
    })
    }
    
    chooseDog(dog) {
        this.setState({ current:dog }) 
        
    }
    
    render() {
        
        return <>
        <div className="app">
            <h1>Assignment 8: Advanced Dog App</h1>
            <Chooser dogs={this.state.dogs} chooseDog={this.chooseDog} />
            <Details current={this.state.current}/>
        </div>
            </>
    } 
}
export default App;