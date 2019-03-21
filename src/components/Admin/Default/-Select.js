import React, { Component } from 'react';

const style = 
{
    width:"100%",
    height: "40px"
}
class Select extends Component {

    render() {
        return  <div>
                    <select style={style} className="form control">
                        {this.props.children}
                    </select>
                </div>;
    }
}

export default Select;