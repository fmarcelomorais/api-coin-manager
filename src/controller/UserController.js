const User = require('../model/usersModel')

module.exports = class UserController {

    static async create(req, res){
        const {
            name,
            email,
            password
        } = req.body

        if(name === ""){
            res.status(400).json({message: 'Nome é obrigatório'})
            return
        }
        if(email === ""){
            res.status(400).json({message: 'email é obrigatório'})
            return
        }
        if(password === ""){
            res.status(400).json({message: 'Senha é obrigatório'})
            return
        }

        const user = new User({
            name,
            email,
            password
        })

        try {
            
            await user.save(user)
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async readAllUser(req, res){

        const users = await User.find()
        res.status(200).json(users)

    }

    static async updateUser(req, res){
        const _id = req.params._id
        const {
            name,
            email,
            password
        } = req.body

        const altUser = {
            name,
            email,
            password
        }
        try {
            
            await User.findByIdAndUpdate(_id, altUser)
            res.status(200).json(altUser)
        } catch (error) {
            res.status(400).json({message: error.message})
            
        }
        
    }

    static async deleteUser(req, res){
        const _id = req.params._id

        try {
            await User.findByIdAndDelete(_id)
            res.status(200).json({message: 'Excluido com sucesso.'})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}