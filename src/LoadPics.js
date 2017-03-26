import React, { Component } from 'react';

class LoadPics extends Component {
    // You only need constructor
    constructor(props) {
        super(props);

        // Internal values that can change over time with this.setState({}) calls
    //     this.state = {
    //         style: ''
    //     }
    // }

    // You can read incoming props, like title="", using this.props.title ...wrapping that in {} will output it to the screen
    render() {
        return <div className="columns is-gapless is-multiline is-mobile">
        <figure className="inspoImages" onChange={() => this.setState({style:'image is-128x128'})}>
            <div className="column is-one-quarter">
                    <img className="picture" src = {this.props.picture} /> 
            </div>
        </figure>
        </div>
    }
}

export default LoadPics;

