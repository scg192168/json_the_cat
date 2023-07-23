const request = require('request');
//grab breed name from the terminal
const breedName = process.argv.slice(2)[0];

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    console.log('Response Status Code:', response.statusCode);
    console.log('Response Data:', data);
    console.log('Type of Data:', typeof data);
  }
});