// How many decimal places to show the cost per piece to.
const decimalPlaces = 2;

// Extracted from ./icons/priceper.svg
const ourSvg = `
<g id="layer1-0" transform="matrix(2.075085,0,0,2.0684437,0,0.8)">
<path
  style="fill:#757575;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.264583"
  d="M 3.91912,4.066935 V 4.701522 H 2.35126 c 0.11576,0.330729 0.1726,0.598413 0.1726,0.806152 v 0.01137 c 0,0.423747 -0.22221,0.89917 -0.66766,1.428337 C 1.67947,7.163389 1.45002,7.412469 1.16477,7.696689 1.61746,7.398 2.08668,7.248138 2.57037,7.248138 c 0.26872,0 0.58394,0.05684 0.94464,0.172599 0.42168,0.12299 0.72657,0.183968 0.91158,0.183968 0.30592,0 0.62528,-0.115755 0.95498,-0.345198 L 5.86629,8.020184 C 5.42808,8.449098 4.92371,8.6651061 4.35527,8.6651061 4.01834,8.6651061 3.53052,8.557619 2.89283,8.342645 L 2.67372,8.262035 C 2.42051,8.176255 2.16626,8.134911 1.91304,8.134911 c -0.40617,0 -0.82475,0.141593 -1.25573,0.426847 L 0.1054,7.801081 C 0.88882,7.125153 1.34874,6.54431 1.48723,6.060618 c 0.0393,-0.137459 0.0579,-0.28422 0.0579,-0.437182 0,0 0,-0.0031 0,-0.0124 v -0.01033 c 0,-0.292489 -0.093,-0.593246 -0.27699,-0.89917 H 0 V 4.06695 H 0.93328 C 0.58085,3.48404 0.38448,3.065461 0.34727,2.811213 0.33177,2.741963 0.32247,2.665485 0.32247,2.58177 V 2.465999 c 0,-0.760677 0.308,-1.382861 0.92294,-1.865519 C 1.75288,0.199471 2.35542,0 3.05512,0 h 0.0103 C 3.93358,0 4.60641,0.285254 5.08183,0.853695 L 5.2782,1.142049 c 0.20671,0.352434 0.31523,0.86403 0.32246,1.53169 H 4.58677 C 4.55677,1.491382 4.0328,0.898136 3.01994,0.898136 c -0.68419,0 -1.16375,0.243913 -1.4397,0.726571 -0.12299,0.216007 -0.185,0.460954 -0.185,0.73794 v 0.01033 c 0,0.292488 0.0847,0.60048 0.25424,0.922941 v 0.0124 l 0.0103,0.01033 c 0.031,0.06925 0.0734,0.152962 0.12712,0.253214 l 0.10336,0.172599 0.185,0.322461 z m 0,0"
  id="path30" />
<path
  style="fill:#757575;fill-opacity:1;stroke-width:0.0602094"
  d="M 10.996603,17.501973 8.768851,16.341934 8.753211,13.43855 8.737571,10.535168 9.912237,9.9689421 c 1.143579,-0.551241 1.174665,-0.571059 1.174665,-0.748914 0,-0.264099 0.298574,-0.574482 0.711091,-0.7392121 0.301054,-0.120221 0.448382,-0.1368 1.215613,-0.1368 0.767228,0 0.914556,0.01659 1.215609,0.1368 0.39251,0.1567421 0.687266,0.4544091 0.742733,0.7500681 0.03642,0.194159 0.07349,0.216736 1.207159,0.735261 l 1.16958,0.5349529 v 2.897574 2.897574 l -1.97186,1.151572 c -1.084524,0.633368 -2.012503,1.165664 -2.062176,1.182886 -0.04967,0.01722 -1.0928,-0.490707 -2.318065,-1.128731 z m 4.191349,-0.385702 1.736323,-1.008507 0.0016,-2.544865 0.0016,-2.544866 -0.285996,0.139763 c -0.157297,0.07687 -0.956215,0.463421 -1.775373,0.859002 l -1.489379,0.719233 -7.94e-4,2.694376 c -5.29e-4,1.481905 0.01646,2.694374 0.03757,2.694374 0.02111,0 0.819722,-0.453829 1.774698,-1.00851 z m -2.280057,-4.299315 c -0.05054,-0.05054 -3.661156,-1.796894 -3.715107,-1.796894 -0.01791,0 -0.03257,1.146334 -0.03257,2.547411 v 2.547414 l 1.881544,0.972976 1.881548,0.972979 0.01569,-2.598537 c 0.0086,-1.429197 -0.0054,-2.619602 -0.03111,-2.645349 z m 3.372091,-1.921327 c 0.223527,-0.111353 0.406415,-0.21939 0.406415,-0.24008 0,-0.032 -1.577871,-0.7794679 -1.645422,-0.7794679 -0.01302,0 -0.03962,0.1346959 -0.05912,0.2993229 -0.04596,0.388035 -0.115128,0.508934 -0.415772,0.72672 -0.49698,0.360011 -1.385292,0.497999 -2.15456,0.334685 -0.828088,-0.175802 -1.263298,-0.517459 -1.265322,-0.993323 -0.0019,-0.4239569 -0.03309,-0.4240019 -0.92442,-0.0013 -0.448381,0.212611 -0.815364,0.400116 -0.815515,0.416671 -1.5e-4,0.01656 0.828374,0.426746 1.841164,0.911532 l 1.841442,0.881425 1.392349,-0.676836 c 0.765791,-0.372261 1.575234,-0.767943 1.798762,-0.879295 z m -2.203075,-0.0048 c 0.521954,-0.195286 0.622575,-0.324934 0.622575,-0.802171 V 9.6937041 l -0.225784,0.149045 c -0.373259,0.2463929 -0.918478,0.3535939 -1.610223,0.3166029 -0.686451,-0.03671 -0.947068,-0.101696 -1.260321,-0.3142749 -0.121296,-0.08232 -0.230315,-0.149664 -0.242263,-0.149664 -0.01196,0 -0.0073,0.169338 0.01029,0.3763089 0.04693,0.55192 0.267525,0.754956 1.002331,0.922562 0.487868,0.111278 1.253811,0.06476 1.703404,-0.103455 z m 0.09854,-1.1566759 c 0.551326,-0.26974 0.55027,-0.590608 -0.0028,-0.862214 -0.306895,-0.150701 -0.424711,-0.172354 -1.038574,-0.190896 -0.582972,-0.01762 -0.748723,-0.0011 -1.048713,0.104359 -0.643885,0.226383 -0.808411,0.532419 -0.438084,0.81488 0.321551,0.245258 0.765506,0.337685 1.522836,0.317034 0.584679,-0.01595 0.710396,-0.03885 1.005369,-0.183163 z"
  id="path2260" />
<path
  style="fill:#757575;fill-opacity:1;stroke:#757575;stroke-width:0.91867;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
  d="M 0.576989,15.852918 C 15.661556,0.768355 15.661556,0.768355 15.661556,0.768355"
  id="path3271" />
</g>
`;

