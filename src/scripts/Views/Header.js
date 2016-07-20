import React from 'react'
import {ACTIONS} from '../actions.js'



const Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Speak <span>&</span> Say</h1>
				<NavBar />
			</header>
			)
	}
})


const NavBar = React.createClass({
	render: function(){
		return (
			<div id="navBar">
				<a href="#dashboard">Dashboard</a>
				<a href="#compose">Compose</a>
				<a href="#all">All Posts</a>
				<a href="#myposts">My Posts</a>
				<a href="#" onClick={ACTIONS.logUserOut} >Logout</a>
			</div>
			)
	}
})

export default Header