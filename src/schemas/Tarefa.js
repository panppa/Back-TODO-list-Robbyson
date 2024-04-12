import mongoose,{Schema} from 'mongoose'

const TarefaSchema = new Schema({
    description: String,
    duedate: Date,
    done: Boolean,
    hide: Boolean
})

export default mongoose.model("Tarefas", TarefaSchema)