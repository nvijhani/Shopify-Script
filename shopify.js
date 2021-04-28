function placeGiftedButton(location) {

    var elem = document.querySelector('.productForm-buttons');
    var clone = elem.cloneNode(true);
    clone.id = 'giftedButton';

    let params = (new URL(document.location)).searchParams;
    let variantNumber = params.get("variant");

    if (location == 1) {
        elem.before(clone);
    } else if (location == 2) {
        elem.after(clone);
    } else if (location == 3) {
        var caseElem = document.querySelector('.shopify-payment-button');
        caseElem.after(clone);
    }

    var giftedBtn = document.querySelector('div#giftedButton button');
    giftedBtn.innerHTML = 'Gifted Button';
    giftedBtn.classList.remove('js-productForm-submit');
    giftedBtn.onclick = function (e) {
        e.preventDefault();
        console.log(variantNumber);
    }

}