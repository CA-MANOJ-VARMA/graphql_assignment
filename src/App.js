import {BrowserRouter,Switch, Route} from 'react-router-dom'
import GenerateOTP from './components/GenerateOTP';
import LoginPage from './components/LoginPage';
import './App.css';
import ListOfUsers from './components/ListOfUsers';
import {ProtectedUsersRoute,ProtectedLoginRoute} from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GenerateOTP}/>
        <ProtectedLoginRoute exact path='/login' component={LoginPage}/>
        <ProtectedUsersRoute exact path='/users' component={ListOfUsers}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
