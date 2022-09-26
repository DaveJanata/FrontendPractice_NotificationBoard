// alert('hello world');

let newNotif = document.createElement('p');
newNotif.innerHTML = 'testing shit';

let firstPfp = document.querySelector('.notification a');


let addTest = function(event) {
    event.target.parentNode.parentNode.style.backgroundColor = 'white';
    event.target.parentNode.parentNode.querySelector('.red-circle') = hidden;
}
firstPfp.addEventListener('click', addTest);


let notifMain = document.body.getElementsByClassName('container')[0].children;

notifArray = notifMain[0].children[0];

