const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required!"],
        validate: {
            validator: function (p) {
                return /^[a-zA-Z\s]+$/g.test(p)
            },
            message: 'Only Strings Allowed!'
        }
    },
})


module.exports = mongoose.model("Person", PersonSchema)