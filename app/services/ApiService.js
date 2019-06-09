export default {

	host: 'https://example.com.mx/api',

	makeRequest ({url = '/', method = 'GET', data={}, headers={}}) {

		//default headers
		if (!headers['Content-Type']) {
			headers['Content-Type'] = 'application/json';
		}

		// Encode URL data or set body data
		var body;
		if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
			body = Object.keys(data).map((key) => {
				return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
			}).join('&');
		} else {
			body = JSON.stringify(data);
		}
		

		let options = {
			method,
			headers,
		};

		if (method === 'POST' || method === 'PUT') options.body = body;

		return new Promise((resolve, reject) => {
			fetch(url, options).then((response) => {
				response.text().then((text) => {
					try {
						let json = JSON.parse(text);
						if (!response.ok) {
							response.responseJSON = json;
							reject(response);

						} else if (json.Error) {
							reject(json);
						} else {
							resolve(json);
						}
					} catch (SyntaxError) {
						response.responseText = text;
						reject(response);
					}
				});
			}).catch(error => reject(error));
		});
	}
};

