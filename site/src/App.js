import { Link } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
     <Link to='/home'>home</Link>
     <Link to='/login'>login</Link>
     <Link to='/menu'>menu</Link>
     <Link to='/menu2'>Menu2</Link>
     <Link to='/menu3'>menu3</Link>
     
    </div>
  );
}

export default App;