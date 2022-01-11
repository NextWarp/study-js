const fs = require('fs');
const env = process.env.APP_ENV;
const inputURI = env === 'local' ? 'src/1006' : '/dev/stdin';
const input = fs.readFileSync(inputURI).toString().replaceAll('\r\n', '\n').split('\n');

const solution = (input) => {
    console.log(input);
}

solution(input);
