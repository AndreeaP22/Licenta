let catr=document.querySelectorAll('.btn');

let products =[
{
  name: 'Espresso',
  tag: 'espresso',
  price: 5,
  btn: 0
},
 
 {
  name: 'Americano',
  tag: 'americano',
  price: 2,
  btn: 0
},
{
  name: 'Espresso',
  tag: 'espresso',
  price: 5,
  btn: 0
},
{
  name: 'Cappuccino',
  tag: 'cappuccino',
  price: 4,
  btn: 0
},
{
  name: 'Late Macchiato',
  tag: 'late macchiato',
  price: 4,
  btn: 0
},
{
  name: 'Flat White',
  tag: 'flat white',
  price: 3,
  btn: 0
},

]


for(let i=0; i< cart.lenght; i++)
{
	cart[i].addEventListener('click', () =>{
		//console.log("added to  cart")
		cartNumbers(products[i]);
		totalCost(products[i]);

	})

}
 

 function onLoadCartNumers() {
 	let productNumers = localStorage.getItem('cartNumbers');
 	if(productNumers){
 		document.querySelector('.cart span').textContent =  productNumers;

 	}

 
 }

function cartNumbers(products){
	console.log("The product clicked is " , products);

	let productNumers = localStorage.getItem('cartNumbers');
	/*console.log(productNumers);
	console.log(typeof productNumers);*/




	productNumers = parseInt(productNumers);

	if(productNumers)
	{ 

		localStorage.setItem('cartNumbers' , productNumers + 1);
		document.querySelector('.cart span').textContent =  productNumers + 1;

	}
	else
	{
		localStorage.setItem('cartNumbers' , 1);
		document.querySelector('.cart span').textContent = 1;

	}
	setItem(products);
	/*console.log(typeof productNumers);*/
	
}
function setItem(products){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems= JSON.parse(cartItems);
	console.log("My cartItems are", cartItems);
	console.log("Inside of setItem function");
	console.log("My products is",products);

	if(cartItems !== null){
	 if(cartItems[products.tag] != underfined)
	 {
	 	 cartItems= {
				...cartItems,
				[products.tag]: products
	 	 }
	 	 
	 }
			cartItems[products.tag].inCart += 1;
	 }



	else
	{
		products.inCart = 1;
	    cartItems = {
		[products.tag]: products 
	}

	}
	
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));



}

function totalCost(products)
{
   //console.log("Prețul produselor îi", products.price);
	let cartCost = localStorage.getItem('totalCost');
	
	console.log("My cartCost is", cartCost);
	console.log(typeof  cartCost);

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost +  products.price);

	}
	else {
			localStorage.setItem("totalCost", products.price);

	}




function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	console.log(cartItems);
	let productContainer = document.querySelector(".products-container")

	if(cartItems && productContainer){
		console.log("running");ß
	}


}

	
}

onLoadCartNumers();
displayCart();













