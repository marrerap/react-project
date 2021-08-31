import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Map from './pages/Map';
import Statistics from './pages/Statistics';




function App() {
  return (
    <Router>    
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Route path="*" >
            <Redirect to="/"/>
          </Route>
        </Switch>
         
      </div>
     
    </Router>
  );
}

export default App;
