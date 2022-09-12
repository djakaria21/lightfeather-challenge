import './App.css';
import DropDown from './components/DropDown';
import { Route, Routes, BrowserRouter} from 'react-router-dom';



function App(){
  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormModal />} ></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
};


export default App;