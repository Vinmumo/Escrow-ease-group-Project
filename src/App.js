import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Samples from './components/Samples';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Welcome/>
      <Samples/>
    </div>
  );
}

export default App;
