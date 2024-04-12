import Tarefa from "../schemas/Tarefa"

class TarefaController{
    constructor(){
        
    }
    create(req,res){
        req.on("data", async (data) => {
            const dataTarefa = JSON.parse(data)
            await Tarefa.create(dataTarefa)
            return res.json(dataTarefa)
        })
    }
    
    update(req,res){
        req.on("data", async (data) => 
        {
            const dataTarefa = JSON.parse(data)
            const { id } = req.params
            const tarefas = await Tarefa.findOneAndUpdate({"_id" : {id}.id},{description: dataTarefa.description, duedate: dataTarefa.duedate, done: dataTarefa.done, hide: dataTarefa.hide})
            return res.json(tarefas)
        })
    }
    async read(req,res){
        const sortDate = { duedate: 1}
        const tarefas = await Tarefa.find().sort(sortDate)
        return res.json(tarefas)

    }
    async delete(req,res){
        const { id } = req.params
        console.log("chegou aqui")
        const tarefas = await Tarefa.deleteOne({"_id" : {id}.id})
        return console.log(tarefas," Deletado")
    
    }
    async readId(req,res){
        const { id } = req.params
        const tarefas = await Tarefa.find({"_id" : {id}.id})
        return res.json(tarefas[0])
    }
 hide(req,res){
    req.on("data", async (data) => 
    {
        const dataTarefa = JSON.parse(data)
        const { id } = req.params
        const tarefa = await Tarefa.find({"_id" : {id}.id})
        console.log(tarefa[0].done)
        if (tarefa[0].done){
           const tarefas = await Tarefa.findOneAndUpdate({"_id" : id},{description: dataTarefa.description, duedate: dataTarefa.duedate, done: dataTarefa.done, hide: dataTarefa.hide})
        }
        return res.json(dataTarefa)
    })
}

}
export default new TarefaController()

