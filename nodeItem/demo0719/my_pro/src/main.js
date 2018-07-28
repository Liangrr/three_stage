const personModule = require('./person');

document.querySelector('h4 span').innerText = personModule.name;
document.querySelector('h5 span').innerText = personModule.age;
document.querySelector('h6 span').innerText = personModule.address;
