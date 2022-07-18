import './App.css';
import Card from './Components/CharacterCard';
function App() {
  return (
    <div className="App">
    <h1>Harry Potter</h1>
    <h2>selecciona tu filtro</h2>
    <button>Estudiantes</button>
    <button>Staff</button>
    <div className="cards-container">
    <Card></Card>
    </div>

</div>
);
}

export default App;
