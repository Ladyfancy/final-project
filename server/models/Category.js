const mongoose= require ('mongoose')
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : String,
   image: {type: String, default: "http://www.nationalaquatic.com/wp-content/uploads/2012/11/generic-profile-pic.png"},
    description: String,
    
})

const Category = mongoose.model ('Category', categorySchema);

module.exports = Category;