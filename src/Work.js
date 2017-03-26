import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div className="columns">
            <WorkSample title="ECommerce Order Form" screenshot="/img/styleanorderform.jpg"/>
             <WorkSample title="Twitter Prototype" screenshot="/img/chirp.jpg" />
            <WorkSample title="Wordpress Blog Sample" screenshot="/img/wordpress.jpg" />
        </div>;
    }
}

export default Work;