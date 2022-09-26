// global 

let notifMain = document.body.getElementsByClassName('container')[0].children;
notifArray = notifMain[0].children;


// Event handlers and adjacent functions

let handleActivity = function(event) {
    notification = event.target.closest('.notification');
    setActivity(notification);
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

let setActivity = function(notification) {
    if (notification.style.backgroundColor !== 'white'){
        notification.style.backgroundColor = 'white';
        notification.querySelector('#red-circle').style.color = 'transparent';
    } else {
        notification.style.backgroundColor = 'hsl(210, 60%, 98%)';
        notification.querySelector('#red-circle').style.color = 'red';
    }
}


// Set up eventListeners
for (let i = 0; i< notifArray.length; i++){
    notifArray[i].addEventListener('click', handleActivity); 
}
