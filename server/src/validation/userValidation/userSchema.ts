import Joi from 'joi'

export const usereSchema = {
    signupUser: Joi.object({
        name: Joi.string().required(),
        number: Joi.number().min(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }),
    signinUser: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
}