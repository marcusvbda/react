import React, { Component } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
          username:"",
          password:"",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
    }
    
    render() {
        return <div className="full_width">
            <form className='formLogin' onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title mb-4">Login</h1>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-12">
                        <TextField className="input" required type="email"
                            value={this.state.username} onChange={this.handleChange('username')}
                            InputProps={{
                                startAdornment: <InputAdornment className="label_input" position="start">USERNAME</InputAdornment>,
                            }}
                        />
                    </div>
                </div>
                <div className="row mt-4 mb-2">
                    <div className="col-md-12">
                        <TextField className="input" type="password" required
                            value={this.state.password} onChange={this.handleChange('password')}
                            InputProps={{
                                startAdornment: <InputAdornment className="label_input" position="start">PASSWORD</InputAdornment>,
                            }}
                        />
                    </div>
                </div>
                <div className="row d-flex align-item-center">
                    <div className="col-md-4">
                        <FormControlLabel className="remember"
                            control={
                                <Checkbox value="remember" />
                            }
                            label="Remember me?"
                        />
                    </div>
                    <div className="col-md-8 text-right forget">
                        <a className="text" href="/">Forgot Username</a><span className="m-2">-</span><a className="text" href="/">Forgot Password</a>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-right">
                        <button className="btn btnlogin">LOGIN</button>
                    </div>
                </div>
            </form>
        </div>;
    }
}

export default Form;