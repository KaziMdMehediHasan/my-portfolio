import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/projects/:id">
           <ProjectDetails></ProjectDetails>
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
