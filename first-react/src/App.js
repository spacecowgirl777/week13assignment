import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './login.js'
import Nav from './navbar.js'

function App() {
  return (
    <div className="container">
      <Nav />
      <Login />
    </div>    
  );
}

export default App;
