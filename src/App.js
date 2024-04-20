import logo from './logo.svg';
import './App.css';
import S from './components/S';
import { Route, Routes } from 'react-router-dom';
import F from './components/F';
import Th from './components/Th';
import Fourth from './components/Fourth';



function App() {
  return (
    <div className="App">
<S/>
<Routes>
  <Route path='/' element={<F/>}/>\
  <Route path='/s' element={<Th/>}/>
  <Route path='/t' element={<Fourth/>}/>

</Routes>



</div>
   
  );
}

export default App;
