let cart; // current cart
$(document).ready(function(){

    // get sessionStorage
    cart = JSON.parse(sessionStorage.getItem('hertz@cart'));
    console.log("shopping cart", cart)
    for(let i=0; i < cart.length; i++){
        let cartComponent = 
        `
        <div id="${cart[i].id}">
              <div class="basket-product">
                <div class="item">
                  <div class="product-image">
                    <img class="img" src="${cart[i].images}" alt="${cart[i].brand}-${cart[i].model}-${cart[i].modelYear}" class="product-frame">
                  </div>
                  <div class="product-details">
                    <h5><strong> ${cart[i].modelYear}-${cart[i].brand}-${cart[i].model} </strong></h5>
                  </div>
                </div>
                <div class="price">$${cart[i].pricePerDay}</div>
                <div class="quantity">
                  <input type="number" value="1" min="0" type="number" id="car-input-${cart[i].id}" class="quantity-field">
                </div>
                <div class="remove">
                  <button type="submit" onClick="deleteItem(${cart[i].id})">Remove</button>
                </div>
              </div>
            </div>
        `
        $(".showRent").append(cartComponent)
    }
    
    if(cart.length > 0){ // there is something in cart: show checkout button
        $(".checkout-button").append(`<button type="submit" class="checkout-cta" onClick="clickCheckout()">Checkout</button>`)
    }
});

function deleteItem(id){
    // filter removed car
    cart = cart.filter(car => car.id != id)
    // re-set storage
    window.sessionStorage.setItem('hertz@cart', JSON.stringify(cart))
    // remove html
    document.getElementById(`${id}`).innerHTML = ""
}

function clickCheckout(){
    if(cart.length <= 0){
        alert("No car has been reserved!")
        window.location.href='AJAX2.html'
    } else {
        let inputClasses = document.getElementsByClassName(`quantity-field`)
        let value = validate(inputClasses)
        if(value){
            window.location.href='keluar.html'
            window.sessionStorage.setItem("hertz@total", value)
        }
    }
}

function validate(input){
    let shopping_cart = [];
    let cartTotal = 0;
    for(let i=0; i < input.length; i++) {
        if(input[i].value <= 0 || !input[i].value){
            alert(`Please input a valid number of rental days!`);
            return false;
        } else {
            let car = cart.find(car => input[i].id.split('-')[2] == car.id );
            cartTotal += input[i].value * car.pricePerDay;
        }
    }
    return cartTotal;
}