/*
  Class: myapp.controller.SampleController
  Author: %AUTHOR%
  Description: %DESCRIPTION%
*/

dojo.provide('myapp.controller.SampleController');
dojo.require('mojo.controller.Controller');

dojo.declare('myapp.controller.SampleController', mojo.controller.Controller,
{
  params: {

  },
  addObservers: function() {
    this.addObserver('sample', 'onSample', 'do_sample', function(context, caller) { 
      return {

      };
    });
  },
  addCommands: function() {
    this.addCommand('do_sample', 'kiwi.command.sampleController');
  },
  addIntercepts: function() {

  }
});