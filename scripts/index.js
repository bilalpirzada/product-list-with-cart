import { items } from "../data/items.js";

/*
1. iterate through the items array
2. save the html in a variable
3. render the html
*/

let html = '';
items.forEach((item)=>{

    html+=` <div>
                  <div class="item-img-container">
                      <img class="item-img" src="${item.image.desktop}" />

                      <div class="cart-btn-container">
                        <button class="cart-btn">
                          <img class="cart-img" src="./assets/images/icon-add-to-cart.svg"/>
                          Add to Cart
                        </button>
                      </div>
                  </div>

                  <p class="subtitle">${item.category}</p>
                  <p class="title">${item.name}</p>
                  <p class="price">$${(item.priceCents/100).toFixed(2)}</p>
              </div>`;
})

document.querySelector('.js-cart-items-grid').innerHTML = html;