const Express = require('express')
const bodyParser = require('body-parser')
const app = Express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(bodyParser.urlencoded({extended : false}))

app.use((req, res, next) => {
    res.status(400).send('<h1>Page not found</h1>')
})
app.listen(3000,() => {
    console.log('Listening to server on port 3000')
});