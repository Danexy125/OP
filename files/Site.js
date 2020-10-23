//
$('.pregits').hide();

console.log('Loading...');

const url = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.responseType = 'json';

xhr.onload = () => {
    console.log('Done:', xhr.response)
};

// Send the data XHR
window.setTimeout(() => xhr.send(), 2000);

/*function over(a) {
    $(a).css('background-color', 'rgb(127, 189, 200)')
};

function out(b) {
    $(b).css('background-color', 'rgb(183, 244, 255)')
};
*/
function pth() {
    console.log('Done...(pth)')
};

function js() {
    console.log('Done...(js)')
};

function zgit() {
    window.location = 'https://github.com/DanilProV-ctrl'
};

function ogit() {
    window.location = 'https://github.com/'
};

function hm() {
    location.reload()
};

function opgit() {
    $('.pregits').show()
};

function clgit() {
    $('.pregits').hide()
};