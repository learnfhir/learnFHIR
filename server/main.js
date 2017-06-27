import '/imports/startup/server'
import '/imports/startup/both'

import { HTTP } from 'meteor/http'

Meteor.methods({
	FHIRrequest : function (url) {

		let options = {
			headers : {
				Accept	: "application/json",
				apikey : "HackathonOrientationSession"
			}
		}
		console.log(url)
		let result = HTTP.call('GET', url, options)
		
		return JSON.parse(result.content)
	},
	getTweets : function () {
		Twit = new TwitMaker({
			// consumer_key:         
			// consumer_secret:      
			// access_token:         
			// access_token_secret:  
		})

		Twit.get('search/tweets', { q: '#FHIR -RT', count: 10, lang: 'en', result_type: 'recent' }, Meteor.bindEnvironment(function(err, data, response) {
			Meteor.call('tweets.remove')
			for(let i = 0; i < data.statuses.length; i++) {
				Meteor.call('tweets.insert', data.statuses[i])
			}
		}))
	}
})