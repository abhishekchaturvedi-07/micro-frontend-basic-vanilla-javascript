import { mount as productsMount }from 'products/ProductsIndex'
import { mount as cartsMount } from 'cart/CartShow'
console.log('Container ')

productsMount(document.querySelector('#productsContentContainer'))
cartsMount(document.querySelector('#cartContentContainer'))