import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Staff from './Components/StaffCards';
import Students from './Components/StudentCards';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/staff" element={<Staff/>}/>
      <Route path="/students" element={<Students/>}/>
      </Routes>
    </BrowserRouter>
);
}

export default App;
