const btnStart = document.querySelector('#btnStart');
const wlcDiv = document.querySelector('#wlc');
const containerDiv = document.querySelector('#container');
const notesDiv = document.querySelector('#notes');
var btnSave = document.querySelector('#btnSave');
var notepad = document.querySelector('#notepad');

btnStart.addEventListener('click', () => {
    wlcDiv.style.opacity = '0';
    wlcDiv.style.transition = 'opacity 1s ease-in-out';
    containerDiv.style.transform = 'scale(1.2)';
    containerDiv.style.transition = 'transform 1s ease-in-out';
    btnStart.disabled = true;
    btnStart.style.pointerEvents = 'none';
    notesDiv.style.display = 'block';
    notesDiv.style.opacity = '0';
    notesDiv.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        notesDiv.style.opacity = '1';
    }, 1000);
});


// i do NOT understand this 
btnSave.addEventListener('click', function() {
    var blob = new Blob([notepad.value], {type: 'text/plain'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'notes.txt';
    a.click();
});