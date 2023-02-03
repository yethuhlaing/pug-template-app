// npm install express pug body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));

let customers = [
        {id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
        {id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113'},
        {id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176'},
]
app.get("/", (req, res) => {
        res.render("customerlist", {customers: customers});
})
app.get("/addcustomers", (req, res) => {
        res.render("addcustomers");
})
app.post("/addcustomers", (req, res) => {
        const newCustomer = {id: new Date().now, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, phone: req.body.phone};
        customers = [...customers, newCustomer];
        res.redirect("/")
})
app.listen(process.env.PORT || port, () => {
        console.log(`Server is running on port ${port}.`);
});