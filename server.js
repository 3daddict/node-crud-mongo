//Dependencies
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    expressLayouts = require('express-ejs-layouts'),
    mongoose = require('mongoose')

//configuration
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//database connection
mongoose.connect('mongodb://3daddict:76aSy32Hn>@ds163940.mlab.com:63940/olympics')

//routes
app.use(require('./app/routes'));

//start server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});