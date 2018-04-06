import { Template } from 'meteor/templating'

import './home.html'
import './homeSplash.html'
import './surveyResults.html'

Template.home.onCreated(function() {
	Session.set('homeSplash', 'homeSplash')
})

Template.home.helpers({
	splashPage : function() {
		return Session.get('homeSplash')
	},
	socialMedia : function () {
		return {
			title : "Get started with FHIR!",
			excerpt : "Learn the basics of HL7 FHIR and get started with your own FHIR based application today!",
			description : "Learn the basics of HL7 FHIR and get started with your own FHIR based application today!",
			summary : "Learn the basics of HL7 FHIR and get started with your own FHIR based application today!",
			url : "http://learnFHIR.com"
		}
	}
})

Template.home.events({
	'click #surveyShow' : function() {
		Session.set('homeSplash', 'surveyResults')
	},
	'click #bck' : function() {
		Session.set('homeSplash', 'homeSplash')
	}
})