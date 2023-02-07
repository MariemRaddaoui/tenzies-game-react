import './App.css';
import Die from './components/Die';

function App() {
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
          <Die number="1"/>
      </div>
      <button className="roll-dice" >Roll</button>
    </main>
  );
}

export default App;
