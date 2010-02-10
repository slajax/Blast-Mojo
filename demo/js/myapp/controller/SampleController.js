/*
  Class: myapp.controller.SampleController
  Author: Mojo
  Description: Sample
*/

dojo.provide('myapp.controller.SampleController');
dojo.require('mojo.controller.Controller');

dojo.declare('myapp.controller.SampleController', mojo.controller.Controller,
{
  params: {

  },
  addObservers: function() {
    this.addObserver(this, 'onInit', 'do_sample', function(context, caller) { 
			console.log('controller mapped');
      return {

      };
    });
  },
  addCommands: function() {
    this.addCommand('do_sample', 'myapp.command.SampleCommand');
  },
  addIntercepts: function() {

  }
});