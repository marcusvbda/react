import React, { Component } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Translate from '../Language/-Translate';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
          username:"teste@teste.com",
          password:"teste",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
    handleSubmit(e) {
      e.preventDefault();
        let data = {name: "paul rudd",movies: ["I Love You Man", "Role Models"]};
        this.props._app.ajax("POST","https://reqres.in/api/users'",data,function(response)
        {
            console.log(response);
            console.log(this.state);
        }.bind(this));
    }
    
    render() {
        return <div className="full_width">
            <form className='formLogin' onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title mb-4"><Translate _app={this.props._app}>login.title</Translate></h1>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-12">
                        <TextField className="input" required type="email"
                            value={this.state.username} onChange={this.handleChange('username')}
                            InputProps={{
                                startAdornment: <InputAdornment className="label_input" position="start">
                                    <Translate _app={this.props._app}>login.username</Translate>
                                </InputAdornment>,
                            }}
                        />
                    </div>
                </div>
                <div className="row mt-4 mb-2">
                    <div className="col-md-12">
                        <TextField className="input" type="password" required
                            value={this.state.password} onChange={this.handleChange('password')}
                            InputProps={{
                                startAdornment: <InputAdornment className="label_input" position="start">
                                    <Translate _app={this.props._app}>login.password</Translate>
                                </InputAdornment>,
                            }}
                        />
                    </div>
                </div>
                <div className="row d-flex align-item-center">
                    <div className="col-md-6">
                        <FormControlLabel className="remember"
                            control={
                                <Checkbox value="remember" />
                            }
                            label={<Translate _app={this.props._app}>login.remember</Translate>}
                        />
                    </div>
                    <div className="col-md-6 text-right forget">
                        <a className="text" href="/"><Translate _app={this.props._app}>login.forget_user</Translate></a>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-right">
                        <button className="btn btnlogin"><Translate _app={this.props._app}>login.login</Translate></button>
                    </div>
                </div>
            </form>
        </div>;
    }
}

export default Form;