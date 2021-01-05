import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Dashboard from "./components/dashboard.component";

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/'>
          <Redirect to='login' />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
