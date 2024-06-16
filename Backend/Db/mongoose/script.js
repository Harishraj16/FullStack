// const mongoose = require("mongoose");
// const User = require("./models/userModel");

// mongoose.connect("mongodb://localhost:27017/data")
//         .then(console.log("connected"))
//         .catch(err => console.log(err));

// const user = new User({
//     name: "John Doe",
//     age: 20
// });

// // user.save().then(console.log("user saved"));

// async function run(){
//     const newuser = await user.save();
//     console.log(newuser);
// }

// run();


const mongoose = require("mongoose");

const User = require("./models/userModel");

mongoose.connect("mongodb://localhost:27017/company")
        .then(console.log("connected"))
        .catch(err => console.log(err));

// async function run(){
//     const newuser = await User.create({
//         name: "John Doe",
//         age: 18,
//         hobbies:["sports","music"],
//         address:{
//             street:"123 Main St"
//         },
//         email:"Harish@gmail.com"
//     });
//     console.log(newuser);
// }

        // async function run(){
        // try{
        //     const user = await User.exists({name:"John Doe"});
        //     console.log(user);
        // }catch(e){
        //     console.log(e);
        // }

        // async function run(){
        //     try{
        //         const user = await User.findOne({name:"John Doe"});
        //         user.sayAge();
        //     }catch(e){
        //         console.log(e);
        //     }

        async function run(){
            try{
                const user = await User.findOne();
                user.name = 'Harish';
                user.age = 19;
                await user.save();
                console.log(user);
            }catch(e){
                console.log(e);
            }
    }


run();