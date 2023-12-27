'use strict'

const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const button = document.querySelector('.button');
const emailInput = document.querySelector('.form__input');
const errorIcon = document.querySelector('.form__error-icon');
const errorMsg = document.querySelector('.form__error-msg');
const mediaQuery = window.matchMedia('(max-width: 1200px)');

button.addEventListener('click', () => {

    if (window.innerWidth <= 1200) {
        if (emailInput.value.match(emailValidation)) {
            hideError();
            emailInput.style.height = '12px';
            emailInput.style.width = '169px';
        } else  {
            showError();
            emailInput.style.height = '10px';
            emailInput.style.width = '167px';
        }
    } else {
        if (emailInput.value.match(emailValidation)) {
            hideError();
            emailInput.style.height = '14px';
            emailInput.style.width = '239px';
        } else  {
            showError();
            emailInput.style.height = '12px';
            emailInput.style.width = '237px';
        }
    }
});

function showError() {
    errorMsg.style.display = 'block';
    errorIcon.style.display = 'block';
    emailInput.style.border = '2px solid var(--soft-red)';
}

function hideError() {
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
    emailInput.style.border = '1px solid var(--border-color)';
    alert(`Your email is: ${emailInput.value}`);
}

function fixPos(e) {
    if (e.matches) {
        emailInput.style.width = '167px';
        emailInput.style.height = '10px';
    } else {
        emailInput.style.height = '12px';
        emailInput.style.width = '237px';
    }
}

mediaQuery.addListener(fixPos);

