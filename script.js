"use strict";
/* jslint node: true */
/* jshint browser: true */

/*<!-- Coding Challenge 1:
=========================================
	Write a function that takes a string as an argument and returns the number of vowels contained in that string. 
	make sure you comment your steps
 
	The vowels are "a", "e", "i", "o", "u".
 
 	Example:
 	findVowels('hello') // = 2
 	findVowels('why') // = 0
-->

<script>
// your code goes here
  
</script>


<!-- Coding Challenge 2:
=========================================
	Code a small snippet with html/js parts
	The Html part should contain a parent container with a single button and random content blocks.
	The Javascript part should contain an event listener for a click on a button which will change one of the content blocks inner html to a random text.
-->

<html>
  <body>
    <!-- your code here -->
    
    <script>
    	// your code here
    </script>
  </body>
</html>


<!-- Coding Challenge 3:
=========================================
	Fetch Data from greenforce.com/cart.js
 
 	Visit greenforce.com and add 3 different items with different prices to the cart.
	Fetch the cart items and find the product with the lowest price.
	Find the product with the lowest price
	Render this product as html container and appended it to the <body> with image + title anchored to the product page
 
	Example:
	fetch("https://www.greenforce.com/cart.js").then(res => {
	return res.json();
	... 
-->
<script>
// your code goes here
  
</script>*/

//<!-- Coding Challenge 1:

function findVowels(str) {
  let vowels = 'aeiou';
  let count = 0;

  [...str].forEach(e => {
    if (vowels.includes(e))
      count++;
  });

  return count;
}

console.log(findVowels('hello'));
console.log(findVowels('why'));

//const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

//<!-- Coding Challenge 1:

//<!-- Coding Challenge 2:

document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('some__container').innerText = 'done';
});   

//<!-- Coding Challenge 2:

//<!-- Coding Challenge 3:

const getRes = async (url) => {
  const res = await fetch(url);

  if (!res.ok)
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    return await res.json();
};

getRes("https://www.greenforce.com/cart.js")
  .then(data => {
    const cartItems = data.items;
    let minPriceItem;

    cartItems.forEach(e => {
      if (cartItems[0].price >= e.price)
        cartItems.shift();
        minPriceItem = cartItems[0];
    });
    
    const element = document.createElement('a');
  
    element.innerHTML = `
      <a href=${minPriceItem.url}>
        <img src=${minPriceItem.image}></img>
        <span>${minPriceItem.title}</span>
      </a>
    `;

    document.getElementById('body').append(element);
  });

/*
let cartPrices = cartContent.map(e => e.price);

let min = (a, b) => a < b ? a : b;

let minPriceItem = cartContent.find(e => e.price == cartPrices.reduce(min));
*/

//<!-- Coding Challenge 3: