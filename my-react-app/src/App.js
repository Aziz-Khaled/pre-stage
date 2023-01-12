import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import CardList from './components/cardList'
import {data} from './components/data'
function App() {
  return (
    <div className="App">
    <NavBar/>

     <CardList data ={data}/>
    
    </div>
  );
}

export default App;
