function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLast() {
    let curr = document.getElementById("display").value;
    document.getElementById("display").value = curr.slice(0, -1)
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }  catch {
        document.getElementById("display").value = "Error";
    }
}

document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (!isNaN (key) || ["+", "-", "*", "/", "."].includes(key)) {
        apppendValue(key);
    }

    else if(key == "Enter") {
        event.preventDefault();
        calculateResult();
    }
    else if(key == "Backspace") {
        deleteLast();
    }
    else if(key == "Escape") {
        clearDisplay();
    }
});