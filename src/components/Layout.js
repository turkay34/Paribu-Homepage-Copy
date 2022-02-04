import {Component} from "react";
import Header from "./common/Header";
import BottomHeader from "./common/BottomHeader";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes/>
                <BottomHeader/>
            </BrowserRouter>
        )
    }
}

export default Layout;