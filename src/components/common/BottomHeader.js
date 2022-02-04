import {Component} from "react";
import classes from "./common.module.scss";

class BottomHeader extends Component {
    render() {
        return(
            <div className={classes.bottomHeader}>
                <a className={classes.activeLink} href=""><span><i className="fas fa-coins"/>Anasayfa</span></a>
                <a className={classes.bottomLink} href=""><span><i className="fas fa-chart-line"/>Piyasalar</span></a>
                <a className={classes.bottomLink} href=""><span><i className="fas fa-hands-wash"/>Kolay Al/Sat</span></a>
                <a className={classes.bottomLink} href=""><span><i className="fas fa-wallet"/>Cüzdan</span></a>
                <a className={classes.bottomLink} href=""><span><i className="fas fa-user-alt"/>Cüzdan</span></a>
            </div>
        )
    }
}

export default BottomHeader;