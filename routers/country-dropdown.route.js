const express = require('express')
const { addCountry, getCountries } = require('../controllers/country-dropdown.controller')
const route = express.Router()


route.post('/add', addCountry)
route.get('/get', getCountries)

module.exports =  route