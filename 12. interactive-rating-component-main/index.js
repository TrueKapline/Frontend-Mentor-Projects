'use strict'

const rating = document.querySelector('.rating__state');
const gratitude = document.querySelector('.gratitude__state');
const selectedRating = gratitude.querySelector('.rating__selected');
const button = document.querySelector('button');

button.onclick = () => {
    const elem = document.querySelector('input:checked');

    if (elem !== null) {
        selectedRating.innerHTML = `You selected ${elem.value} out of 5`;
        rating.style.display = 'none';
        gratitude.style.display = 'flex';
    } else {
        alert('Please select a rating');
    }
}