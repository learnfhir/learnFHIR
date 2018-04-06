import { Template } from 'meteor/templating'

import './handsonFHIRserver.html'
import './serverIntro.html'
import './serverStep1.html'
import './serverStep2.html'
import './serverStep3.html'
import './serverStep4.html'
import './serverStep5.html'

Template.handsonFHIRserver.onCreated(function () {
	Session.set('FHIRserver', 'serverIntro')
})

Template.handsonFHIRserver.helpers({
	FHIRserver : function () {
		return Session.get('FHIRserver')
	}
})

Template.handsonFHIRserver.events({
	'click .nav-pills li': function( event, template ) {
		var currentPill = $( event.target ).closest( "li" )

		currentPill.addClass( "active" )
		$( ".nav-pills li" ).not( currentPill ).removeClass( "active" )

		Session.set('FHIRserver', currentPill.data( "template" ))
	},
	'click #fwd': function(event) {
		currentStep = Session.get('FHIRserver')
		$("li.active").removeClass("active").next().addClass("active")
		switch(currentStep) {
			case 'serverIntro' : Session.set('FHIRserver', 'serverStep1'); break
			case 'serverStep1' : Session.set('FHIRserver', 'serverStep2'); break
			case 'serverStep2' : Session.set('FHIRserver', 'serverStep3'); break
			case 'serverStep3' : Session.set('FHIRserver', 'serverStep4'); break
			case 'serverStep4' : Session.set('FHIRserver', 'serverStep5'); break
		}
	},
	'click #bck': function(event) {
		currentStep = Session.get('FHIRserver')
		$("li.active").removeClass("active").prev().addClass("active")
		switch(currentStep) {
			case 'serverStep1' : Session.set('FHIRserver', 'serverIntro'); break
			case 'serverStep2' : Session.set('FHIRserver', 'serverStep1'); break
			case 'serverStep3' : Session.set('FHIRserver', 'serverStep2'); break
			case 'serverStep4' : Session.set('FHIRserver', 'serverStep3'); break
			case 'serverStep5' : Session.set('FHIRserver', 'serverStep4'); break
		}
	}
})