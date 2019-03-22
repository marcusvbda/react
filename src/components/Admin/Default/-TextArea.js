import React, { Component } from 'react';

const style = 
{
    resize : "none"
}
class Textarea extends Component {

    render() {
        return  <div>
                    <textarea style={style} className="form-control" rows="5">
                        {this.props.children}
                    </textarea>
                </div>;
    }
}

export default Textarea;