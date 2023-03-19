import { deleteTaskRequest } from "../api/tasks.api"
function TaskCard({task}){

    const handleDelete = async (id) => {
        try {
           const response = await deleteTaskRequest(id) 
           console.log(response)
        } catch (error) {
            console.error(error)
        }
        
    }
    return(
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done === 1 ? "✔️": "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={()=> handleDelete(task.id)}>delete</button>
            <button>edit</button>
          </div>
    )
}
export default TaskCard