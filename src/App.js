
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Recipes from './recipes';


function App() {
  return (
    <>
    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}

    <Header/>
    <BrowserRouter>
  <Routes>
  <Route path="/" Component={Main} ></Route>
  <Route path="/recipes" Component={Recipes} ></Route>
  </Routes>
</BrowserRouter> 
  
    {/* <Main/> */}
    </>
  );
}

export default App;
