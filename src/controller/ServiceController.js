const Service = require('../model/servicesModel')

module.exports = class ServiceController{

    static async create(req, res){

        const { name, cost, description } = req.body

        if(name == ""){
            res.status(400).json({message: 'Nome é obrigatorio'})
            return
        }
        if(cost ==""){
            res.status(400).json({message: 'valor é obrigatorio'})
            return
        }

        const service = new Service({
            name,
            cost,
            description
        })

        try {
            const newService =  await service.save(service)
            res.status(201).json(service) 
        } catch (error) {
            res.status(400).json({message: error.message}) 
        }      
        
    }

    static async servicesAll(req, res){

        try {
            const services = await Service.find()
            res.status(200).json(services)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async updateService(req, res){
        const _id = req.params._id

        const { name, cost, description } = req.body

        const altService = {
            name,
            cost,
            description
        }
        try {
            await Service.findByIdAndUpdate(_id, altService)
            res.status(200).json(altService)
            
        } catch (error) {
            
            res.status(400).json({message: error.message})
        }
    }

    static async deleteService(req, res){

        const _id = req.params._id

        try {
            await Service.findByIdAndDelete(_id)
            res.status(200).json({message: 'Excluido com sucesso'})
            
        } catch (error) {
            
            res.status(400).json({message: error.message})
        }
    }
}