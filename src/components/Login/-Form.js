import React, { Component } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
          username:"teste@teste.com",
          password:"teste",
          remember : "unchecked"
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = name => event => {
        if(name==="remember")
        {
            if(this.state.remember==="checked" )
                return this.setState({ [name]: "uncheked" });
            else
                return this.setState({ [name]: "checked" });
        }
        return this.setState({ [name]: event.target.value });
    };
    handleSubmit(e) {
      e.preventDefault();
        this.props._app.set({loading:true});        
        let user = {username: this.state.username ,password : this.state.password };
        this.props._app.api_post("POST","https://reqres.in/api/users",user,function(response)
        {
            if(!response)
            {
                this.props._app.set({loading:false});
                return Swal.fire({
                  title: 'Error!',
                  text: "response.message",
                  type: 'error',
                  confirmButtonText: 'OK'
                });
            }
            if(this.state.remember==="checked")
            {
                localStorage.setItem('auth_data', JSON.stringify({username:this.state.username,language:this.props._app.get("language")}));
            }
            this.props._app.set({auth:{check:true,user:user}});
        }.bind(this),
        function(error)
        {
            console.log(error);
            this.props._app.set({loading:false});
        }.bind(this));
    }

    
    render() {
        return (this.props._app.get("auth").check) ? <Redirect to="/welcome" />:
        <div className="full_width">
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
                                startAdornment: <InputAdornment className="label_input" position="start">
                                    Username
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
                                    Password
                                </InputAdornment>,
                            }}
                        />
                    </div>
                </div>
                <div className="row d-flex align-item-center">
                    <div className="col-md-6">
                        <FormControlLabel className="remember"
                            control={
                                <Checkbox  value={this.state.remember} onChange={this.handleChange('remember')} />
                            }
                            label='Remember me'
                        />
                    </div>
                    <div className="col-md-6 text-right forget">
                        <a className="text" href="/">Forgot my password</a>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-right">
                        <button className="btn btnlogin">Login</button>
                    </div>
                </div>
            </form>
        </div>;
    }
}

export default Form;