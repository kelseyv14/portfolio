import React, { Component } from 'react';
import LoadHeader from './LoadHeader';

class InspoHeader extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div className="column is-6">
            <InspoHeader title="Photo Art ~ Edits ~ Inspirations ~ Style"/>
        </div>;
    }
}

export default InspoHeader;