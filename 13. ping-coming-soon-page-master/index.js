'use strict';

const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const button = document.querySelector('button');
const emailInput = document.querySelector('.input');
const errorMsg = document.querySelector('.error');
const image = document.querySelector('.main_image');
const mediaQueryList = window.matchMedia('(min-width: 670px)');
let errorActive = false;

button.onclick = () => {
    if (window.innerWidth <= 670) {
        if (emailInput.value.match(emailValidation)) {
            validSuccessMobile();
        } else {
            checkInput();
            changeOnError();
            errorMsg.style.marginTop = '-78px';
            button.style.marginTop = '42px';
            image.style.marginTop = '120px';
        }
    } else {
        if (emailInput.value.match(emailValidation)) {
            validSuccessDesktop();
        } else {
            checkInput();
            changeOnError();
        }
    }
};

const validSuccessDesktop = () => {
    emailInput.style.border = '1px solid var(--light-gray)';
    errorMsg.style.opacity = '0';
    errorActive = false;
    alert(`Your email is: ${emailInput.value}`);
}

const validSuccessMobile = () => {
    emailInput.style.border = '1px solid var(--light-gray)';
    errorMsg.style.opacity = '0';
    errorMsg.style.marginTop = '6px';
    button.style.marginTop = '10px';
    image.style.marginTop = '68px';
    errorActive = false;
    alert(`Your email is: ${emailInput.value}`);
}

const changeOnError = () => {
    emailInput.style.border = '1px solid var(--light-red)';
    errorMsg.style.opacity = '1';
    errorActive = true;
}

const checkInput = () => {
    if (emailInput.value === '') {
        errorMsg.innerHTML = 'Whoops! It looks like you forgot to add your email';
    } else {
        errorMsg.innerHTML = 'Please provide a valid email address';
    }
}

function fixPos(e) {
    if (e.matches) {
        errorMsg.style.margin = '8px 0 0 30px';
        button.style.marginTop = '0';
        image.style.marginTop = '63px';
    } else {
        errorMsg.style.marginTop = '-78px';
        image.style.marginTop = '120px';
        errorActive === false ? button.style.marginTop = '10px' : button.style.marginTop = '42px';
    }
}

mediaQueryList.addListener(fixPos);

