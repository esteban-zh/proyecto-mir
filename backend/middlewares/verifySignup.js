import User from "../models/index.js"
import { ROLES } from "../models/role.js"

export const checkDuplicateUser = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if (user) return res.status(400).json({message: 'the user already exist'})

    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).json({message: 'the email already exist'})

    next()
}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i= 0; i< req.body.roles.length; i++){
             if (!ROLES.includes(req.body.roles[i])){
            return res.status(400).json({
                message: `Role ${req.body.roles[i]} does not exists`
            })
        }
    }
 }
 next();
}