import { Template } from 'meteor/templating'

import './MeteorTutorial.html'
import './MeteorIntro.html'
import './MeteorStep1.html'
import './MeteorStep2.html'
import './MeteorStep3.html'
import './MeteorStep4.html'
import './MeteorStep5.html'
import './MeteorStep6.html'
import './MeteorStep7.html'
import './MeteorStep8.html'

Template.MeteorTutorial.onCreated(function () {
	Session.set('MeteorStep', 'MeteorIntro')
})

Template.MeteorTutorial.helpers({
	MeteorStep : function () {
		return Session.get('MeteorStep')
	}
})

Template.MeteorTutorial.events({
	'click .nav-pills li': function( event, template ) {
		var currentPill = $( event.target ).closest( "li" )

		currentPill.addClass( "active" )
		$( ".nav-pills li" ).not( currentPill ).removeClass( "active" )

		Session.set('MeteorStep', currentPill.data( "template" ))
	},
	'click #fwd': function(event) {
		currentStep = Session.get('MeteorStep')
		$("li.active").removeClass("active").next().addClass("active")
		switch(currentStep) {
			case 'MeteorIntro' : Session.set('MeteorStep', 'MeteorStep1'); break
			case 'MeteorStep1' : Session.set('MeteorStep', 'MeteorStep2'); break
			case 'MeteorStep2' : Session.set('MeteorStep', 'MeteorStep3'); break
			case 'MeteorStep3' : Session.set('MeteorStep', 'MeteorStep4'); break
			case 'MeteorStep4' : Session.set('MeteorStep', 'MeteorStep5'); break
			case 'MeteorStep5' : Session.set('MeteorStep', 'MeteorStep6'); break
			case 'MeteorStep6' : Session.set('MeteorStep', 'MeteorStep7'); break
			case 'MeteorStep7' : Session.set('MeteorStep', 'MeteorStep8'); break
		}
	},
	'click #bck': function(event) {
		currentStep = Session.get('MeteorStep')
		$("li.active").removeClass("active").prev().addClass("active")
		switch(currentStep) {
			case 'MeteorStep1' : Session.set('MeteorStep', 'MeteorIntro'); break
			case 'MeteorStep2' : Session.set('MeteorStep', 'MeteorStep1'); break
			case 'MeteorStep3' : Session.set('MeteorStep', 'MeteorStep2'); break
			case 'MeteorStep4' : Session.set('MeteorStep', 'MeteorStep3'); break
			case 'MeteorStep5' : Session.set('MeteorStep', 'MeteorStep4'); break
			case 'MeteorStep6' : Session.set('MeteorStep', 'MeteorStep5'); break
			case 'MeteorStep7' : Session.set('MeteorStep', 'MeteorStep6'); break
			case 'MeteorStep8' : Session.set('MeteorStep', 'MeteorStep7'); break
		}
	}
})