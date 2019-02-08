import React, { Component } from 'react';
import  './Style/-Custom.scss';


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    run()
    {
        if(this.props.Loading)
        {
            return <div className="loading">Loading&#8230;</div>;
        }
        else
        {
            return <div></div>;
        }
    }
    render() {
        return  this.run();
    }
}

export default Loading;