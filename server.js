const server = require('express');
const app = server();
const path = require('path')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session) ;



//  store every session in database
const store = new MongoDBStore({
uri: 'mongodb+srv://samaira2009:samaira2009@cluster1.rhrvl.mongodb.net/<dbname>?retryWrites=true&w=majority',
collection: 'sessions'
})


// using express session
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false ,
    store : store
    }))

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(server.static(path.join(__dirname, 'public')));





// parsing post and forms data 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())







const homeRoute = require('./route/home_route');
const user = require('./model/user');
app.use(homeRoute)







mongoose.connect('mongodb+srv://samaira2009:samaira2009@cluster1.rhrvl.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database is connected !!!!!!! ')
    app.listen(3000, async () => {
        const user = await User.findOne()
if(!user){
    const newuser = new User({
        name: 'Samaira',
        email: 'samairanoronha@gmail.com',
        password: 'samairanoronha',
    })
await newuser.save()
}

        console.log('Samaira your Server is listening on port  3000 ')
 
    })
});









