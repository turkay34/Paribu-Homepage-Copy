import {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import Homepage from "./Homepage";
import CoinDetail from "./CoinDetail/CoinDetail";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (<Homepage />)}/>
                <Route exact path="/:coinName" render={(props) => (<CoinDetail {...props}/>)}/>
            </Switch>
        )
    }
}

export default Routes;