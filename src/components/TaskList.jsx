import React, { useEffect, useState } from 'react';
    import { collection, getDocs, onSnapshot } from "firebase/firestore";
    import { db } from '../App';
    import { Link } from 'react-router-dom';
    import TaskItem from './TaskItem';
    import { Button } from '@mui/material';

    function TaskList() {
      const [tasks, setTasks] = useState([]);

      useEffect(() => {
        const taskCollectionRef = collection(db, "tasks");
        const unsubscribe = onSnapshot(taskCollectionRef, (snapshot) => {
          setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
        return unsubscribe;
      }, []);

      return (
        <div>
          <h1>Tasks</h1>
          <ul>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
          <Link to="/add">
            <Button variant="contained">Add Task</Button>
          </Link>
        </div>
      );
    }

    export default TaskList;
