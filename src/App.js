
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/system';
import Navbar from "./components/Navbar/Navbar"
import Home  from './pages/home/Home';
import ExerciseDetails from './pages/exerciseDetails/ExerciseDetails';


function App() {
  return (
<Box>
  <Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetails/>}/>

    </Routes>
  </Navbar>


</Box>
  );
}

export default App;
