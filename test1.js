(function(){
	var sym = String.fromCharCode(102);
	(function(){
		function abc(){
			var dateTemp = new Date();
			var count = 0,
				ex = [];
			return function(){
				String(dateTemp.getTime() - Math.pow(2,12) - 1).split('').forEach(function(el){
					el % 2 === 0 && (function(el){ 
													count++;
													return (count > 3) ? ex.push(el) : ex.push((el - 1) > 0 ? +(el - 1) : +(el));
											})(el); 
				});
				return eval(ex.join('+'));
			};
		}
		var str = Array.prototype.slice.call(arguments,arguments.length-1).join(String.fromCharCode(101)) + ['', ''].join(String.fromCharCode(111));
		(function(){
			var arr = Array.prototype.slice.call(arguments,arguments.length-1).join(abc()()).split('');
			var currStr = '';
			for(var i = arr.length - 1; i > 0; i--){
				i === (arr.length - 1) && (function(){
														currStr = arr.join(arr[i]);
												})();
				arr[i] = arr[i] + currStr;
			}
			window.alert(arr[0] + arr[arr.length-1].slice(-2))
		})(str)
	})(sym);
})();

