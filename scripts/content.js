let isRunning = false;

function startStop(speed){
    isRunning = (!isRunning)
    if(isRunning) move(speed);
}

function move(speed){
    requestAnimationFrame(() => {
        window.scrollBy(0,speed)
        if(isRunning) move(speed);
    })
}

chrome.runtime.onMessage.addListener((request , sender , sendResponse) => {
    startStop(request.speed);
})