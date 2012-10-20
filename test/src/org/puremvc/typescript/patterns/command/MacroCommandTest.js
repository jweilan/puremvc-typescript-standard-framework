/*
 PureMVC Javascript for TypeScript port by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

/**
 * Test the PureMVC MacroCommmand class.
 *
 * @see puremvc.MacroCommandTestVO MacroCommandTestVO
 * @see puremvc.MacroCommandTestCommand MacroCommandTestCommand
 */
var MacroCommandTest = new YUITest.TestCase
(
	{
		/**
		 * The name of the test case - if not provided, one is automatically
		 * generated by the YUITest framework.
		 * 
		 * @type {String}
		 * @private
		 */
		name: "PureMVC MacroCommmand class tests",  
	
		/**
		 * Sets up data that is needed by each test.
		 */
		setUp: function()
		{
		},
	    
		/**
		 * Cleans up everything that was created by setUp().
		 */
		tearDown: function()
		{
		},

		/**
		 * Tests if constructing the <code>MacroCommand</code> also call its
		 * super by testing for the existence of its <code>Notifier</code>
		 * superclass facade instance.
		 */
		testConstructor: function()
		{
			// Create a new subclass of Notifier and verify that its facade
			// has well been created
			var macroCommandTestSub/*MacroCommandTestSub*/ = new MacroCommandTestSub();     

			// test assertions
			YUITest.Assert.isTrue
			(
				macroCommandTestSub.hasFacade(),
				"Expecting macroCommandTestSub.hasFacade() === true"
			);
		},

		/**
		 * Tests operation of a <code>MacroCommand</code>.
		 *
		 * This test creates a new <code>Notification</code>, adding a 
		 * <code>MacroCommandTestVO</code> as the body. 
		 * It then creates a <code>MacroCommandTestCommand</code> and invokes
		 * its <code>execute</code> method, passing in the 
		 * <code>Notification</code>.
		 *
		 * The <code>MacroCommandTestCommand</code> has defined an
		 * <code>initMacroCommand</code> method, which is 
		 * called automatically by its constructor. In this method
		 * the <code>MacroCommandTestCommand</code> adds 2 SubCommands
		 * to itself, <code>MacroCommandTestSub1Command</code> and
		 * <code>MacroCommandTestSub2Command</code>.
		 *
		 * The <code>MacroCommandTestVO</code> has 2 result properties,
		 * one is set by <code>MacroCommandTestSub1Command</code> by
		 * multiplying the input property by 2, and the other is set
		 * by <code>MacroCommandTestSub2Command</code> by multiplying
		 * the input property by itself. 
		 *
		 * Success is determined by evaluating the 2 result properties
		 * on the <code>MacroCommandTestVO</code> that was passed to 
		 * the <code>MacroCommandTestCommand</code> on the Notification 
		 * body.
		 * 
		 */
		testMacroCommandExecute: function()
		{
   			var Notification = extract("puremvc.Notification");

			// Create the VO
			var vo/*MacroCommandTestVO*/ = new MacroCommandTestVO(5);
			
			// Create the Notification (note)
			var note/*Notification*/ = new Notification( 'MacroCommandTest', vo );
	
			// Create the MacroCommand  			
			var command/*MacroCommandTestCommand*/ = new MacroCommandTestCommand();
		
			// Execute the MacroCommand
			command.execute(note);
		
			// test assertions
			YUITest.Assert.areEqual
			(
				10,
				vo.result1,
				"Expecting vo.result1 == 10"
			);
			
			YUITest.Assert.areEqual
			(
				25,
				vo.result2,
				"Expecting vo.result2 == 25"
			);
		}
	}
);