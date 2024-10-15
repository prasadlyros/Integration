import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Pages/Singin';
import Login from './login';
import SignUp from './signUp';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/'element = {<Signin></Signin>}></Route>
    //     <Route path='/login' element = {<Login></Login>}></Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login></Login>}></Route>
        <Route path='/signUp' element = {<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
