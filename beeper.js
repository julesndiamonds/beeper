<script type ="text/javascript"></script>

	<script>
	var button = document.createElement('button');
	button.innerText = 'click me';
	document.body.appendChild(button);
	button.addEventListener('click', function(){
		$ ('p').append('beep');
	var randomColor = '#' + Math.random().toString(16).slice(2, 8);
	$ ('p') .css('background-color', randomColor);
	});
	</script>
