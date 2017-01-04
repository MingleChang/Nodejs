function heavyCompute(n) {
	var count = 0;
	for (var i = n; i > 0; i--) {
		for (var j = n; j > 0; j--) {
			count += 1;
		}
	}
}

var t = new Date();

setTimeout(function(){
	console.log(new Date() - t);
}, 1000);

heavyCompute(50000);