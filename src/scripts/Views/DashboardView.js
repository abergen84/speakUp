import React from 'react'
import Header from './Header.js'
import $ from 'jquery'
import {UserModel} from '../models/models.js'


const DashboardView = React.createClass({
	
	// getInitialState: function(){
	// 	return {
	// 		speakColl: this.props.speakColl
	// 	}
	// },

	// componentWillMount: function(){
	// 	this.state.speakColl.on('sync update', ()=>{
	// 		this.setState({
	// 			speakColl: this.state.speakColl
	// 		})
	// 	})
	// },

	render: function(){
		return (
			<div>
				<Header />
				<Dashboard />
			</div>
			)
	}
})

const Dashboard = React.createClass({
	render: function(){
		return (
			<div id="dash">
					<h2>Welcome back {UserModel.getCurrentUser().email}!</h2>
					<div id="subDash">
						<h4>Quick Links</h4>
						<a href="#compose">Compose Message</a>
						<a href="#all">See All Posts</a>
					</div>
			</div>
		)
	}
})











export default DashboardView