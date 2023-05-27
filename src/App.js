import './App.css';
//npm install react-icons --save
//npm i react-router-dom@6
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import Mentors from './components/Mentors/Mentors';
function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Mentors />
    </div>
  );
}

export default App;
