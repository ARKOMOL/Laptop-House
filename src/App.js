
import './App.css';
import Shop from './Components/Shop';

function App() {
 
  return (
    <div className="App">
      <h1>Laptop House</h1>
      <h3>Choose Your Laptop</h3>
      <Shop></Shop>
     <div className="Question-part">
     <div className='question1'>
        <h1>State Vs Props </h1>
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
      <div className="question2">
    <h1>
      How React Works
    </h1>
    <h4>
      React is a popular library in javaScript which is developed by Facebook.It's can make single page application.Normally a website using DOM(Document Object Model) which is too slow for html and xml documents.That's why Racat use Virtual Dom.Virtual Dom most efficent way to update the browser's Dom.React Virtual DOM takes care of updating the DOM to match the React elements.And this is too fast.
    </h4>
      </div>
     </div>
    </div>
  );
}

export default App;
