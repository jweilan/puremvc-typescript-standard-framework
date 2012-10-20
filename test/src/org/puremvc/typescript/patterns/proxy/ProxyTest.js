/*
 PureMVC Javascript for TypeScript port by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

/**
 * Test the PureMVC Proxy class.
 * 
 * @see puremvc.Proxy Proxy
 */
var ProxyTest = new YUITest.TestCase
(
	{	
       /**
         * The name of the test case - if not provided, one is automatically
         * generated by the YUITest framework.
         * 
         * @type {String}
         * @private
         */
        name: "PureMVC Proxy class tests",  

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
  		 * Tests if constructing the Proxy also call its super by testing
  		 * for the existence of its <code>Notifier</code> superclass facade
  		 * instance.
  		 */
  		testConstructor: function()
		{
			// Create a new subclass of Notifier and verify that its facade
			// has well been created
   			var proxyTestSub/*ProxyTestSub*/ = new ProxyTestSub();     

   			// test assertions
   			YUITest.Assert.isTrue
			(
				proxyTestSub.hasFacade(),
				"Expecting proxyTestSub.hasFacade() === true"
			);
   		},
	
		/**
  		 * Tests getting the name using Proxy class accessor method. Setting
  		 * can only be done in constructor.
  		 */
  		testNameAccessor: function()
		{
    		var Proxy = extract("puremvc.Proxy");

			// Create a new Proxy and use accessors to set the proxy name 
   			var proxy/*Proxy*/ = new Proxy('TestProxy');
   			
   			// test assertions
   			YUITest.Assert.areEqual
			(
				'TestProxy',
				proxy.getProxyName(),
				"Expecting proxy.getProxyName() == 'TestProxy'"
			);
   		},

  		/**
  		 * Tests setting and getting the data using Proxy class accessor 
  		 * methods.
  		 */
  		testDataAccessors: function()
		{
    		var Proxy = extract("puremvc.Proxy");

			// Create a new Proxy and use accessors to set the data
   			var proxy/*Proxy*/ = new Proxy('colors');
   			proxy.setData(['red', 'green', 'blue']);
   			var data/*Array*/ = proxy.getData();
   			
   			// test assertions
   			YUITest.Assert.areEqual
			(
				3,
				data.length,
				"Expecting data.length == 3"
			);
			
   			YUITest.Assert.areEqual
			(
				'red',
				data[0],
				"Expecting data[0] == 'red'"
			);
			
   			YUITest.Assert.areEqual
			(
				'green',
				data[1],
				"Expecting data[1] == 'green'"
			);
			
   			YUITest.Assert.areEqual
			(
				'blue',
				data[2],
				"Expecting data[2] == 'blue'"
			);
   		},

  		/**
  		 * Tests setting the name and body using the Notification class
  		 * Constructor.
  		 */
  		testConstructor: function()
		{
    		var Proxy = extract("puremvc.Proxy");

			// Create a new Proxy using the Constructor to set the name and data
   			var proxy/*Proxy*/ = new Proxy('colors',['red', 'green', 'blue']);
   			var data/*Array*/ = proxy.getData();
   			
   			// test assertions
   			YUITest.Assert.isNotNull
			(
				proxy,
				"Expecting proxy !== null"
			);
			
   			YUITest.Assert.areEqual
			(
				'colors',
				proxy.getProxyName(),
				"Expecting proxy.getProxyName() == 'colors'"
			);
			
   			YUITest.Assert.areEqual
			(
				3,
				data.length,
				"Expecting data.length == 3"
			);
			
   			YUITest.Assert.areEqual
			(
				'red',
				data[0],
				"Expecting data[0] == 'red'"
			);
			
   			YUITest.Assert.areEqual
			(
				'green',
				data[1],
				"Expecting data[1] == 'green'"
			);
			
   			YUITest.Assert.areEqual
			(
				'blue',
				data[2],
				"Expecting data[2] == 'blue'"
			);
   		}
  	}
);