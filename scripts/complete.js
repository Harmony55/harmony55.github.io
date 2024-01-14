window.onload = function() {
	fetch('./funkydle/main.json')
		.then(response => response.json())
		.then(data => {
			const names = data.map(item => item.texts.name);
			const dataList = document.getElementById('names');
			names.forEach(name => {
				const option = document.createElement('option');
				option.value = name;
				dataList.appendChild(option);
			});
		});
	document.querySelector('button').addEventListener('click', function(event) {
		event.preventDefault();
		console.log(document.querySelector('input').value);


                items = document.querySelectorAll('.item2');
                items.forEach(item => {
                    const response = document.createElement('div');
                    response.className = 'response';
	                const img = document.createElement('img');
	                img.src = './images/logo.png';
	                img.alt = 'New Image';
                    response.appendChild(img);
                    item.appendChild(response);
                });

                items = document.querySelectorAll('.item');
                items.forEach(item => {
                    const response = document.createElement('div');
                    response.className = 'response';
                    const p = document.createElement('p');
                    p.className = 'text';
                    p.textContent = '10';
                    response.appendChild(p);
                    item.appendChild(response);
                });
	});
};