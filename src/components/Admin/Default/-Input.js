import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
const style = 
{
    width:"100%"
}
class Input extends Component {

    render() {
        return  <div>
                    <TextField style={style}
                        label={this.props.placeholder}
                        margin="normal"
                        variant="outlined"
                        className="input-material-custom"
                    />
                </div>;
    }
}

export default Input;