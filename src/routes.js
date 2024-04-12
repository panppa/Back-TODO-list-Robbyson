import { Router } from "express"
import TarefaController from "./controllers/TarefaController"

const routes = new Router()

routes.post("/tarefas",TarefaController.create)
routes.get("/tarefas", TarefaController.read)
routes.get("/tarefas/:id", TarefaController.readId)
routes.delete("/tarefas/:id", TarefaController.delete)
routes.put("/tarefas/:id", TarefaController.update)
routes.put("/hide/:id", TarefaController.hide)


export default routes