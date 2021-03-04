const express = require('express');
const consign = require('consign')
const bodyParser = require('body-parser');

module.exports = () => {

    const app = express();
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(express.static('C:/Users/Ale/Documents/GitHub/easyfin'))
    
        consign()
            .include('Js/controllers')
            .into(app);

    return app;
 
}