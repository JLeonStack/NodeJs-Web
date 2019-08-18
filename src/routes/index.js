const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index.html', {titulo: 'NodeJs', mensaje: "Message accept from server"});
});

routes.get('/about', (req, res) => {
    res.render('about.html', { titulo: 'About', seccion: 'Section about',mensaje: "Message error from server"});
});

routes.get('/contact', (req, res) => {
    res.render('contact.html', { titulo: 'Contact', seccion: 'Section contact' ,mensaje: "Message waiting from server"});
});

module.exports = routes;