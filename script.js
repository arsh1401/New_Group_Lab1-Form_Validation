function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.hotelForm.lname.value;
    var phone = document.hotelForm.phone.value;
    var ppl = document.hotelForm.numberppl.value;
    var checkinDate = document.hotelForm.checkinDate.value;
    var checkoutDate = document.hotelForm.checkoutDate.value;

    if (fname == null || fname == "") {
        alert("Please provide your First Name!");

        return false;
    }
    if (lname == null || lname == "") {
        alert("Please provide your Last Name!");

        return false;
    }

    var alphaExp = /^[a-zA-Z]+$/;

    if (!fname.match(alphaExp)) {
        alert("Please enter only alphabets in First Name");
        fname.focus();
        return false;
    }
    if (!lname.match(alphaExp)) {
        alert("Please enter only alphabets in Last Name");
        lname.focus();
        return false;
    }

    if (phone.length != 10) {
        alert("Write Phone in correct format");
    }

    if (ppl < 1 || ppl > 50 || ppl == null || ppl == "") {
        alert("You cannot book rooms for more than 50 people and less than 1");
    }

    if (checkoutDate <= checkinDate) {
        alert("Checkout Date should be ahead of Checkin Date");
    }
}

function toggleDay() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("main").style.backgroundColor = "rgb(10,10,10)";
}

function toggleNight() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("main").style.backgroundColor = "rgb(250, 250, 250)";
}
