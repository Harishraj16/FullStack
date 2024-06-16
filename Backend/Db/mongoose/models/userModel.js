const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    city: String,
    street: String
});

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 10,
        max: 20,
        validate:{
            validator: v => v>=18,
            message: props => `${props.value} is less than 18`
        }

    },
    email: {
        type: String,
        //required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: ()=>Date.now()
    },
    UpdatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
});

userSchema.methods.sayAge = function(){
    console.log(`I'm ${this.age} years old!`)
}

userSchema.statics.findByName = function(name){
    return this.find({name: name});
}

userSchema.pre('save',function(next){
    this.name = `Mr. ${this.name}`;
    next();
})

userSchema.post('save',function(doc,next){
    doc.name = `${doc.name} modified`;
    next();
})

const userModel = mongoose.model('User',userSchema)

module.exports = userModel;