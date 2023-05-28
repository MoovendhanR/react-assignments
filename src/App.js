import './App.css';
import Calculator from './Components/Calculator';
import ReverseTimer from './Components/ReverseTimer';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <br/>
      <Timer/>
      <br/>
      <ReverseTimer/>
    </div>
  );
}

export default App;
