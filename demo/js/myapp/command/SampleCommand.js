/* 
  Class: myapp.command.SampleCommand
  Author: Mojo
  Description: Sample
*/

dojo.provide('myapp.command.SampleCommand');
dojo.require('mojo.command.Command');
dojo.require('mojo.Model');

dojo.declare('myapp.command.SampleCommand', mojo.command.Command,
{
  execute: function(requestObj) {

		console.log('command executed',requestObj);
    
  },
  onResponse: function(data) {

  },
  onError: function(error) {

  }
});