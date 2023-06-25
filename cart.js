let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

const cart = document.getElementById('cart');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Espresso',
        image: 'images/espresso4.png',
        price: 5
    },
    {
        id: 2,
        name: 'Americano',
        image: 'images/americano.png',
        price: 2
    },
    {
        id: 3,
        name: 'Cappiccino',
        image: 'images/cappiccino1.png',
        price: 4
    },
    {
        id: 4,
        name: 'Flat White',
        image: 'images/Flat White.png',
        price: 3
    },
    {
        id: 5,
        name: 'Late Macchiato',
        image: 'images/Late Macchiato.png',
        price: 4
    },
    {
        id: 6,
        name: 'Cafe au lait',
        image: 'images/Cafe au lai.png',
        price: 5
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
    <img src="image/${value.image}">
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        value.price  = products[key].price * value.quantity;
        count += value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            /*newDiv.innerHTML = `
                <div><img src='image/' + value.image></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;*/
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        products[key].price = quantity * products[key].price;
    }
    reloadCard();
}



//


