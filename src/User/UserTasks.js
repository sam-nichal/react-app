import React, { useState } from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task.task}</li>
      ))}
    </ul>
  );
};

const UserTasks = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ]);

  const [tasks, setTasks] = useState([
    { task: "task1" },
    { task: "task2" },
    { task: "task3" },
  ]);

const addTasks = () =>{

}
  return (
    <div>
     <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={addTasks}>Add Task</button>
      <h2 className="text-2xl font-bold mb-4">User and Task List</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">User</th>
            <th className="py-2 px-4">Tasks</th>
            <th className="py-2 px-4 border-l">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-r">{user.name}</td>
              <td className="py-2 px-4">
                <TaskList tasks={tasks} />
              </td>
              <td className="py-2 px-4 border-l">Actions</td>
            </tr>
           
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default UserTasks;
