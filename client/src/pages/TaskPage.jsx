import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";
function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const response = await getTaskRequest();
      setTasks(response.data);
    }
    loadTask();
  }, []);

  function renderMain() {
    if(tasks.length == 0) return <h1>No tasks</h1>
    return tasks.map((task) => <TaskCard task={task} key={task.id}></TaskCard>);
  }
  return (
    <div>
      <h1>TASKS</h1>
      {renderMain()}
    </div>
  );
}
export default TaskPage;
