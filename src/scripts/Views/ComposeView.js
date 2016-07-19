import React from 'react'
import Header from './Header.js'
import {UserModel,PostModel} from '../models/models.js'
import Backbone from 'backbone'

const ComposeView = React.createClass({
	render: function(){
		return (
			<div id="renderView">
				<Header />
				<Compose />
			</div>
			)
	}
})


const Compose = React.createClass({
	
	_handleForm: function(event){
		event.preventDefault()
		location.hash = "all"

		var newPost = new PostModel({
			author_email: UserModel.getCurrentUser().email,
			title: event.target.title.value,
			subtitle: event.target.subtitle.value,
			body: event.target.content.value
		})

		newPost.save()
	},

	render: function(){
		return (
			<div id="compose">
				<form onSubmit={this._handleForm} >
					<input name="title" placeholder="Title" />
					<input name="subtitle" placeholder="Subtitle" />
					<textarea name="content" placeholder="Speak up!" />
					<button type="submit" value="submit">Submit</button>
				</form>
			</div>
			)
	}
})

export default ComposeView