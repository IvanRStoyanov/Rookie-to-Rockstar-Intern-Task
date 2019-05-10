function printLogo() {
	let input = document.getElementById('text').value;
	let n = Number(input);
	
	if(isNaN(n)) {
		document.getElementById('error').innerHTML = 'Input must be a number';
	}
	
	else if(n < 0 || n % 2 === 0) {
		document.getElementById('error').innerHTML = 'Input must be a positive odd number';
	}
	
	else {
		function repeatStars(st){
			return '*'.repeat(st);
		}
		function repeatSlashes(sl){
			return '-'.repeat(sl);
		}
		
		for(i = 0; i < n / 2; i++){
			let startEnd = repeatSlashes(n - i);
			let topMpart = repeatStars(n + 2 * i);
			let topSlashes = repeatSlashes(n - 2 * i)
			let firstPart = startEnd + topMpart + topSlashes + topMpart + startEnd;
			console.log(firstPart.repeat(2));
		}

		for(i = 0; i < n / 2; i++) {
			let startEnd = repeatSlashes(Math.floor(n / 2) - i);
			let botSlashes = repeatSlashes(i * 2 + 1);
			let botMpart = repeatStars(Math.floor(n / 2) * 2 + n - i * 2);
			let firstPart = startEnd + repeatStars(n) + botSlashes + botMpart + botSlashes + repeatStars(n) + startEnd;
			console.log(firstPart.repeat(2));
		}
	}
}
