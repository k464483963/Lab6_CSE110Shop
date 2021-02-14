// product-item.js

const template = document.createElement('template');
template.innerHTML = `
<style>
h1 {
  text-align: center;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-size: 18pt;
}

.container {
  width: 70%;
  margin: auto;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0px;
}

.icon {
  height: 20px;
  width: 20px;
  display: inline-block;
}

.logo {
  padding-left: 20px;
}

.nav-link {
  align-items: center;
  justify-content: center;
  padding: 10px;
}

#shop-icon {
  content: url("/assets/shop-icon.png");
}

#cart-icon {
  content: url("/assets/cart-icon.png");
}

/* Custom Element CSS starts here */

.price {
  color: green;
  font-size: 1.8em;
  font-weight: bold;
  margin: 0;
}

.product {
  align-items: center;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-areas: 
  'image'
  'title'
  'price'
  'add';
  grid-template-rows: 67% 11% 11% 11%;
  height: 450px;
  filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
  margin: 0 30px 30px 0;
  padding: 10px 20px;
  width: 200px;
}

.product > button {
  background-color: rgb(255, 208, 0);
  border: none;
  border-radius: 5px;
  color: black;
  justify-self: center;
  max-height: 35px;
  padding: 8px 20px;
  transition: 0.1s ease all;
}

.product > button:hover {
  background-color: rgb(255, 166, 0);
  cursor: pointer;
  transition: 0.1s ease all;
}

.product > img {
  align-self: center;
  justify-self: center;
  width: 100%;
}

.title {
  font-size: 1.1em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title:hover {
  font-size: 1.1em;
  margin: 0;
  white-space: wrap;
  overflow: auto;
  text-overflow: unset;
}
</style>
<li class="product">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
                    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
                    <p class="price">$109.95</p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
</li> 
`;



class ProductItem extends HTMLElement {
  // TODO

  constructor() {
    super();  
    //const header = document.createElement('header');
    // let value = JSON.parse(localStorage.getItem(2));
    // let string = document.getElementsByName(value).image;
    // console.log(value.image);
    
    this.root = this.attachShadow({mode: 'open'});
    //this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.innerHTML = `qwerwqerqwerqwerqwerwrqwrqwerqwrqwrqw`;
    

  }



}

customElements.define('product-item', ProductItem);

