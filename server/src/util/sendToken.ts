import { User } from '../models/userModel';
import env from '../util/validateEnv'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sendToken = (user: User,statusCode: number,res:any) => {
    const token = user.getJwtToken();
    const option: {
        expires: Date,
        httpOnly: boolean
    } = {
        expires : new Date(Date.now() + env.JWT_EXPIRE ),
        httpOnly : true
    }
    res.status(statusCode).cookie('token',token,option).json({
        success: true,
        user,
        token
    })
}

export default sendToken;