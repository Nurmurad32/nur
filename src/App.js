import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatchFound from './Component/NoMatchFound/NoMatchFound';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import AboutMe from './Component/AboutMe/AboutMe';
import Projects from './Component/Projects/Projects';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/contact">
          <Contact></Contact>
        </Route>
        <Route  path="/blog">
          <Blog></Blog>
        </Route>
        <Route  path="/aboutMe">
          <AboutMe></AboutMe>
        </Route>
        <Route  path="/projects">
          <Projects></Projects>
        </Route>
        <Route  path="*">
          <NoMatchFound></NoMatchFound>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
