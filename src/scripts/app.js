import React from 'react'
import ReactDOM from 'react-dom'
import LoginView from './Views/LoginView.js'
import $ from 'jquery'
import Backbone from 'backbone'
import {PostModel,PostCollection} from './models/models.js'
import DashboardView from './Views/DashboardView.js'
import ComposeView from './Views/ComposeView.js'
import AllPostsView from './Views/AllPostsView.js'

export const APP_NAME = 'speakUp'

const app = function() {

const Router = Backbone.Router.extend({
	routes: {
		"myposts": "showMine", //show my posts only
		"all": "showAll", //show all posts
		"compose": "showCompose",
		"dashboard": "showDashboard", //after initial login, fleshed out options header basically
		"home": "showHome", //shows login/register
		"*catchall": "routeHome"
	},

	initialize: function(){
		Backbone.history.start()
	},

	routeHome: function(){
		location.hash = "home"
	},

	showHome: function(){
		ReactDOM.render(<LoginView />, document.querySelector('.container'))
	},

	showDashboard: function(){
		// var speakColl = new PostCollection()
		// speakColl.fetch().then(function(response){
		// 	console.log(response)
		// }, function(err){
		// 	console.log(err)
		// })
		ReactDOM.render(<DashboardView />, document.querySelector('.container'))
	},

	showAll: function(){
		var speakColl = new PostCollection()
		speakColl.fetch().then(function(response){
			console.log(response)
		}, function(err){
			console.log(err)
		})
		ReactDOM.render(<AllPostsView speakColl={speakColl} />, document.querySelector('.container'))	
	},

	showCompose: function(){
		ReactDOM.render(<ComposeView />, document.querySelector('.container'))
	}
})


new Router()

}

app()