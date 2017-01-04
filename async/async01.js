function heavyCompute(n, callback) {
	var count = 0;

	for (var i = n; i > 0; --i) {
		for (var j = n; j > 0; --j) {
			count += 1;
		}
	}
	callback(count);
}

heavyCompute(10000,function(count){
	console.log(count);
});

console.log('hello');