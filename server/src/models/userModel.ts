import  { model, Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from '../util/validateEnv'
/* Pending things to implement 
    1)resetPasswordToken -- method pending
*/

export interface User {
    name: string,
    email: string,
    gender: string,
    password: string,
    role: string,
    createdAt?: Date,
    resetPasswordToken?: string
    resetPasswordExpire?: string
    getJwtToken(): string,
    comparePassword(pass: string): string,
}
// interface UserMethod {
    
// }
// 1. Create an interface representing a document in MongoDB.
const userSchema = new Schema({
    name: {
        type: String,
        required: [true,"Enter Your Name"],
    },
    email:{
        type: String,
        required: [true,"Enter Your email"],
        unique: true,
    },
    gender: {
        type: String,
        enum: ["male","female","other"],
        required: [true,"Select Your Gender"]
    },
    password: {
        type: String,
        required: [true,"Enter Your Password"],
        minLength: [8,"Password should have 8 chars"],
        select: false,
    },
    role : {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},{timestamps: true})


// pre middleware in Mongoose is a way to perform actions before a specific event//////////////

   // 1)Hashed password- will use bcrypt lib to crete hash of password
userSchema.pre<User>('save',async function(next) {
    this.password = await bcrypt.hash(this.password,10)
    next()
})

    // 2) to convert email address to lowercase
userSchema.pre<User>("save", function(next) {
    this.email = this.email.toLowerCase();
    next()
  });

// Model Methods /////////////////////////
    // 1)to get JWT Token
userSchema.methods.getJwtToken =  function(): string {
    return jwt.sign({email: this.email,id: this._id} as {email: string,id: string},env.JWT_SECRETKEY as string,{
        expiresIn: env.JWT_EXPIRE
    })
}
    // 2) to compare password
userSchema.methods.comparePassword = async function(userEnterPass: string): Promise<boolean>{
    return await bcrypt.compare(userEnterPass, this.password)
}
    //3)resetPasswordToken -- method pending 

//2) Mongoose will  automatically infer the document type from your schema definition as using InferSchemaType
// type User = InferSchemaType<typeof userSchema>;

// 3) Create a Model.
export default model<User>("User", userSchema);