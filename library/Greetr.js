/*!
 * Greetr Library
 * 
 * Author: Colin
 */
 ;(function(global, $){

 	// 'new' an object
 	var Greetr = function(firstname, lastname, language) {
 		return new Greetr.init(firstname, lastname, language);
 	}

 	// hidden within the scope of IEFE and never directly accessible
 	var supportedLangs = ['en', 'es'];

 	// informal greetings
 	var greetings = {
 		en: 'Hello',
 		es: 'Hola'
 	};

 	// formal greetings
 	var formalGreetings = {
 		en: 'Greetings',
 		es: 'Saludos'
 	};

 	// logger messages
 	var logMessages = {
 		en: 'Logged in',
 		es: 'inicio sesión'
 	};

 	// prototype to hold the methods (to save memory space)
 	Greetr.prototype = {

 		fullname: function() {
 			return this.firstname + ' ' + this.lastname;
 		},

 		validate: function() {
 			if (supportedLangs.indexOf(this.language) === -1) {
 				throw "Invalid language";
 			}
 		},

 		greeting: function() {
 			return greetings[this.language] + ' ' + this.firstname + '!';
 		},

 		formalGreeting: function() {
 			return formalGreetings[this.language] + ' ' + this.fullname();
 		},

 		greet: function(formal) {
 			var msg;

 			// if undefined or null it will coerced to 'false'
 			if (formal) {
 				msg = this.formalGreeting();
 			} else {
 				msg = this.greeting();
 			}

 			// makes the method chainable
 			return this;
 		},

 		log: function() {

 			if (console) {
 				console.log(logMessages[this.language] + ': ' + this.fullname());
 			}

 			return this;
 		},

 		setLang: function(lang) {

 			this.language = lang;

 			this.validate();

 			return this;
 		},

 		HTMLGreeting: function(selector, formal) {
 			
 			if (!$) {
 				throw "jQuery not loaded";
 			}

 			if (!selector) {
 				throw "Invalid selector";
 			}

 			var msg;

 			if (formal) {
 				msg = this.formalGreeting();
 			} else {
 				msg = this.greeting();
 			}

 			$(selector).html(msg);

 			return this;
 		}

 	}

 	// the actual object is created here, allowing us to 'new' an object without calling 'new'
 	Greetr.init = function(firstname, lastname, language) {
 		
 		var self = this;

 		// Set Default
 		self.firstname = firstname || '';
 		self.lastname = lastname || '';
 		self.language = language || 'en';

 		self.validate();
 	}

 	// The actual created object prototype
 	Greetr.init.prototype = Greetr.prototype;

 	// Attach to global object
 	global.Greetr = global.G$ = Greetr;

 }(window, jQuery))