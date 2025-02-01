import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { ThemeProvider, createTheme } from '@mui/material/styles';
    import CssBaseline from '@mui/material/CssBaseline';
    import TaskList from './components/TaskList';
    import TaskForm from './components/TaskForm';
    import SignIn from './components/SignIn';
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      // Your Firebase config here
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);

    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    function App() {
      return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </Router>
        </ThemeProvider>
      );
    }

    export default App;
