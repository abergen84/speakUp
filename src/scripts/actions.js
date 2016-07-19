import {UserModel} from './models/models.js'

export const ACTIONS = {

	registerUser: function(email, password){
		// var userModel = new UserModel()
		var self = this
		console.log(email, password)
		return UserModel.register(email, password).then(function(){
			return self.logUserIn(email, password)
		})
	},

	logUserIn: function(email, password){
		return UserModel.login(email, password).then(function(){
			location.hash = "dashboard"
		})
	},

	logUserOut: function(){
		return UserModel.logout.then(function(){
			location.hash = "home"
		})
	}






}