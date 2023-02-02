import { RequestHandler } from "express-serve-static-core";
import userModel, { User } from "../models/userModel";
import sendToken from "../util/sendToken";
/*  Functionality to implement 
User 
    1)signup user {completed}
    2)login user {completed}
    3)logOutUser 
    4)Get User Details
    5)Forgot Password
    6)Reset Password
    7)Update User Profile
Admin
    1)Get All User details
    2)Get Single User details
    3)Update User Role
    4)Delete Role
*/
type signupBody = {
    name: string;
    email: string;
    gender: string;
    password: string;
}
type loginBody = {
    email: string,
    password: string,
}
export const signupUser: RequestHandler = async(req,res,next) => {
    /* Steps Involve in registering user
    1)Existing user check
    2)Hashed password
    3)User Creation
    4)Token generate
    */
   const {name,email,gender,password}:signupBody = req.body;
    try {
        // 1)Existing user check
        // findOne will connect with db and check based on filter(email) that exist or not
        const existingUser = await userModel.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: 'User Already Exist'})
        }

        // 2)Hashed password- will use bcrypt lib to crete hash of password(already implement using pre-middleware)
        // const hashedPassword = await bcrypt.hash(password,10) //her 10 is number of times function will run

        // 3)User Creation - using create method to store user in db
        const user = await userModel.create({
            name: name,
            email: email,
            gender: gender,
            password: password,
        })
        // 4)Token generate - will use jsonwebtoken lib for token creation
        // const token = jwt.sign({email: user.email,id: user._id},env.JWT_SECRETKEY)
        sendToken(user,201,res) //by this we are eliminating 4 and 5 steps
        // Sending Response 201 (successfully record created)
        // res.status(201).json({user: user,token: token})

    } catch (error) {
        next(error)
        console.log(error);
        res.status(500).json({message: "something went wrong"}) 
    }
}

export const loginUser:RequestHandler = async(req,res,next) => {
    const {email,password}: loginBody = req.body
    // 1)Check if user Exist
    // 2)Compare credential
    try {
    // 1)check email and password
    if(!email || !password){
        return res.status(400).json({message: "Please Enter Email And Password"});
    }
    // 1)finding user in db
    const user= await userModel.findOne({email}).select("+password");

    if(!user){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    // 2) compare password
    const isPasswordMatch = await user.comparePassword(password);
    if(!isPasswordMatch){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    sendToken(user,201,res)

    } catch (error) {
        next(error)
    }

}