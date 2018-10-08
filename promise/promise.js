/**
 * Promise Function Constructor
 */
function Promise(fn){
	// Status:
	// 0 - pending, 
	// 1 - fulfilled, 
	// 2 - rejected,
	// 3 - use the status from another promise
	this.status = 0;
	this.success;
	this.failed;

	// do resolve
	doResolve(fn, this);
}

Promise.prototype.then = function(fulfilledFn, rejectedFn){
	this.success = fulfilledFn;
	this.failed = rejectedFn;
}

function doResolve(fn, promise){

	var res = fn(
		// Resolve
		function(value){
			resolve(promise, value);
		}, 
		// Reject
		function(value){
			reject(promise, value);
		}
	);
	
}

function resolve(promise, newValue) {
	promise.status = 1;
	promise.success(newValue);
}

function reject(promise, newValue) {
	promise.status = 2;
	promise.failed(newValue);
}

