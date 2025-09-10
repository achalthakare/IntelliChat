import userModel from '../models/user.model.js'

export const createUser = async ({email,password})=>{
if(!email || !password){
    throw new Error("Email and password are required");
}


const HashPass = await userModel.hashPassword(password);

const user = userModel.create({
    email,
    password:HashPass
})
return user;
}

export const getAllUsers = async({userId})=>{
    const allUsers = await userModel.find({
        _id:{$ne:userId}
    });
    return allUsers;
}