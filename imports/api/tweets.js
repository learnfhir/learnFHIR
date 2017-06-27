import { Meteor } from 'meteor/meteor'

export const Tweets = new Mongo.Collection('tweets')

if (Meteor.isServer) {
  // Publish the list of available request cards
  Meteor.publish('tweets', function () {
    return Tweets.find({})
  })
}

Meteor.methods({
	'tweets.insert' : function(tweet) {
		return Tweets.insert(tweet)
	},
	'tweets.remove' :function() {
		return Tweets.remove({})
	}
})