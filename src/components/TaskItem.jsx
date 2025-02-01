import React from 'react';
    import { Link } from 'react-router-dom';
    import { ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
    import DeleteIcon from '@mui/icons-material/Delete';
    import { doc, deleteDoc } from "firebase/firestore";
    import { db } from '../App';

    function TaskItem({ task }) {
      const handleDelete = async () => {
        await deleteDoc(doc(db, "tasks", task.id));
      };

      return (
        <ListItem>
          <ListItemText primary={task.title} secondary={task.description} />
          <ListItemSecondaryAction>
            <Link to={`/edit/${task.id}`}>
              <IconButton edge="end" aria-label="edit">
                {/* Edit Icon */}
              </IconButton>
            </Link>
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    }

    export default TaskItem;
