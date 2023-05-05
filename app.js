const Express = require('express')
const bodyParser = require('body-parser')
const app = Express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended : false}))

app.use(adminRoutes)
app.use(shopRoutes)

app.listen(3000,() => {
    console.log('Listening to server on port 3000')
});