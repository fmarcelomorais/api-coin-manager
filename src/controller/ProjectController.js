const Project = require('../model/projectModel')

module.exports = class projectController{

    static async create(req, res){
        const {
            name,
            budget,
            category,
            cost,
            services
        } = req.body

        if(name === ""){
            res.status(400).json({message: 'Nome é Obrigatório'})
            return
        }
        if(budget === ""){
            res.status(400).json({message: 'Custo é Obrigatório'})
            return
        }
        if(!category){
            res.status(400).json({message: 'Categoria é Obrigatório'})
            return
        }
        if(cost === ""){
            res.status(400).json({message: 'valor é Obrigatório'})
            return
        }

        const project = new Project({
            name,
            budget,
            category,
            cost,
            services
        })

        try {            
            await project.save(project)
            res.status(201).json(project)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async readAllProjects(req, res){
        try {            
            const projects = await Project.find()           
            res.status(200).json(projects)  
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async getOneProject(req, res){
        const _id = req.params._id

        try {
            const project = await Project.findById(_id)
            res.status(200).json(project)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async editeProject(req, res){
        const _id = req.params._id

        const {
            name,
            budget,
            category,
            cost,
            services
        } = req.body

        const altProject = {
            name,
            budget,
            category,
            cost,
            services
        } 
        
        try {
            
            await Project.findByIdAndUpdate(_id, altProject)
            res.status(200).json(altProject)

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async deleteProject(req, res){

        const _id = req.params._id

        try {
            await Project.findByIdAndDelete(_id)
            res.status(200).json({message: 'Excluido com sucesso.'})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}
