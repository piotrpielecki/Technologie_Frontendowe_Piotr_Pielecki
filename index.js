function add(A, B) {
    $("#input-C").val(parseInt(A) + parseInt(B));
}

function substract(A, B) {
    $("#input-C").val(parseInt(A) - parseInt(B));
}

function multiply(A, B) {
    $("#input-C").val(parseInt(A) * parseInt(B));
}

function divide(A, B) {
    $("#input-C").val(parseInt(A) / parseInt(B));
}

function escalate(A, B) {
    $("#input-C").val(parseInt(A) ** parseInt(B));
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function error(x = null) {
    switch(x) {
        case "A":
            $("#error-A").attr("class", "alert alert-danger");
            break;
        case "B":
            $("#error-B").attr("class", "alert alert-danger");
            break;
        default:
            $("#error-A").attr("class", "alert alert-danger");
            $("#error-B").attr("class", "alert alert-danger");
            break;
    }
}

function unError(x = null) {
    switch(x) {
        case "A":
            $("#error-A").attr("class", "alert alert-danger d-none");
            break;
        case "B":
            $("#error-B").attr("class", "alert alert-danger d-none");
            break;
        default:
            $("#error-A").attr("class", "alert alert-danger d-none");
            $("#error-B").attr("class", "alert alert-danger d-none");
            break;
    }
}

jQuery(function () {
    $("#submit").click(function () {
        var A = $("#input-A").val();
        var B = $("#input-B").val();

        if (isNumeric(A) && isNumeric(B)) {
            switch (window.location.pathname) {
                case "/":
                case "/index.html":
                    add(A, B);
                    break;
                case "/subtraction.html":
                    substract(A, B);
                    break;
                case "/multiplication.html":
                    multiply(A, B);
                    break;
                case "/division.html":
                    divide(A, B);
                    break;
                case "/escalate.html":
                    escalate(A, B)
                    break;
                default:
                    add(A, B);
                    break;
            }
            unError("A");
            unError("B");
        } else if (!isNumeric(A) && isNumeric(B)) {
            error("A");
            unError("B");
            $("#input-C").val(0);
        } else if (!isNumeric(B) && isNumeric(A)) {
            error("B");
            unError("A");
            $("#input-C").val(0);
        } else {
            console.log("both are nonnumeric");
            error();
            $("#input-C").val(0);
        }
    });
})