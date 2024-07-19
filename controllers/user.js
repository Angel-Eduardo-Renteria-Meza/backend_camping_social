import { UserModel } from "../models/user.js";
export const saveUsers = async (req, res) => {
    const data = req.body
    try {
        
        const user = new UserModel(data)

        const userSaved = await user.save()
        
        res.status(200).json(userSaved)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error contacte al administrador"
        })
    }
    
}

export const LogIn = async (req, res) => {
    const { email, password, username} = req.body

    try {
        
        const user = await UserModel.findOne({username, email, password})    

        res.status(200).json({status: true, user})
    } catch (error) {
        console.log(error);
        res.status(404).json(false)
    }
}