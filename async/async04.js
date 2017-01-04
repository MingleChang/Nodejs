function sync(fn) {
	return fn();
}

try {
	sync(null);
} catch (err) {
	console.log('Error: %s',err.message);
}