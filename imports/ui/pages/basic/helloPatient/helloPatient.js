import { Template } from 'meteor/templating'

import './helloPatient.html'
import './HPintro.html'
import './HPstep1.html'
import './HPstep2.html'
import './HPstep3.html'
import './HPstep4.html'
import './HPstep5.html'
import './HPfinishedCode.html'

Template.helloPatient.onCreated(function () {
	Session.set('HPstep', 'HPintro')
})

Template.helloPatient.helpers({
	HPstep: function () {
		return Session.get('HPstep')
	}
})

Template.helloPatient.events({
	'click .nav-pills li': function( event, template ) {
		var currentPill = $( event.target ).closest( "li" )

		currentPill.addClass( "active" )
		$( ".nav-pills li" ).not( currentPill ).removeClass( "active" )

		Session.set('HPstep', currentPill.data( "template" ))
	},
	'click #fwd': function(event) {
		currentStep = Session.get('HPstep')
		$("li.active").removeClass("active").next().addClass("active")
		switch(currentStep) {
			case 'HPintro' : Session.set('HPstep', 'HPstep1'); break
			case 'HPstep1' : Session.set('HPstep', 'HPstep2'); break
			case 'HPstep2' : Session.set('HPstep', 'HPstep3'); break
			case 'HPstep3' : Session.set('HPstep', 'HPstep4'); break
			case 'HPstep4' : Session.set('HPstep', 'HPstep5'); break
			case 'HPstep5' : Session.set('HPstep', 'HPfinishedCode'); break
		}
	},
	'click #bck': function(event) {
		currentStep = Session.get('HPstep')
		$("li.active").removeClass("active").prev().addClass("active")
		switch(currentStep) {
			case 'HPstep1' : Session.set('HPstep', 'HPintro'); break
			case 'HPstep2' : Session.set('HPstep', 'HPstep1'); break
			case 'HPstep3' : Session.set('HPstep', 'HPstep2'); break
			case 'HPstep4' : Session.set('HPstep', 'HPstep3'); break
			case 'HPstep5' : Session.set('HPstep', 'HPstep4'); break
			case 'HPfinishedCode' : Session.set('HPstep', 'HPstep5'); break
		}
	}
})