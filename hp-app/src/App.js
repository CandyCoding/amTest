import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import './App.scss';
import CharactersByFilter from './Pages/Charactersbyfilter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/characters/:name"element={<CharactersByFilter/>}/>
      </Routes>
    </BrowserRouter>
);
}

export default App;
