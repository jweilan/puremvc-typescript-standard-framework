/*
 PureMVC TypeScript by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

///<reference path='../../../../../../../test/lib/YUITest.d.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/interfaces/INotification.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/patterns/observer/Notification.ts'/>

module puremvc
{
	"use strict";

	/**
	 * @classDescription
	 * A utility class used by ControllerTest.
	 *
	 * @see puremvc.ControllerTest ControllerTest
	 * @see puremvc.ControllerTestCommand ControllerTestCommand
	 */

	/**
	 * @constructor
	 * @param {number} input
	 * 		The number to be fed to the <code>ControllerTestCommand</code>.
	 */
	constructor( input )
	{
		this.input = input;
	}

	/**
	 * @type {number}
	 */
	ControllerTestVO.prototype.input = 0;

	/**
	 * @type {number}
	 */
	ControllerTestVO.prototype.result = 0;
}