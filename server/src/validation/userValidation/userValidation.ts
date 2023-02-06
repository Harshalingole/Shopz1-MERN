import { RequestHandler } from "express";
import validateEnv from "../../util/validateEnv";
import { usereSchema } from "./userSchema";

export const signupUserValidator: RequestHandler = (req,res,next) => validateEnv(usereSchema)