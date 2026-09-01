let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        if (display.value.includes("/0")) {
            display.value = "Cannot divide by zero";
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
