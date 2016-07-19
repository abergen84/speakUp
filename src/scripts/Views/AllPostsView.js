import React from 'react'
import Header from './Header.js'
import $ from 'jquery'

const AllPostsView = React.createClass({
	
	getInitialState: function(){
		return {
			speakColl: this.props.speakColl
		}
	},

	componentWillMount: function(){
		this.state.speakColl.on('sync update', ()=>{
			this.setState({
				speakColl: this.state.speakColl
			})
		})
	},

	render: function(){
		console.log(this.state.speakColl)
		return (
			<div>
				<Header />
				<PostsArea speakColl={this.state.speakColl} />
			</div>
			)
	}
})

const PostsArea = React.createClass({
	
	_makePost: function(post){
		return <Post blogPost={post} key={post.id} />
	},

	render: function(){
		console.log(this)
		return (
			<div id="postsArea">
				{/*(this.props.speakColl.attributes === []) ? "" : this.props.speakColl.map(this._makePost)*/}
				{this.props.speakColl.map(this._makePost)}
			</div>
			)
	}
})

const Post = React.createClass({
	
	_removePost: function(){
		this.props.blogPost.destroy({
			url: `/api/post/${this.props.blogPost.id}`
		})
	},

	render: function(){
		console.log(this)
		return (
			<div className="post">
				<p>{this.props.blogPost.get('author_email')} wrote on: &nbsp;</p>
				<span>{this.props.blogPost.get('createdAt').substring(0,10)}</span>
				<h3>{this.props.blogPost.get('title')}</h3>
				<h5>{this.props.blogPost.get('subtitle')}</h5>
				<p>{this.props.blogPost.get('body')}</p>
				<button onClick={this._removePost}>X</button>
			</div>
			)
	}
})




export default AllPostsView