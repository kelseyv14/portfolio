import React, { Component } from 'react';

class LoadHeader extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            style: ''
        }
    }

  
    render() {
        return <div className="column is-6" onMouseOver={() => this.setState({style: 'notification is-primary'})} onMouseOut={() => this.setState({style: ''})}>
            <div className="section">
                {this.props.title}<br/>
            </div>
        </div>
    }
}

export default LoadHeader;