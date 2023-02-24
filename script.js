const input = document.querySelector("#email");
const btn = document.querySelector("#btn");
const errorIcon = document.querySelector("#error");
const inputContainer = document.querySelector("#input-container");


btn.addEventListener("click", function () {

    ValidateEmail(input.value);
});



function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        return true;
    }
    else {
        input.value = "";
        input.setAttribute("placeholder", "please provide a valid email");
        errorIcon.classList.add("active");
        inputContainer.classList.add("border-warning");

        setTimeout(() => {
            input.setAttribute("placeholder", "Email Adress");
            errorIcon.classList.remove("active");
            inputContainer.classList.remove("border-warning");
        }, 1000);

        return true;
    }


}

