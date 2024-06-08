import { useState } from "react";
import Button from "./common/Button";
import TextInput from "./common/TextInput";
import btnConstants from "./constants/btnConstants";

export default function Todos() {
  const [taskName, setTaskName] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const saveTask = () => {
    if (!taskName) return;
    const taskId = allTasks.length;
    const newTask = { taskId, taskName };
    setAllTasks([...allTasks, newTask]);
  };

  const handleNewTaskChange = (e) => {
    setTaskName(e.target.value);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = allTasks.filter((task) => task.taskId !== taskId);
    setAllTasks(filteredTasks);
  };

  const editTask = (taskId) => {};

  return (
    <div>
      <h2>Add Todo</h2>
      <div>
        <label>Task Name</label>
        <br />
        <TextInput value={taskName} onChange={handleNewTaskChange} />
        <div>
          <Button
            btnName="Add Task"
            onClick={saveTask}
            btnColor={btnConstants.BTN_SUCCESS}
          />
        </div>
      </div>
      <div>
        {allTasks?.length > 0 ? (
          allTasks?.map((task) => (
            <div key={task?.taskId} className="d-flex justify-content-between">
              <div className="text">{task.taskName}</div>
              <div>
                <Button
                  btnName="Delete"
                  onClick={() => deleteTask(task.taskId)}
                  btnColor={btnConstants.BTN_DANGER}
                />
                <Button
                  btnName="Edit"
                  onClick={editTask}
                  btnColor={btnConstants.BTN_PRIMARY}
                />
              </div>
            </div>
          ))
        ) : (
          <div>No Tasks Created</div>
        )}
      </div>
    </div>
  );
}
