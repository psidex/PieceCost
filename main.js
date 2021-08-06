const decimalPlaces = 2;

const ourSvg = `
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:#757575;fill-opacity:1;" d="M 21.871094 17.140625 L 21.871094 19.539062 L 15.945312 19.539062 C 16.382812 20.789062 16.597656 21.800781 16.597656 22.585938 L 16.597656 22.628906 C 16.597656 24.230469 15.757812 26.027344 14.074219 28.027344 C 13.40625 28.84375 12.539062 29.785156 11.460938 30.859375 C 13.171875 29.730469 14.945312 29.164062 16.773438 29.164062 C 17.789062 29.164062 18.980469 29.378906 20.34375 29.816406 C 21.9375 30.28125 23.089844 30.511719 23.789062 30.511719 C 24.945312 30.511719 26.152344 30.074219 27.398438 29.207031 L 29.230469 32.082031 C 27.574219 33.703125 25.667969 34.519531 23.519531 34.519531 C 22.246094 34.519531 20.402344 34.113281 17.992188 33.300781 L 17.164062 32.996094 C 16.207031 32.671875 15.246094 32.515625 14.289062 32.515625 C 12.753906 32.515625 11.171875 33.050781 9.542969 34.128906 L 7.457031 31.253906 C 10.417969 28.699219 12.15625 26.503906 12.679688 24.675781 C 12.828125 24.15625 12.898438 23.601562 12.898438 23.023438 C 12.898438 23.023438 12.898438 23.011719 12.898438 22.976562 L 12.898438 22.9375 C 12.898438 21.832031 12.546875 20.695312 11.851562 19.539062 L 7.058594 19.539062 L 7.058594 17.140625 L 10.585938 17.140625 C 9.253906 14.9375 8.511719 13.355469 8.371094 12.394531 C 8.3125 12.132812 8.277344 11.84375 8.277344 11.527344 L 8.277344 11.089844 C 8.277344 8.214844 9.441406 5.863281 11.765625 4.039062 C 13.683594 2.523438 15.960938 1.769531 18.605469 1.769531 L 18.644531 1.769531 C 21.925781 1.769531 24.46875 2.847656 26.265625 4.996094 L 27.007812 6.085938 C 27.789062 7.417969 28.199219 9.351562 28.226562 11.875 L 24.394531 11.875 C 24.28125 7.40625 22.300781 5.164062 18.472656 5.164062 C 15.886719 5.164062 14.074219 6.085938 13.03125 7.910156 C 12.566406 8.726562 12.332031 9.652344 12.332031 10.699219 L 12.332031 10.738281 C 12.332031 11.84375 12.652344 13.007812 13.292969 14.226562 L 13.292969 14.273438 L 13.332031 14.3125 C 13.449219 14.574219 13.609375 14.890625 13.8125 15.269531 L 14.203125 15.921875 L 14.902344 17.140625 Z M 21.871094 17.140625 "/>
</g>
`;

const main = () => {
    console.log('Inserting £ per piece');
    const details = document.querySelector('[data-test=product-details]');

    if (details === null) {
        return;
    }

    const priceElem = document.querySelector('[data-test=product-price]');
    const price = parseFloat(priceElem.innerText.split('\n')[1].substr(1));

    const peiceCountSibling = details.querySelector('[data-test=product-details__piece-count-wrapper]');
    const pieceCount = parseInt(peiceCountSibling.parentElement.children[1].innerText, 10);

    const vipSibling = peiceCountSibling.nextElementSibling;

    const pricePer = price / pieceCount;
    const pricePerStr = `£${pricePer.toFixed(decimalPlaces)}`;

    const ourElem = peiceCountSibling.cloneNode(true);
    ourElem.classList.add('pricePerPieceInfo');
    ourElem.querySelector('svg').innerHTML = ourSvg;
    ourElem.querySelector('[data-test=product-details__piece-count]').textContent = pricePerStr;
    ourElem.children[ourElem.childElementCount - 1].textContent = 'Per Piece';

    details.insertBefore(ourElem, vipSibling);
};

window.addEventListener('load', main);

const observer = new MutationObserver(((mutations) => {
    const pieces = document.querySelector('[data-test=product-details__piece-count-wrapper]');
    if (pieces !== null && pieces.innerText != '') {
        if (document.querySelector('.pricePerPieceInfo') === null) {
            main();
        }
    }
}));

observer.observe(document, { childList: true, attributes: false, subtree: true });
