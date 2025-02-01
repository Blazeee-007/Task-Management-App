import React, { useState } from 'react';
    import { useNavigate, useParams } from 'react-router-dom';
    import { TextField, Button, Typography } from '@mui/material';
    import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
    import { db } from '../App';

    function TaskForm() {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const { id } = useParams();
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
          await updateDoc(doc(db, "tasks", id), { title, description });
        } else {
          await addDoc(collection(db, "tasks"), { title, description });
        }
        navigate('/tasks');
      };

      return (
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            {id ? 'Edit Task' : 'Add Task'}
          </Typography>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            {id ? 'Update' : 'Save'}
          </Button>
        </form>
      );
    }

    export default TaskForm;
