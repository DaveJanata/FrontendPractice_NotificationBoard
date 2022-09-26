// global 

let notifMain = document.body.getElementsByClassName('container')[0].children;
notifArray = notifMain[0].children;


// Event handlers and adjacent functions

let handleActivity = function(event) {
    notification = event.target.closest('.notification');
    if (notification.style.backgroundColor !== 'white'){ 
        setInactive(notification);
    } else {
        setActive(notification);
    }
    document.body.getElementsByClassName('numNotifs')[0].innerHTML = countActiveNotifs();
}


let countActiveNotifs = function () {
    activeArray = [];
    for (let i = 0; i< notifArray.length; i++){
        if (notifArray[i].style.backgroundColor !== 'white'){
            activeArray.push(true);
        } else {
            activeArray.push(false);
        }
    }
    return activeArray.filter(x => x === true).length;
}

let setActive = function(notification) {
        notification.style.backgroundColor = 'hsl(210, 60%, 98%)';
        notification.querySelector('#red-circle').style.color = 'red';
        notification.style.boxShadow = '0px 1px hsl(205, 33%, 90%)';
}

let setInactive = function(notification) {
    notification.style.backgroundColor = 'white';
    notification.style.boxShadow = '0px 0px white';
    notification.querySelector('#red-circle').style.color = 'transparent';
}

let handleAll = function() {
    for (let i = 0; i< notifArray.length; i++){
        setInactive(notifArray[i]); 
    }
    document.body.getElementsByClassName('numNotifs')[0].innerHTML = countActiveNotifs();
}
// Set up eventListeners
for (let i = 0; i< notifArray.length; i++){
    notifArray[i].addEventListener('click', handleActivity); 
}

document.querySelector('h2').addEventListener('click', handleAll);