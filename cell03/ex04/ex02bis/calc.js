$(function () {

    function isPositiveInteger(value) {
        return /^\d+$/.test(value);
    }

    $("#submit").click(function () {

        const left = $("#left").val();
        const right = $("#right").val();
        const operator = $("#operator").val();

        // check positive integers
        if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
            alert("Error :(");
            return;
        }

        const a = parseInt(left);
        const b = parseInt(right);
        let result;

        // division or modulo by zero
        if ((operator === "/" || operator === "%") && b === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            case "%":
                result = a % b;
                break;
        }

        alert(result);
        console.log(result);
    });

    // alert every 30 seconds
    setInterval(function () {
        alert("Please, use me...");
    }, 30000);

});
