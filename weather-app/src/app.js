const expres = require('express');
const hbs = require('hbs');
// const request = require ('request');
const weatherData = require('../utils/weatherData');
const path = require('path')
const app = expres() // serveri

// Thirrja e path-it (Define Path)
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partial')


// Setup per perdorimin e file-ve
app.set('view engine', 'hbs');
app.set('views', viewsPath) // file-at dinamik
hbs.registerPartials(partialsPath)

// Setup-i per file statik
app.use(expres.static(publicDirectoryPath))




// // get Home Page: url/ localhost:3000 = www.vardona.com
// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Andi Morina',
//     } )

// })


// URL : localhost:3000/ndihme = www.vardona.com/ndihme
// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'Help!!',
//         name: 'Andi Morina',
//         helpText: 'Ask one of our agents for help'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About',
//         name: 'Andi Morina',
//         image: '/images/foto.png'
//     })
// })

// app.get ('/weather' , (req, res) => {
//     if (!req.query.search) {
//         return res.send ({
//             error: 'You must specify a city'
//         })   
//     }
//     res.send ({
//         forecast: 'The weather is sunny!',
//         location: 'Prizren'
//     })
// })

// app.get ('/products' , (req, res) => {
//     if (!req.query.search) {
//         return res.send ({
//             error: 'You must choose a product'
//         })
//     }
//     res.send ({
//         products: ['pc', 'mouse']
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404', {
//         title: 'Error 404 not found'
//     } )
// })



app.get('/weather', (req, res) => {

    const search = req.query.search

    weatherData(search, (error, {temperature, description, cityName} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
    })
})

//localhost:3000/help
app.listen(3000, () =>{
    console.log('Server po ngon')
})

