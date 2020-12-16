const translateBtn = document.querySelector('#translate');
const input = document.querySelector('#english-input-area');
const output = document.querySelector('#output');

translateBtn.addEventListener('click', translate);

function translate() {
	if (input.value.length === 0) alert('Please enter some text to translate !');
	else {
		const apiUrl = 'https://api.funtranslations.com/translate/minion.json';
		const encodedText = encodeURI(input.value);
		const fullUrl = `${apiUrl}?text=${encodedText}`;
		fetch(fullUrl)
			.then((res) => res.json())
			.then((data) => {
				if (data.error === undefined)
					return (output.innerText = data.contents.translated);
				return alert(data.error.message);
			})
			.catch((err) => alert('Error ocurred please try again later', err));
	}
}
