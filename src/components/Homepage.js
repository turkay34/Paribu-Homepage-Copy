import {Component} from "react";
import Carousel from "./common/Slider";
import RegisterCTA from "./CallToAction/RegisterCTA";
import CoinMarket from "./CoinMarket/CoinMarket";

class Homepage extends Component {
    render() {
        return (
            <>
                <Carousel/>
                <RegisterCTA/>
                <CoinMarket/>
            </>
        )
    }
}

export default Homepage;