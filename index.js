const http = require('http');

const PORT = 4000;

let message = 'DEVELOPMENT :(';

if (process.env.NODE_ENV === 'production') {
	message = 'PRODUCTION :)';
}

http
	.createServer((req, res) => {
		res.write(`<h1>${message}</h1>`);
		res.end();
	})
	.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
