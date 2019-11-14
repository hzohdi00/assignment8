import React from 'react';
import axios from 'axios';

class Details extends React.Component {
    constructor(props) { 
        super(props);
        this.state={images:[], number: 1, newComment:'', comments:[]}
    }
    
    componentDidUpdate(prevProps, prevState) {
        
    if(this.props.current != prevProps.current){
        
        axios.get(`https://dog.ceo/api/breed/${this.props.current}/images/random/${this.state.number}`) 
        
        .then(results=>{
            const images = Object.keys(results.data.message);
            this.setState({images});
            console.log(images);
        })
    }
    }
    
    handleNumberChange(event) {
        this.setState({number: event.target.value});
    }
    
    render() {
        
        return <>

        <form onSubmit={this.handleCommentSubmit}> Submit a comment:
            <textarea onChange={this.handleCommentChange} 
                value={this.state.newComment}></textarea> 
            <input type='submit' value='Submit comment' />
        </form>
        
        <form>
            <label>
            number of images:
            <input type='number' min='0' 
                max={ this.state.images.length} 
                value={this.state.number} 
                onChange={this.handleNumberChange}/>
            </label> 
        </form>
        
        <div className="details">
            <h2>{this.props.current}</h2>
            <div className="images">
            <ul>{this.state.images.map(dog=>
                <li key={dog}>
                    <img key={dog} src={dog}></img>
                </li>)}
            </ul>
            </div>
        </div>
        </>
    } 
}

export default Details;