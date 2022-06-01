import mongoose from "mongoose";

const UsersScheema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required: true
    }
})

const Users = mongoose.model("User", UsersScheema);

export default Users;