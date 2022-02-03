import './App.css';
import CircleD3 from './components/CircleD3';
import CircleReact from './components/CircleReact';
import CirclesD3 from './components/CirclesD3';
import CirclesReact from './components/CirclesReact';

function App() {
  return (
    <div className="App">
      <div className="column">
        <h2>D3</h2>
        <CircleD3 />
        <CirclesD3 />
      </div>
      <div className="column">
        <h2>React</h2>
        <CircleReact/>
        <CirclesReact/>
      </div>
    </div>
  );
}

export default App;
