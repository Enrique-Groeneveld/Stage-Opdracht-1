var number = document.querySelector('#number');
var remainder = document.querySelector('#remainder');
var submit = document.querySelector('button[type="submit"]');
var result = document.querySelector('#result');

function validateNumber(number, remainder) {
    if (typeof number != 'string') return false;

    number = number.replace(/\D/g, '').split('').reverse();

    if (number.length < 6 || number.length > 14) return false;

    var total = number.reduce((ttl, num, idx) => ttl + (idx + 1) * num, 0);
    return total % parseInt(remainder) == 0;
}

submit.onclick = () => {
    var isValid = validateNumber(number.value, remainder.value);
    result.innerText = isValid ? 'Valid' : 'Invalid';
    result.style.color = isValid ? 'limegreen' : 'red';
}

