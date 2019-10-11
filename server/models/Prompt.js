const mongoose= require ('mongoose')
const Schema = mongoose.Schema;

const promptSchema = new Schema({
    prompt: String,
    
})

const Prompts = mongoose.model ('Prompts', promptSchema);

module.exports = Prompts;