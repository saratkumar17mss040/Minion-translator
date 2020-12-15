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
			.then((res) => {
				if (res.status === 429)
					alert(
						'Too Many Requests: Rate limit of 5 requests per hour exceeded.'
					);
				else res.json();
			})
			.then((data) => (output.innerText = data.contents.translated))
			.catch((err) => alert('Error ocurred please try again later'));
	}
}
