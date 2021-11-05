import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Users from '../pages/users'
import NotFound from '../pages/404'

const Wrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={Users} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default Wrapper
