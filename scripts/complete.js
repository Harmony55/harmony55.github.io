window.onload = function() {
	let data;
	let essaie = 0;
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
	document.querySelector('form').addEventListener('submit', function(event) {
	    event.preventDefault();

	    addToList();
	});
	document.querySelector('button').addEventListener('click', function(event) {
		event.preventDefault();

		addToList();
	});
	function addToList(){

		essaie += 1;

		const item = data.find(item => item.texts.name === document.querySelector('input').value);
		document.querySelector('input').blur();
		
		let datalist = document.getElementById('names');

		let options = Array.from(datalist.options);

		let names = options.map(option => option.value);

		let isInside = names.includes(item.texts.name);
		if(!isInside){
			return;
		}


		const today = new Date();
		const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
		Math.seedrandom(seed.toString());
		const itemGoal = data[Math.floor(Math.random() * data.length)];
		console.log(seed);

		const values = [item.values.attack, item.values.hp, item.values.mana];
		const categories = [item.categories.rarity, item.categories.creature_type];

		const valuesGoal = [itemGoal.values.attack, itemGoal.values.hp, itemGoal.values.mana];
		const categoriesGoal = [itemGoal.categories.rarity, itemGoal.categories.creature_type];

		const inputed = item;


		let option = datalist.querySelector('option[value="'+inputed.texts.name+'"]');

		if(option){
		    datalist.removeChild(option);
		}
		
		let form = document.getElementById('fname');
		form.value = '';

		items = document.querySelectorAll('.item2');
		items.forEach(item => {
			const response = document.createElement('div');
			response.className = 'response';
			response.style.display = 'flex';
			const img = document.createElement('img');
			const div = document.createElement('div');
			const span = document.createElement('span');
			span.textContent = inputed.texts.name;
			span.className = "tooltiptext";
			img.src = './images/cards/'+inputed.texts.name+'.png';
//			img.alt = 'New Image';
			response.style.opacity = 1.0;
			img.className = "icon";
			img.style.width = 400;
			div.className = "tooltip";
			if(itemGoal.texts.name == inputed.texts.name){
				response.className += ' green';
			}
			else{
				response.className += ' red';
			}
			response.appendChild(div);
			div.appendChild(img);
			div.appendChild(span);
			item.insertBefore(response, item.childNodes[4]);
		});

		items = document.querySelectorAll('.item');
		items.forEach((item, index) => {
			const response = document.createElement('div');
			response.className = 'response';
			response.style.animationDelay = ((index+1)/2)+'s';
			const p = document.createElement('p');
			p.className = 'text';
			setTimeout(() => {
				response.style.opacity = 1.0;
			}, (index+1)*500);
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
				if(p.textContent == "null"){
					p.textContent = "Aucun"
				}
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

		setTimeout(() => {
			if(itemGoal.texts.name == inputed.texts.name){
				var modal = document.getElementById("myModal");
				modal.style.display = "block";
				var modalTexte = document.getElementById("modalTexte");
				modalTexte.textContent = "Bravo ! Vous avez trouve la carte en "+essaie+" essais !";
			}
		}, 6*500);

	}

};