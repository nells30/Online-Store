const Express = require('express')
const bodyParser = require('body-parser')
const app = Express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(bodyParser.urlencoded({extended : false}))
app.use(Express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-error.html'))
})
app.listen(3000,() => {
    console.log('Listening to server on port 3000')
});