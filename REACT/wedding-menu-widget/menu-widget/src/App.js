import './App.css';
import flower1 from './assets/flower1.png';

function App() {
  return (
    <div className="menu__Container">
      <img className="menu__Flower-left" src={flower1} alt='flower' />
      <img className="menu__Flower-right" src={flower1} alt='flower' />
      <div className="menu__Content">
        <h1 className="menu__Heading">
          Reception Dinner Menu
        </h1>
      </div>
    </div>
  );
}

export default App;
