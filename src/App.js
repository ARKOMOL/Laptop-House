
import './App.css';
import Shop from './Components/Shop';

function App() {
 
  return (
    <div className="App">
      <h1>Laptop House</h1>
      <h3>Choose Your Laptop</h3>
      <Shop></Shop>
      <div>
        <h1>Question 1</h1>
        <h4>
          State:
          1.States are mutable.
          2.It's initialize on component mount.
          3.It used for rendering dynamic changes within component.
        </h4>
        <h4>
          Props:
          1.Props are immutable.
          2.We can pass props between components.
          3.We can pass from parent to child.And it mostly use to communicate between components.
        </h4>
      </div>
    </div>
  );
}

export default App;
