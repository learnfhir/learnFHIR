import { Template } from 'meteor/templating'

import './tweetlist.html'

import { Tweets } from '../../../api/tweets.js'

Template.tweetlist.onCreated(function () {
	Meteor.subscribe('tweets')
	Meteor.call('getTweets')
})

Template.tweetlist.helpers({
	tweets : function () {
		//console.log(Tweets.find({}).fetch())
		return Tweets.find({}).fetch()
	}
})