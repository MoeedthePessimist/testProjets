const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

const file = fs.readFileSync(
    './hello.txt'
);

console.log(file.toString());


fs.appendFile('./hello.txt', ' This is really cool!', err => {
    console.log(err);
});

fs.writeFile('./hello.txt', 'sad to see you go', err => {
    if(err){
        console.log(err);
    }
});

fs.unlink('./bye.txt', err => {
    if(err)
        console.log(err);
});
