// a simple pure function to get a value adding 10
const add = (n) => (n + 10);
console.log('Simple call', add(3));

// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
	return (...args) => {
		let n = args[0];
		if (n in cache) {
			console.log('Fetching from cache');
			return cache[n];
		}
		else {
			console.log('Calculating result');
			let result = fn(n);
			cache[n] = result;
			return result;
		}
	}
}

// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));
console.log(memoizedAdd(3));
console.log(memoizedAdd(4));
console.log(memoizedAdd(4));