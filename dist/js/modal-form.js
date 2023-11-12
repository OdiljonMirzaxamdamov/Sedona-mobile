const formFeedbackButton = document.querySelector(".form-feedback__button");
const modalFormSuccess = document.querySelector(".modal-form--success");
const modalFormFailure = document.querySelector(".modal-form--failure");
const modalFormButtonSuccess = document.querySelector(".modal-form__button--success");
const modalFormButtonFailure = document.querySelector(".modal-form__button--failure");

const form = document.querySelector("form");
const firstname = form.querySelector("[name=firstname]");
const lastname = form.querySelector("[name=lastname]");
const phone = form.querySelector("[name=phone]");
const email = form.querySelector("[name=email]");


formFeedbackButton.addEventListener("click", function (evt){
    evt.preventDefault();
    if (!firstname.value || !lastname.value || !phone.value || !email.value) {
        modalFormFailure.classList.remove("modal-form--remove");
    } else {
        modalFormSuccess.classList.remove("modal-form--remove");
    }
});

modalFormButtonSuccess.addEventListener("click", function (evt){
    evt.preventDefault();
    modalFormSuccess.classList.add("modal-form--remove");
});

modalFormButtonFailure.addEventListener("click", function (evt){
    evt.preventDefault();
    modalFormFailure.classList.add("modal-form--remove");
});


window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!modalFormSuccess.classList.contains("modal-form--remove")){
            modalFormSuccess.classList.add("modal-form--remove")
        }
        if (!modalFormFailure.classList.contains("modal-form--remove")){
            modalFormFailure.classList.add("modal-form--remove")
        }
    }
});