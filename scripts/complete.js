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

		const today = new Date();
		const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
		Math.seedrandom(seed.toString());
		const itemGoal = data[Math.floor(Math.random() * data.length)];

		const values = [item.values.attack, item.values.hp, item.values.mana];
		const categories = [item.categories.rarity, item.categories.creature_type];

		const valuesGoal = [itemGoal.values.attack, itemGoal.values.hp, itemGoal.values.mana];
		const categoriesGoal = [itemGoal.categories.rarity, itemGoal.categories.creature_type];

		const inputed = item;

		items = document.querySelectorAll('.item2');
		items.forEach(item => {
			const response = document.createElement('div');
			response.className = 'response';
			const img = document.createElement('img');
			img.src = './images/logo.png';
			img.alt = 'New Image';
			if(itemGoal.texts.name == inputed.texts.name){
				response.className += ' green';
			}
			else{
				response.className += ' red';
			}

			response.appendChild(img);
			item.insertBefore(response, item.childNodes[4]);
		});

		items = document.querySelectorAll('.item');
		items.forEach((item, index) => {
			const response = document.createElement('div');
			response.className = 'response';
			const p = document.createElement('p');
			p.className = 'text';
			if(index < values.length){
				p.textContent = values[index];
				if(values[index] > valuesGoal[index]){
					response.className += ' arrowup';
					response.className += ' red';
				}
				else if(values[index] < valuesGoal[index]){
					response.className += ' arrowdown';
					response.className += ' red';
				}
				else{
					response.className += ' green';
				}
			}
			else{
				p.textContent = categories[index - values.length];
				if(p.textContent == "ultra_rare"){
					p.textContent = "Tres rare"
				}
				if(categories[index - values.length] == categoriesGoal[index - values.length]){
					response.className += ' green';
				}
				else{
					response.className += ' red';
				}
				p.className += ' small-text';
			}
			response.appendChild(p);
			item.insertBefore(response, item.childNodes[4]);
		});
	});
};