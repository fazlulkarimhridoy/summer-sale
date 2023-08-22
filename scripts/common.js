const totalPriceField = document.getElementById('total-price');
const priceField = document.getElementById('total');
const listElement = document.getElementById('product-list');
const discountFieldString = document.getElementById('discount-price');
const couponButton = document.getElementById('btn-coupon');
const purchaseButton = document.getElementById('purchase-button');


// common total-function
function commonCardById(priceId, titleId) {
    const price = cardPriceById(priceId);

    // total-price
    const totalPriceString = totalPriceField.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newTotalPrice = totalPrice + price;
    const newTotalPriceDecimal = newTotalPrice.toFixed(2);
    totalPriceField.innerText = newTotalPriceDecimal;
    // disable & enable coupon
    if(newTotalPriceDecimal >= 200){
        couponButton.disabled = false;
    }
    else{
        couponButton.disabled = true;
    }

    // disable & enable purchase button
    if(newTotalPriceDecimal != 0){
        purchaseButton.disabled = false;
    }
    else{
        purchaseButton.disabled = true;
    }
        
    

    // price after discount
    priceField.innerText = newTotalPriceDecimal;
    

    // set element is list
    const cardName = cardTitle(titleId);
    const newListElement = document.createElement('li');
    newListElement.innerText = cardName;
    listElement.appendChild(newListElement);
}




//common price-function
function cardPriceById(priceId) {
    const cardElement = document.getElementById(priceId);
    const cardPriceString = cardElement.innerText;
    const cardPrice = parseFloat(cardPriceString);
    return cardPrice;
}


// common card title
function cardTitle(titleId) {
    const cardTitleElement = document.getElementById(titleId);
    const cardTitle = cardTitleElement.innerText;
    return cardTitle;
}

// set discount & total price
function couponSet() {
    const couponElement = document.getElementById('coupon-id');
    const couponValue = couponElement.value;
    couponElement.value = " ";
    if (couponValue === 'SELL200') {
        const newTotalPrice = cardPriceById('total-price');
        const totalPriceFiledString = document.getElementById('total')

        // discount price set
        if (newTotalPrice > 200) {
            const discountPrice = newTotalPrice * 0.2;
            const discountPriceDecimal = discountPrice.toFixed(2);
            discountFieldString.innerText = discountPriceDecimal;
            
            // total price set
            const totalPrice = newTotalPrice - discountPrice;
            totalPriceFiledString.innerText = totalPrice;
        }
        else {
            alert('Price does not meet discount requirement');
        }

    }
    else {
        alert('Incorrect Coupon code!')
        return;
    }
}


// clearing html after clicking go home
document.getElementById('final-purchase').addEventListener('click', function () {
    totalPriceField.innerHTML = "00.00";
    priceField.innerHTML = "00.00";
    listElement.innerText = " ";
    discountFieldString.innerText = "00.00";
    purchaseButton.disabled = true;
    couponButton.disabled = true;

})







