import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
        <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
