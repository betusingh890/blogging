import mongoose from "mongoose";

const UsersScheema = mongoose.Schema({
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