// ARROW FUNCTION

const hello = (name='user') => {
    console.log('Hello ' + name + '!')
}

const kycu = (name = 'admin', password='admin') => {

var emri = document.getElementById('username').value
var fjalkalimi = document.getElementById('password').value
var success = document.getElementById('success')

if (emri == name && fjalkalimi == password) {
    success.innerHTML = 'successful login!'
}
else {
    success.innerHTML = 'Incorrect password.'

}

}

hello('Andi')

const products = {
    name: 'Notebook',
    price: 3, 
    stock: 200
}

const transaction = (type, { name, price, stock } = {}) => {
   console.log('Type: ', type, 'Name: ', name, 'Price: ', price, 'Stock: ', stock ) 
}

transaction('order' , product)