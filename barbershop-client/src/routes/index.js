import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'

export const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Welcome/>
            </Route>

            <Route exact path="/signup">
                <SignUp/>
            </Route>

            <Route exact path="/signin">
                <SignIn/>
            </Route>

            <Route exact path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}