window.onload = function() {
	let data;
	fetch('./funkydle/main.json')
		.then(response => response.json())
		.then(jsonData => {
			data = jsonData;
			const names = jsonData.map(item => item.texts.name);
			const dataList = document.getElementById('names');
			names.forEach(name => {
				const option = document.createElement('option');
				option.value = name;
				dataList.appendChild(option);
			});
		});
	document.querySelector('button').addEventListener('click', function(event) {
		event.preventDefault();

		const item = data.find(item => item.texts.name === document.querySelector('input').value);
		if(item){
			console.log('HP: ' + item.values.hp);
			console.log('Attack: ' + item.values.attack);
        }
        else{
            console.log('No item found with the name ' + inputName);
        }

        const values = [item.values.attack, item.values.hp, item.values.mana];
        const categories = [item.categories.rarity, item.categories.creature_type];


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
		        items.forEach((item, index) => {
		            const response = document.createElement('div');
		            response.className = 'response';
		            const p = document.createElement('p');
		            p.className = 'text';
		            if(index < values.length) {
		                p.textContent = values[index];
		            }
		            else{
		                p.textContent = categories[index - values.length];
		                if(p.textContent == "ultra_rare"){
		                	p.textContent = "Tres rare"
		                }
		                p.className += ' small-text';
		            }
		            response.appendChild(p);
		            item.insertBefore(response, item.childNodes[4]);
		        });
	});
};