function insertPricePer() {
    console.log('Inserting price per piece');

    const details = document.querySelector('[data-test=product-details]');

    const priceElem = document.querySelector('[data-test=product-price]');
    const price = parseFloat(priceElem.innerText.split('\n')[1].substr(1));

    const peiceCountInfoElem = details.querySelector('[data-test=product-details__piece-count-wrapper]');

    const peiceCountElem = peiceCountInfoElem.querySelector('[data-test=product-details__piece-count]');
    const pieceCount = parseInt(peiceCountElem.innerText, 10);

    const pricePer = price / pieceCount;
    const pricePerStr = `£${pricePer.toFixed(decimalPlaces)}`;

    const ourElem = peiceCountInfoElem.cloneNode(true);
    ourElem.classList.add('pricePerPieceInfo');
    ourElem.querySelector('svg').innerHTML = ourSvg;
    ourElem.querySelector('svg').setAttribute('width', 40);
    ourElem.querySelector('[data-test=product-details__piece-count]').textContent = pricePerStr;
    ourElem.children[ourElem.childElementCount - 1].textContent = 'Per Piece';

    // Insert after peiceCountInfoElem by inserting before next element.
    details.insertBefore(ourElem, peiceCountInfoElem.nextElementSibling);
}

const main = () => {
    try {
        insertPricePer();
    } catch (error) {
        // Either we haven't loaded, there isn't a price, or there aren't pieces.
    }
};

window.addEventListener('load', main);

const observer = new MutationObserver((() => {
    if (document.querySelector('.pricePerPieceInfo') === null) {
        const pieces = document.querySelector('[data-test=product-details__piece-count-wrapper]');
        if (pieces !== null && pieces.innerText !== '') {
            main();
        }
    }
}));

observer.observe(document, { childList: true, attributes: false, subtree: true });
