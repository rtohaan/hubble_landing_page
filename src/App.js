import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Photo from './components/pages/Photo'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/photo' component={Photo} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
