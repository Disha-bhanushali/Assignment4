
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

import Navigation from "./Components/Navigation"
import page1 from "./Components/page1"
import page2 from "./Components/page2"



function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
        
        <Route path="/page2" component={page2} /> 
        <Route path="/page1" component={page1} />
          <Navigation/>
          
          
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
