somePromise = new Promise(function(resolve, reject) {
	setTimeout(function(){
		// resolve('it works!');
		reject('it failed');
	}, 3000);
});

// Testing Status
// setInterval(logStatus, 1000);
// function logStatus(){
// 	console.log(somePromise.status);
// }

somePromise.then(function(msg){
	console.log('Success: ', msg);
}, function(errorMsg){
	console.log('Error: ', errorMsg);
});