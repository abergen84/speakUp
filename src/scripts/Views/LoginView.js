import React from 'react'
import Header from './Header.js'
import {ACTIONS} from '../actions.js'


const LoginView = React.createClass({
	render: function(){
		return (
			<div id="loginPage">
				<Header />
				<LoginUser />
				<RegisterUser />
			</div>
			)
	}
})

const LoginUser = React.createClass({
	
	_handleLogin: function(event){
		event.preventDefault()
		ACTIONS.logUserIn(event.target.username.value, event.target.password.value)
	},

	render: function(){
		return (
			<div className="inputBox login">
				<h3>Login</h3>
				<form onSubmit={this._handleLogin} >
					<input type="text" name="username" placeholder="enter your email" />
					<input type="password" name="password" placeholder="enter your password" />
					<button type="submit">Log In</button>
				</form>
			</div>
			)
	}
})


const RegisterUser = React.createClass({
	
	_handleRegister: function(event){
		event.preventDefault()
		ACTIONS.registerUser(event.target.username.value, event.target.password.value)
	},

	render: function(){
		return (
			<div className="inputBox register">
				<h3>Not a member? Register</h3>
				<form onSubmit={this._handleRegister}>
					<input type="text" name="username" placeholder="enter your email" />
					<input type="password" name="password" placeholder="enter your password" />
					<button type="submit">Register</button>
				</form>
			</div>
			)
	}
})

export default LoginView