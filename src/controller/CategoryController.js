const Category = require('../model/categoriesModel')


module.exports = class CategoryCrontroller{

    static async create(req, res){
        const { name } = req.body

        if(name == ""){
            res.status(400).json({message: 'Nome da Categoria obrigatório'})
            return
        }

        const category = new Category({
            name
        })

        try {

            await category.save(category)
            res.status(201).json(category)
            
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
    }

    static async readAllCategories(req, res){

        try {
            const categories = await Category.find()
            res.status(200).json(categories)
            
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async updateCategory(req, res){
        const _id = req.params._id
        const name = req.body.name

        const category = await Category.findById(_id)

        if(!category){
            res.status(400).json({message: 'Não ahá Categoria Cadastrada'})
            return
        }

      
        const altCategory = {
            name
        }

        try {
            
            await Category.findByIdAndUpdate(_id, altCategory)
            res.status(200).json(altCategory)

        } catch (error) {
            res.status(400).json({message: error.message})
        }

    }

    static async deleteCategory(req, res){

        const _id = req.params._id

        try {
            
            await Category.findByIdAndDelete(_id)
            res.status(201).json({message: 'Deletado como sucesso'})
            
        } catch (error) {
            res.status(400).json({message: error.message})
            
        }
    }
}