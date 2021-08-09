const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.send("hello world");
})


module.exports = routes;