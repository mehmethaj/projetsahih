document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".contact .row form");
    let successMessage = document.getElementById("success-message");

    let nameInput = form.querySelector("input[placeholder='name']");
    let emailInput = form.querySelector("input[placeholder='email']");
    let phoneInput = form.querySelector("input[placeholder='number']");
    let subjectInput = form.querySelector("input[placeholder='subject']");
    let messageInput = form.querySelector("textarea");
    let submitButton = form.querySelector(".btn");

    function createErrorElement(inputField) {
        let errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.style.color = "red";
        errorElement.style.fontSize = "14px";
        errorElement.style.marginTop = "5px";
        inputField.parentNode.appendChild(errorElement);
        return errorElement;
    }

    let phoneError = createErrorElement(phoneInput);
    let emailError = createErrorElement(emailInput);
    let messageError = createErrorElement(messageInput);

    submitButton.disabled = true;

    phoneInput.addEventListener("input", function () {
        if (!phoneInput.value.startsWith("+961")) {
            phoneInput.value = "+961";
        }
    });

    function validateForm() {
        let isValid = true;

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.innerText = "❌ Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.innerText = "";
        }

        let phoneRegex = /^\+961\d{8}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneError.innerText = "❌ The phone number must be in the format +961XXXXXXXX (961 + 8 digits).";
            isValid = false;
        } else {
            phoneError.innerText = "";
        }

        if (messageInput.value.trim() === "") {
            messageError.innerText = "❌ Please enter a message.";
            isValid = false;
        } else {
            messageError.innerText = "";
        }

        submitButton.disabled = !isValid;
        return isValid;
    }

    [emailInput, phoneInput, messageInput].forEach(input => {
        input.addEventListener("input", validateForm);
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (validateForm()) {
            successMessage.innerHTML = `<h3>✅Message Sent</h3>
                 <strong>Thank you for your message</strong><br>
                 <em>your message is:<span class="user-message">"${messageInput.value}"</span></em>
            `;
            successMessage.classList.remove("hidden"); 
            successMessage.classList.add("show-message","custom-success");

            form.style.opacity = "0";  
            setTimeout(() => {
                form.style.display ="none";
            }, 500);
        }
    });
});