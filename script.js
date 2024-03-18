function encrypt() {
    var input = document.getElementById("inputText").value;
    var output = btoa(input);
    document.getElementById("outputText").value = output;
};

function decrypt() {
    var input = document.getElementById("outputText").value;
    var output = atob(input);
    document.getElementById("inputText").value = output;
};

function encrypt() {
    var input = document.getElementById("inputText").value;
    var output = btoa(input);
    document.getElementById("outputText").value = output;
};

function decrypt() {
    var input = document.getElementById("inputText").value;
    var output = atob(input);
    document.getElementById("outputText").value = output;
};