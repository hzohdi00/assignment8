import React from 'react';
import axios from 'axios';

class Chooser extends React.Component {
    
    render() {
        
        return <>
        <div className="chooser">
            <h2>Choose a Dog</h2>
            <ul className="breed-list">
            {this.props.dogs.map(dog=>
                <li key={dog}><button onClick={()=>this.props.chooseDog(dog)}>{dog}</button>
            </li>)}</ul>
        </div>
            </>
    } 
}

export default Chooser;