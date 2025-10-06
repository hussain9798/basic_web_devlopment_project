const inc = document.getElementById("count-el");
const sev = document.getElementById("show");
const dec = document.getElementById("count-el");


let count = 0;

function increase() {
    count += 1;
    inc.textContent = count;
}

function decrease() {
    count -= 1;
    dec.textContent = count;

}
function reset() {
    count = 0;
    inc.textContent = count;
}

function save() {
    let countStr = count + " - ";
    sev.textContent += countStr;
    
}

function resPrev() {
    sev.textContent = "Previous Count:- "
}