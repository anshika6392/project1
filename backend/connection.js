const mongoose = require('mongoose');

const url = "mongodb+srv://anshika:prachi6392@anshika.5djej.mongodb.net/ecofriendlyproducts?retryWrites=true&w=majority&appName=anshika"

mongoose.connect(url).then((result) => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});

module.exports=mongoose;