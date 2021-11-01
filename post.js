const fetch = require('node-fetch');

module.exports = async (userId) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};
